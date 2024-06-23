import type { BaseEvent, Topic } from "./root";

interface Command extends BaseEvent {
  type: Topic.ACTION;
  data: {
    command: string;
  };
}

export type Action = Command;
