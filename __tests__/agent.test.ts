import { describe, beforeEach, it, expect } from "bun:test";
import Agent from "../src/agent";

describe("Agent", () => {
  let agent: Agent;

  beforeEach(() => {
    agent = new Agent();
  });

  it("generates a message action", () => {
    const userPayload = { message: "Hello from a User!" };

    const messageAction = agent.act(userPayload);
    expect(messageAction).toEqual({ message: "Hello from an AI!" });
  });

  it("generates a terminal action", () => {
    const userPayload = { message: "terminal" };

    const terminalAction = agent.act(userPayload);
    expect(terminalAction).toEqual({ command: "ls" });
  });
});
