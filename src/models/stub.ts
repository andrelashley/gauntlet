import type { Model } from "../core/types.js";

export function stubModel(
    responses: Array<Awaited<ReturnType<Model['generate']>>>
): Model {
    let index = 0;
    return {
        async generate() {
            const response = responses[index++];
            if (!response) throw new Error("Stub model exhausted responses");
            return response;
        }
    };
}