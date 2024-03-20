interface CaffeineCommand {
  New(prefix: string): CaffeineCommand;
  OnCommand(msg: string): void;
  Parse(msg: string): LuaTable;
  PrintHelp(): void;
  Register(
    command: string,
    helpmsg: string,
    cb: (args: LuaTable) => void
  ): void;
}
