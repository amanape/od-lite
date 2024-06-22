import type { Message } from "@abc/agent";
import type Agent from "@abc/agent";
import type { Action } from "../types/actions";

export class BasicAgent implements Agent {
  public act(state: Message[]): Action {
    return { command: state[0].message + "ls" };
  };
}
