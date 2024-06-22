import { describe, it, expect } from "bun:test";
import TerminalManager from "../src/terminal-manager";

describe("TerminalManager", () => {
  it("should call the write command", () => {
    const tm = new TerminalManager();
    expect(tm.write("ls")).toBe("ls-result");
  });
});
