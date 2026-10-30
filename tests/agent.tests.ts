import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runAgent } from '../src/core/agent.js';
import { stubModel } from '../src/models/stub.js';

test('runAgent should generate a random reply', async () => {

    const result = await runAgent(stubModel([{ content: "Hello, I'm doing well!" }]), "Hello, how are you?");

    assert.ok(result);

});

