import type { BaseEvent, Topic } from "./root";

export interface Command extends BaseEvent {
  type: Topic.ACTION;
  data: {
    command: string;
  };
}
