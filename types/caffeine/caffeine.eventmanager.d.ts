interface CaffeineEventManager {
  New(): CaffeineEventManager;
  RegisterEvent(event: string, handler: (...args: unknown[]) => void): void;
  RegisterWoWEvent(event: string, handler: (...args: unknown[]) => void): void;
  TriggerEvent(event: string, ...args: unknown[]): void;
}
