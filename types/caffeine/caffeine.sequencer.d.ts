interface CaffeineSequencer {
  __toString(): string;
  Abort(): void;
  Execute(): boolean;
  Finished(): boolean;
  New(actions: LuaTable): CaffeineSequencer; // TODO: Confirm this
  Next(): boolean;
  Reset(): void;
  ShouldAbort(): boolean;
  ShouldReset(): boolean;
}
