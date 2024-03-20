interface CaffeineCachable {
  New(value: unknown, cb: () => unknown): CaffeineCachable;
  Set(value: unknown): void;
  SetCallback(cb: () => unknown): void;
  TryUpdate(): void;
  Update(): void;
}
