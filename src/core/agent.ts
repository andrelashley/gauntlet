import type { Message } from "./types.js";

export async function runAgent(prompt: string): Promise<string> {
    const messages: Message[] = [{ role: 'system', content: "You are a helpful assistant." }];

    const maxSteps = 4;

    messages.push({ role: 'user', content: prompt });

    // for (let step = 0; step < maxSteps; step++) {

    // }

    setTimeout(() => {
        console.log("Agent is thinking...");
    }, 500);

    const reply = generateRandomReply();
    console.log(reply);

    return reply;
}

function generateRandomReply(): string {
  const replies = [
    "Interesting. Tell me more.",
    "I have considered your request.",
    "Gauntlet is thinking...",
    "That sounds suspiciously reasonable.",
    "I reject your premise entirely.",
    "Proceed. For now.",
  ];

  return replies[Math.floor(Math.random() * replies.length)]!;
}