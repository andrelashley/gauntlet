export type Message = 
    | { role: 'system'; content: string }
    | { role: 'user'; content: string }
    | { role: 'assistant'; content: string }
    | { role: 'tool'; callId: string; content: string; isError: boolean };