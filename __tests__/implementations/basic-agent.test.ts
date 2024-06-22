import { describe, beforeEach, it, expect } from "bun:test";
import type Agent from "../../src/abc/agent";
import { BasicAgent } from "../../src/implementations/basic-agent";

describe("Agent", () => {
  let agent: Agent;

  beforeEach(() => {
    agent = new BasicAgent();
  });

  it("generates a terminal action", () => {
    const userPayload = "terminal"

    const terminalAction = agent.query(userPayload);
    expect(terminalAction).resolves.toEqual({ command: userPayload + "ls" });
  });
});
