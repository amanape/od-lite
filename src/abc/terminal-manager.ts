abstract class TerminalManager {
  public abstract write(command: string): Promise<string>;
}

export default TerminalManager;
