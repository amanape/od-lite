import type { Observation } from "src/types/observations";
import { Topic } from "src/types/root";

class ObservationFactory {
  static fromTerminalOutput(input: string, output: string): Observation {
    const data = { input, output };
    return { type: Topic.OBSERVATION, data };
  }
}

export default ObservationFactory;
