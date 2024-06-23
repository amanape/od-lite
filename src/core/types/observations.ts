import type { BaseEvent, Topic } from "./root";

interface TerminalObservation extends BaseEvent {
  type: Topic.OBSERVATION;
  data: {
    input: string;
    output: string;
  };
}

export type Observation = TerminalObservation;
