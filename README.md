# Gauntlet

Gauntlet is an evaluation and regression harness for AI agents.

The goal is simple: give an agent a task, run it through a repeatable evaluation pipeline, and determine whether its behavior improves, regresses, or breaks as the agent changes.

Gauntlet is currently in early development.

## Goals

Gauntlet is being built to support:

- Repeatable agent evaluations
- Regression testing for prompts, tools, and model changes
- Structured test cases and expected behaviors
- Deterministic and model-based scoring
- Failure analysis
- Comparison between agent versions
- Automated evaluation runs

## Current Status

The project currently contains the initial TypeScript agent loop and test infrastructure.

Early development is focused on establishing the core execution model before adding LLM providers, evaluators, scoring, and reporting.

## Example

```ts
import { runAgent } from "./core/agent.js";

const result = await runAgent("Hello, how are you?");

console.log(result);
```

## Running Tests

Install dependencies:

```bash
npm install
```

Run the test suite:

```bash
npm test
```

## Planned Architecture

```text
Test Case
   ↓
Agent
   ↓
Execution Trace
   ↓
Evaluator(s)
   ↓
Score / Assertions
   ↓
Result
```

Future versions may support multiple evaluators, model providers, datasets, agent configurations, and regression reports.

## Tech

- TypeScript
- Node.js
- Node Test Runner
- tsx

## License

MIT