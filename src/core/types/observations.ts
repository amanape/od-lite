import type { BaseEvent, Topic } from "./root";

export interface TerminalObservation extends BaseEvent {
  type: Topic.OBSERVATION;
  data: {
    input: string;
    output: string;
  };
}
