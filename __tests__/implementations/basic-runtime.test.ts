import { describe, it, expect } from "bun:test";
import BasicRuntime from "../../implementations/basic-runtime";
import { MockTerminalManager } from "../../implementations/basic-terminal-manager";
import { Topic } from "../../src/core/types/root";

describe("Runtime", () => {
  it("should convert a terminal action into an observation", async () => {
    const runtime = new BasicRuntime(new MockTerminalManager());

    const input = "ls";
    const output = "ls-result";
    const observation = await runtime.handle({ type: Topic.ACTION, data: { command: input } });

    expect(observation).toEqual({ type: Topic.OBSERVATION, data: { input, output } });
  });
});
