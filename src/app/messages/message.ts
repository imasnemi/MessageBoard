export enum MessageType {
    'TEXT',
    'IMAGE',
    'VIDEO'
}

export interface Message {
    author?: string;
    content: string;
    date: string;
    type: MessageType;
    url?: string;
}
