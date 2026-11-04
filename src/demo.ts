import { runAgent } from './core/agent.js';
import { stubModel } from './models/stub.js';

const result = await runAgent({
  prompt: 'Add 2 and 3',
  model: stubModel([
    { content: '', toolCalls: [{ id: 'call-1', name: 'add', arguments: { a: 2, b: 3 } }] },
    { content: 'The result is 5.' }
  ]),
  tools: [{
    name: 'add', description: 'Add two numbers',
    parameters: { type: 'object', properties: { a: { type: 'number' }, b: { type: 'number' } }, required: ['a', 'b'] },
    async execute(value) {
      if (typeof value !== 'object' || value === null || !('a' in value) || !('b' in value) ||
          typeof value.a !== 'number' || typeof value.b !== 'number') throw new Error('Invalid arguments');
      return value.a + value.b;
    }
  }]
});
console.log(JSON.stringify(result, null, 2));