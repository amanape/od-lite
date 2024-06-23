import type Agent from "@abc/agent";
import type { Action } from "../types/actions";
import type { Message } from "../types/events";

export class BasicAgent implements Agent {
  public async query(message: string): Promise<Action | Message> {
    if (message === "terminal") {
      return { command: message + "ls" };
    }
    return { message: message + "msg" };
  };
}
