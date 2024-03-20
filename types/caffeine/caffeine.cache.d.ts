interface CaffeineCache {
  Get(key: unknown): unknown;
  IsCached(key: unknown): boolean;
  New(): CaffeineCache;
  Set(key: unknown, value: unknown, duration: number): void;
}
