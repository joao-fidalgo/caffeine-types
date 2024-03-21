type CaffeineItemConditionCallback = (
  this: void,
  spell: CaffeineItem
) => boolean;

type CaffeineItemEventCallback = (this: void, spell: CaffeineItem) => void;

interface CaffeineItem {
  Call(unit: CaffeineUnit): boolean;
  Click(x: CaffeineVector3 | number, y?: number, z?: number): boolean;
  Condition(name: string, func: CaffeineItemConditionCallback): CaffeineItem;
  EvaluateCondition(name: string): boolean;
  GetCharges(): number;
  GetChargesRemaining(): number;
  GetCondition(name: string): CaffeineItemConditionCallback | null;
  GetCooldown(): number;
  GetCooldownRemaining(): number;
  GetIcon(): number;
  GetID(): number;
  GetLastUseAttempt(): number;
  GetLastUseTime(): number;
  GetName(): string;
  GetOnUseFunction(): CaffeineItemEventCallback | boolean;
  GetPreUseFunction(): CaffeineItemEventCallback | boolean;
  GetSpell(): CaffeineSpell | null;
  GetTarget(): CaffeineUnit | null;
  GetTimeSinceLastUse(): number;
  GetTimeSinceLastUseAttempt(): number;
  GetUsableFunction(): CaffeineItemConditionCallback | boolean;
  GetWasLooking(): boolean;
  HasCondition(name: string): boolean;
  IsCurseDispel(): boolean;
  IsDiseaseDispel(): boolean;
  IsEquippable(): boolean;
  IsEquipped(): boolean;
  IsEquippedAndUsable(): boolean;
  IsInRange(unit: CaffeineUnit): boolean;
  IsItem(item: CaffeineItem): boolean;
  IsMagicDispel(): boolean;
  IsOnCooldown(): boolean;
  IsPoisonDispel(): boolean;
  IsUsable(): boolean;
  New(id: number): CaffeineItem;
  OnUse(func: CaffeineItemEventCallback): CaffeineItem;
  PreUse(func: CaffeineItemEventCallback): CaffeineItem;
  SetTarget(unit: CaffeineUnit): CaffeineItem;
  Usable(): boolean;
  UsableIf(func: CaffeineItemConditionCallback): CaffeineItem;
  Use(unit: CaffeineUnit, condition: string): boolean;
}
