interface CaffeineAura {
  // CreateFromUnitAuraInfo(unitAuraInfo: WoWAPI.UnitAuraInfo): CaffeineAura;
  GetAuraInstanceID(): number;
  GetCanApplyAura(): boolean;
  GetCastByPlayer(): boolean;
  GetCount(): number;
  GetDispelType(): string;
  GetDuration(): number;
  GetExpirationTime(): number;
  GetIcon(): string;
  GetIndex(): number;
  GetIsBossDebuff(): boolean;
  GetIsStealable(): boolean;
  GetName(): string;
  GetNameplateShowAll(): boolean;
  GetNameplateShowPersonal(): boolean;
  GetRemainingTime(): number;
  GetSource(): CaffeineUnit;
  GetSpell(): CaffeineSpell;
  GetTimeMod(): number;
  GetType(): string;
  IsBuff(): boolean;
  IsDebuff(): boolean;
  IsDispelableBySpell(spell: CaffeineSpell): boolean;
  IsDown(): boolean;
  IsUp(): boolean;
  IsValid(): boolean;
  New(unit: CaffeineUnit, index: number, type: string): CaffeineAura;
}
