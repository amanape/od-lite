import { describe, beforeEach, it, expect } from "bun:test";
import type Agent from "../../src/core/abc/agent";
import { BasicAgent } from "../../implementations/basic-agent";
import { Topic } from "../../src/core/types/root";

describe("Agent", () => {
  let agent: Agent;

  beforeEach(() => {
    agent = new BasicAgent();
  });

  it("generates a terminal action", () => {
    const userPayload = "terminal"

    const terminalAction = agent.query(userPayload);
    expect(terminalAction).resolves.toEqual({ type: Topic.ACTION, data: { command: userPayload + "ls" } });
  });

  it("generates a message action by default", () => {
    const userPayload = "message";

    const messageAction = agent.query(userPayload);
    expect(messageAction).resolves.toEqual({ type: Topic.MESSAGE, data: { role: "ai", message: userPayload + "msg" } });
  });
});
