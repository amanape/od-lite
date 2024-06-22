class ObservationFactory {
  static fromTerminalOutput(input: string, output: string) {
    return { input, output };
  }
}

export default ObservationFactory;
