import { describe, it, expect } from "bun:test";
import BasicRuntime from "../../src/implementations/basic-runtime";
import BasicTerminalManager from "../../src/implementations/basic-terminal-manager";

describe("Runtime", () => {
  it("should convert a terminal action into an observation", () => {
    const runtime = new BasicRuntime(new BasicTerminalManager());

    const input = { command: "ls" };
    const output = "ls-result";
    const observation = runtime.handle(input);

    expect(observation).toEqual({ input: input.command, output });
  });
});
