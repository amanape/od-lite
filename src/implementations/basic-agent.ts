import type Agent from "@abc/agent";
import type { Action } from "../types/actions";

export class BasicAgent implements Agent {
  public async query(message: string): Promise<Action> {
    return { command: message + "ls" };
  };
}
