import Agent from "../src/core/abc/agent";
import { Action, Message } from "../src/core/types";
import { Topic } from "../src/core/types/root";

export class MockAgent implements Agent {
  public async query(message: string): Promise<Action | Message> {
    if (message === "terminal") {
      return { type: Topic.ACTION, data: { command: message + "ls" } };
    }

    return { type: Topic.MESSAGE, data: { role: "ai", message: message + "msg" } };
  };
}
