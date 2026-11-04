import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runAgent } from '../src/core/agent.js';
import { stubModel } from '../src/models/stub.js';

test('executes a tool and returns the final answer', async () => {

    const result = await runAgent({
        prompt: 'Say hello',
        tools: [{
            name: 'hello',
            description: 'Returns a greeting',
            parameters: { type: 'object' },
            async execute() { return 'Hello'; }
        }],
        model: stubModel([
            {content: '', toolCalls: [{ id: '1', name: 'hello', arguments: {} }]},
            {content: 'Done'}
        ])
    });

    assert.equal(result.status, 'completed');
    assert.equal(result.answer, 'Done');
    assert.deepEqual(result.messages[2], {
        role: 'tool', callId: '1', content: 'Hello', isError: false
    });
});

