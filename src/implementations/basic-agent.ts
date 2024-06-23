import type Agent from "@abc/agent";
import type { Action } from "../types/actions";
import type { Message } from "../types/messages";
import { Topic } from "../types/root";

export class BasicAgent implements Agent {
  public async query(message: string): Promise<Action | Message> {
    if (message === "terminal") {
      return { type: Topic.ACTION, data: { command: message + "ls" } };
    }

    return { type: Topic.MESSAGE, data: { role: "ai", message: message + "msg" } };
  };
}
