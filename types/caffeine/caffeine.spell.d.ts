interface CaffeineSpell {
  Call(unit: CaffeineUnit): boolean;
  Cast(
    unit: CaffeineUnit,
    condition?: string | ((self: CaffeineSpell) => boolean)
  ): boolean;
  Castable(): boolean;
  CastableIf(func: (spell: CaffeineSpell) => boolean): CaffeineSpell;
  ClearCastableFunction(): CaffeineSpell;
  Click(x: number | CaffeineVector3, y?: number, z?: number): boolean;
  Condition(
    name: string,
    func: (self: CaffeineSpell) => boolean
  ): CaffeineSpell;
  EvaluateCondition(name: string): boolean;
  ForceCast(unit: CaffeineUnit): boolean;
  Fresh(): CaffeineSpell;
  GetCastableFunction(): (self: CaffeineSpell) => void;
  GetCastLength(): number;
  GetCharges(): number;
  GetChargesFractional(): number;
  GetChargesRemaining(): number;
  GetCondition(name: string): ((self: CaffeineSpell) => boolean) | null;
  GetCooldown(): number;
  GetCooldownRemaining(): number;
  GetCost(): number;
  GetCount(): number;
  GetFullRechargeTime(): number;
  GetIcon(): number;
  GetID(): number;
  GetLastCastTime(): number;
  GetMaxCharges(): number;
  GetName(): string;
  GetOnCastFunction(): (self: CaffeineSpell) => void;
  GetPostCastFunction(): (self: CaffeineSpell) => void;
  GetPreCastFunction(): (self: CaffeineSpell) => void;
  GetRange(): LuaMultiReturn<[number, number]>;
  GetTarget(): CaffeineUnit;
  GetTimeSinceLastCast(): number;
  GetTimeSinceLastCastAttempt(): number;
  GetWasLooking(): boolean;
  HasCondition(name: string): boolean;
  HasRange(): boolean;
  IsCurseDispel(): boolean;
  IsDiseaseDispel(): boolean;
  IsFree(): boolean;
  IsInRange(unit: CaffeineUnit): boolean;
  IsKnown(): boolean;
  IsKnownAndUsable(): boolean;
  IsMagicDispel(): boolean;
  IsOnCooldown(): boolean;
  IsPoisonDispel(): boolean;
  IsSpell(spell: CaffeineSpell): boolean;
  IsUsable(): boolean;
  New(id: number): CaffeineSpell;
  OnCast(func: (spell: CaffeineSpell) => void): CaffeineSpell;
  OnCooldown(): boolean;
  PostCast(func: (self: CaffeineSpell) => void): CaffeineSpell;
  PreCast(func: (spell: CaffeineSpell) => void): CaffeineSpell;
  SetTarget(unit: CaffeineUnit): CaffeineSpell;
}
