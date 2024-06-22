import type TerminalManager from "@abc/terminal-manager";

export class MockTerminalManager implements TerminalManager {
  async write(command: string) {
    return `${command}-result`;
  }
}

export class BasicTerminalManager implements TerminalManager {
  public async write(command: string): Promise<string> {
    const proc = Bun.spawn(command.split(" "));
    return new Response(proc.stdout).text();
  }
}
