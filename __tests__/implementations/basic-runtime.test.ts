import { describe, it, expect } from "bun:test";
import BasicRuntime from "../../src/implementations/basic-runtime";
import { MockTerminalManager } from "../../src/implementations/basic-terminal-manager";
import { Topic } from "../../src/types/root";

describe("Runtime", () => {
  it("should convert a terminal action into an observation", async () => {
    const runtime = new BasicRuntime(new MockTerminalManager());

    const input = "ls";
    const output = "ls-result";
    const observation = await runtime.handle({ command: input });

    expect(observation).toEqual({ type: Topic.OBSERVATION, data: { input, output } });
  });
});
