interface CaffeineModule {
  New(name: string): CaffeineModule;
  Enable(): void;
  Disable(): void;
  Toggle(): void;
  Sync(func: (...args: unknown[]) => unknown): void;
  Unsync(func: (...args: unknown[]) => unknown): void;
  Tick(): void;
}
