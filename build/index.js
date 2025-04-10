import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import axios from "axios";
import axiosRetry from 'axios-retry';
import { z } from "zod";
class ReadwiseMcp {
    server;
    axios;
    constructor() {
        this.server = new McpServer({
            name: "Readwise MCP",
            version: "0.0.1"
        });
        this.axios = axios.create({
            baseURL: process.env.BASE_URL ?? "https://readwise.io",
            timeout: 10000,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Access-Token": process.env.ACCESS_TOKEN,
            },
        });
        axiosRetry(this.axios, {
            retries: 3,
            retryDelay: () => 5000,
            retryCondition: (error) => {
                const responseStatus = error.response?.status;
                return !responseStatus || responseStatus >= 400;
            }
        });
        process.on("SIGINT", () => {
            this.server.close();
            process.exit(0);
        });
        this.initializeMcpClient();
        this.registerTools();
    }
    async run() {
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
    }
    initializeMcpClient() {
        this.axios.post("/api/mcp/initialize")
            .catch((reason) => console.error(`Failed to call the MCP initialization endpoint`, reason));
    }
    registerTools() {
        this.server.tool("search_readwise_highlights", { query: z.string() }, async ({ query }) => {
            const response = await this.axios.post("/api/mcp/highlights", { query });
            return { content: [{ type: "text", text: JSON.stringify(response.data.results) }] };
        });
    }
}
new ReadwiseMcp().run().catch(console.error);
