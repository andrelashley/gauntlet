import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runAgent } from '../src/core/agent.js';

test('runAgent should generate a random reply', async () => {

    const result = await runAgent("Hello, how are you?");

    assert.ok(result);

});

