import type { Command } from "./actions";
import type { AIMessage, UserMessage } from "./messages";
import type { TerminalObservation } from "./observations";

export type Action = Command;
export type Message = UserMessage | AIMessage;
export type Observation = TerminalObservation;

export type Event = Message | Action | Observation;
