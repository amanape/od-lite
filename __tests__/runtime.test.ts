import { describe, it, expect } from "bun:test";
import Runtime from "../src/runtime";
import TerminalManager from "../src/terminal-manager";

describe("Runtime", () => {
  it("should convert a terminal action into an observation", () => {
    const runtime = new Runtime(new TerminalManager());

    const input = { command: "ls" };
    const output = "ls-result";
    const observation = runtime.handle(input.command);

    expect(observation).toEqual({ input: input.command, output });
  });
});
