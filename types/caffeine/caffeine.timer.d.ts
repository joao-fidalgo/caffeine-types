interface CaffeineTimer {
  GetTime(): number;
  IsRunning(): boolean;
  New(type: string): CaffeineTimer;
  Reset(): void;
  Start(): void;
}
