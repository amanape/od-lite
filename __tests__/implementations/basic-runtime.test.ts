import { describe, it, expect } from "bun:test";
import { Topic } from "../../src/core/types/root";
import { MockRuntime } from "../../implementations/basic-runtime";

describe("Runtime", () => {
  it("should convert a terminal action into an observation", async () => {
    const runtime = new MockRuntime();

    const input = "ls";
    const output = "output";
    const observation = await runtime.handle({ type: Topic.ACTION, data: { command: input } });

    expect(observation).toEqual({ type: Topic.OBSERVATION, data: { input, output } });
  });
});
