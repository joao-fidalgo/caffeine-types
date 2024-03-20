interface CaffeineAPLTrait {
  __tostring(): string;
  New(cb: () => boolean): CaffeineAPLTrait;
  Evaluate(): boolean;
}

interface CaffeineAPLActor {
  __tostring(): string;
  AddTraits(...args: CaffeineAPLTrait[]): CaffeineAPLActor;
  Evaluate(): boolean;
  Execute(): boolean;
  GetActor(): CaffeineAPLActor;
  HasTraits(): boolean;
  New(cb: () => boolean): CaffeineAPLActor;
}

interface CaffeineAPL {
  __tostring(): string;
  AddAction(
    action: string,
    cb: (...args: unknown[]) => unknown
  ): CaffeineAPLActor;
  AddAPL(
    apl: CaffeineAPL,
    condition: (...args: unknown[]) => boolean
  ): CaffeineAPLActor;
  AddItem(
    item: CaffeineItem,
    condition?: string | ((...args: unknown[]) => boolean)
  ): CaffeineAPLActor;
  AddSpell(
    spell: CaffeineSpell,
    condition?: string | ((...args: unknown[]) => boolean)
  ): CaffeineAPLActor;
  AddSequencer(
    sequencer: CaffeineSequencer,
    condition: (...args: unknown[]) => boolean
  ): CaffeineAPLActor;
  AddVariable(
    name: string,
    cb: (...args: unknown[]) => unknown
  ): CaffeineAPLActor;
  Execute(): void;
  GetVariable(name: string): unknown;
  New(name: string): CaffeineAPL;
  SetVariable(name: string, value: unknown): void;
}
