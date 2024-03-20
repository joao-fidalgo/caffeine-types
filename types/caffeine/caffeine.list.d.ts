interface CaffeineList<T> {
  clear(): void;
  clone(): CaffeineList<T>;
  concat(list: CaffeineList<T>): CaffeineList<T>;
  contains(value: T): boolean;
  count(): number;
  each(callback: (value: T) => boolean): void;
  filter(callback: (value: T) => boolean): CaffeineList<T>;
  find(callback: (value: T) => boolean): boolean | null;
  findIndex(callback: (value: T) => boolean): number | null;
  join(separator: string): CaffeineList<T>;
  map(callback: (value: T) => boolean): CaffeineList<T>;
  New(from: LuaTable | null): CaffeineList<T>;
  peek(): T;
  pop(): void;
  push(value: unknown): void;
  reduce(
    callback: (result: unknown, value: T) => boolean,
    initialValue: unknown
  ): boolean;
  remove(value: T): boolean;
  reverse(): CaffeineList<T>;
  sort(callback: (...args: unknown[]) => boolean): void;
  toString(): string;
}
