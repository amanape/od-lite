import type { AIMessage, UserMessage } from "./messages";
import type { ActionEvent, ObservationEvent } from "./root";

export type Message = UserMessage | AIMessage;

// Message is used instead of MessageEvent because we fix that type to be more specific
// It is Action and Observation that are more generic and depend on the user
export type Event = Message | ActionEvent | ObservationEvent;
