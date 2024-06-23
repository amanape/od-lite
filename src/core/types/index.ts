import type { Action } from "./actions";
import type { Message } from "./messages";
import type { Observation } from "./observations";

export type Event = Message | Action | Observation;
