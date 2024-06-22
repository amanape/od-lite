import type TerminalManager from "../abc/terminal-manager";

class BasicTerminalManager implements TerminalManager {
  write(command: string) {
    return `${command}-result`;
  }
}

export default BasicTerminalManager;
