interface CaffeineRefreshable {
  New(value: unknown, cb: () => unknown): CaffeineRefreshable;
  Set(value: unknown): void;
  SetCallback(cb: () => unknown): void;
  TryUpdate(): void;
  Update(): void;
}
