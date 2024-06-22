import { describe, it, expect } from "bun:test";
import ObservationFactory from "../../src/utils/observation-factory";
import { Topic } from "../../src/types/root";

describe("ObservationFactory", () => {
  it("should convert a terminal output into an observation", () => {
    const input = "ls";
    const output = "ls-result";
    const observation = ObservationFactory.fromTerminalOutput(input, output);

    expect(observation).toEqual({
      type: Topic.OBSERVATION,
      data: { input, output },
    });
  });
});
