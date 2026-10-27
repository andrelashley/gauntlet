# Gauntlet

Gauntlet is an evaluation and regression harness for AI agents.

It is designed to make it easier to test agent behavior against repeatable scenarios, compare changes between versions, and catch failures before they reach production.

## Goals

Gauntlet aims to help evaluate things like:

- Response quality
- Tool-call correctness
- Task completion
- Hallucinations and unsupported assumptions
- Prompt regressions
- Model regressions
- Latency
- Cost

## Why Gauntlet?

AI systems can appear to work while quietly becoming worse in ways that are difficult to detect manually.

A prompt change might improve one scenario and break three others. A model upgrade might behave differently with tools. An agent might produce a convincing answer without actually completing the requested task.

Gauntlet provides a repeatable way to test those behaviors.

## Status

Early development.

The initial focus is on building a simple TypeScript-based evaluation runner with reusable test cases and structured results.

## Planned Features

- Define evaluation scenarios
- Run scenarios against an agent
- Store expected outcomes
- Score results
- Compare evaluation runs
- Detect regressions
- Track latency and token usage
- Support multiple models and providers
- Generate readable evaluation reports

## Getting Started

Install dependencies:

```bash
npm install
```

Run the project in development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Project Structure

```text
gauntlet/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

The structure will evolve as the evaluation engine develops.

## Example

Eventually, a Gauntlet test might look something like:

```ts
{
  name: "Weather tool selection",
  input: "What is the weather in Vancouver?",
  expected: {
    tool: "weather",
    shouldCompleteTask: true
  }
}
```

Gauntlet would run the scenario, capture the agent's behavior, evaluate the result, and report whether the test passed.

## Philosophy

AI evaluation should be treated like software testing:

- Repeatable
- Measurable
- Easy to run
- Easy to understand
- Difficult to accidentally ignore

The goal is not to prove that an AI system is perfect.

The goal is to know when you made it worse.

## License

MIT