import Runtime from "../src/core/abc/runtime";
import { Action, Observation } from "../src/core/types";
import { Topic } from "../src/core/types/root";

export class MockRuntime implements Runtime {
  public async handle(action: Action): Promise<Observation> {
    return { type: Topic.OBSERVATION, data: { input: action.data.command, output: 'output' } };
  }
}
