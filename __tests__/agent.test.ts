import { describe, beforeEach, it, expect } from "bun:test";
import Agent from "../src/agent";

describe("Agent", () => {
  let agent: Agent;

  beforeEach(() => {
    agent = new Agent();
  });

  it("generates a terminal action", () => {
    const userPayload = { message: "terminal" };

    const terminalAction = agent.act(userPayload);
    expect(terminalAction).toEqual({ command: userPayload.message + "ls" });
  });
});
