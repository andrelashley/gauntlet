import type { Tool, ToolDefinition } from './types.ts';

export class ToolRegistry {
    private tools: Map<string, Tool> = new Map();

    constructor(tools: readonly Tool[]) {
        for (const tool of tools) {
            if (!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(tool.name)) throw new Error(`Invalid tool name: ${tool.name}`);
            if (this.tools.has(tool.name)) throw new Error(`Duplicate tool name: ${tool.name}`);
            this.tools.set(tool.name, tool);
        }       
    }
    definitions(): ToolDefinition[] {
        return [...this.tools.values()].map(({ name, description, parameters }) => ({ name, description, parameters }));    
    }
    get(name: string): Tool | undefined { return this.tools.get(name); }
}

