import { describe, it, expect } from "bun:test";
import BasicTerminalManager from "../../src/implementations/basic-terminal-manager";

describe("TerminalManager", () => {
  it("should call the write command", () => {
    const tm = new BasicTerminalManager();
    expect(tm.write("ls")).toBe("ls-result");
  });
});
