import type Agent from "@core/abc/agent";
import type { Action } from "@core/types/actions";
import type { Message } from "@core/types/messages";
import { Topic } from "@core/types/root";

export class BasicAgent implements Agent {
  public async query(message: string): Promise<Action | Message> {
    if (message === "terminal") {
      return { type: Topic.ACTION, data: { command: message + "ls" } };
    }

    return { type: Topic.MESSAGE, data: { role: "ai", message: message + "msg" } };
  };
}
