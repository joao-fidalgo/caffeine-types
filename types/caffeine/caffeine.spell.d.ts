type CaffeineSpellConditionCallback = (
  this: void,
  spell: CaffeineSpell
) => boolean;

type CaffeineSpellEventCallback = (this: void, spell: CaffeineSpell) => void;

interface CaffeineSpell {
  Call(unit: CaffeineUnit): boolean;
  Cast(
    unit: CaffeineUnit,
    condition?: string | CaffeineSpellConditionCallback
  ): boolean;
  Castable(): boolean;
  CastableIf(func: CaffeineSpellConditionCallback): CaffeineSpell;
  ClearCastableFunction(): CaffeineSpell;
  Click(x: CaffeineVector3 | number, y?: number, z?: number): boolean;
  Condition(name: string, func: CaffeineSpellConditionCallback): CaffeineSpell;
  EvaluateCondition(name: string): boolean;
  ForceCast(unit: CaffeineUnit): boolean;
  Fresh(): CaffeineSpell;
  GetCastableFunction(): (self: CaffeineSpell) => void;
  GetCastLength(): number;
  GetCharges(): number;
  GetChargesFractional(): number;
  GetChargesRemaining(): number;
  GetCondition(name: string): CaffeineSpellConditionCallback | null;
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
  GetOnCastFunction(): CaffeineSpellEventCallback;
  GetPostCastFunction(): CaffeineSpellEventCallback;
  GetPreCastFunction(): CaffeineSpellEventCallback;
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
  OnCast(func: CaffeineSpellEventCallback): CaffeineSpell;
  OnCooldown(): boolean;
  PostCast(func: CaffeineSpellEventCallback): CaffeineSpell;
  PreCast(func: CaffeineSpellEventCallback): CaffeineSpell;
  SetTarget(unit: CaffeineUnit): CaffeineSpell;
}
