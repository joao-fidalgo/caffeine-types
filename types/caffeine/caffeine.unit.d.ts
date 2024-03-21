interface CaffeineUnit {
  CanAttack(unit: CaffeineUnit): boolean;
  CanSee(unit: CaffeineUnit): boolean;
  Exists(): boolean;
  GetAngle(target: CaffeineUnit): number;
  GetAuras(): CaffeineAuraTable;
  GetCastingOrChannelingEndTime(): number;
  GetCastingOrChannelingSpell(): CaffeineSpell | null;
  GetChannelOrCastPercentComplete(): number;
  GetClass(): CaffeineClass;
  GetCombatDistance(target: CaffeineUnit): number;
  GetCombatReach(): number;
  GetCombatTime(): number;
  GetComboPoints(unit?: CaffeineUnit): number;
  GetComboPointsDeficit(unit: CaffeineUnit): number | null;
  GetComboPointsMax(): number;
  GetDistance(unit: CaffeineUnit): number;
  GetEmpoweredStage(): number;
  GetEnemies(range: number): number;
  GetFacing(): number;
  GetGCD(): number;
  GetGUID(): string;
  GetHealAbsorbedHealth(): number;
  GetHealth(): number;
  GetHealthPercent(): number;
  GetHP(): number;
  GetID(): number;
  GetMaxGCD(): number;
  GetMaxHealth(): number;
  GetMaxPower(powerType?: number): number;
  GetMeleeAttackers(): number;
  GetMeleeBoost(): number;
  GetName(): string;
  GetOMToken(): string;
  GetPartyHPAround(distance: number, percent: number): number;
  GetPosition(): CaffeineVector3;
  GetPower(powerType?: number): number;
  GetPowerDeficit(powerType?: number): number;
  GetPowerRegen(): number;
  GetPowerType(): number;
  GetPP(powerType?: number): number;
  GetRawUnit(): string;
  GetRealizedHealth(): number;
  GetRealizedHP(): number;
  GetStagger(): number;
  GetStaggeredHealth(): number;
  GetStaggerPercent(): number;
  GetSwingTimers(): LuaMultiReturn<[number, number]>;
  GetTimeCastIsAt(percent: number): number;
  InMelee(unit: CaffeineUnit): boolean;
  IsAffectingCombat(): boolean;
  IsAlive(): boolean;
  IsBehind(unit: CaffeineUnit): boolean;
  IsBoss(): boolean;
  IsCasting(): boolean;
  IsCastingOrChanneling(): boolean;
  IsChanneling(): boolean;
  IsDamage(): boolean;
  IsDead(): boolean;
  IsDry(): boolean;
  IsEnemy(): boolean;
  IsFacing(unit: CaffeineUnit): boolean;
  IsFocus(): boolean;
  IsFriendly(): boolean;
  IsHealer(): boolean;
  IsHostile(): boolean;
  IsIndoors(): boolean;
  IsInfront(unit: CaffeineUnit): boolean;
  IsInParty(): boolean;
  IsInterruptible(): boolean;
  IsInterruptibleAt(percent: number, ignoreInterruptible?: boolean): boolean;
  IsMounted(): boolean;
  IsMouseover(): boolean;
  IsMoving(): boolean;
  IsMovingAtAll(): boolean;
  IsOutdoors(): boolean;
  IsPCU(): boolean;
  IsPet(): boolean;
  IsPlayer(): boolean;
  IsStealthed(): boolean;
  IsSubmerged(): boolean;
  IsTank(): boolean;
  IsTanking(unit: CaffeineUnit): boolean;
  IsTarget(): boolean;
  IsUnit(unit: CaffeineUnit): boolean;
  IsValid(): boolean;
  IsWithinCombatDistance(target: CaffeineUnit, distance: number): boolean;
  IsWithinCone(
    target: CaffeineUnit,
    angle: number,
    distance: number,
    rotation?: number
  ): boolean;
  IsWithinDistance(target: CaffeineUnit, distance: number): boolean;
  InCombatOdds(): number;
  LinearRegression(
    time: LuaTable, // TODO: Confirm this
    percent: number
  ): LuaMultiReturn<[number, number]>;
  New(unit: string): CaffeineUnit;
  PredictHealth(time: number): number;
  PredictTime(percent: number): number;
  SetLastCombatTime(time: number): void;
  StartTTDTicker(): void;
  TimeToDie(): number;
  Token(): string;
  WatchForSwings(): void;
}
