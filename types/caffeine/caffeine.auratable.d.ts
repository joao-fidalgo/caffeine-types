interface CaffeineAuraTable {
  AddOrUpdateAuraInstanceID(instanceID: number, aura: CaffeineAura): void;
  Contains(spells: CaffeineList<CaffeineSpell>): boolean;
  Clear(): void;
  Find(spell: CaffeineSpell): CaffeineAura;
  FindAny(spell: CaffeineSpell): CaffeineAura;
  FindAnyFrom(
    spells: CaffeineList<CaffeineSpell>,
    source: CaffeineUnit
  ): CaffeineAura;
  FindAnyOf(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindAnyOfMy(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindAnyOfTheirs(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindFrom(spell: CaffeineSpell, source: CaffeineUnit): CaffeineAura;
  FindLeastOf(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindLeastOfFrom(
    spells: CaffeineList<CaffeineSpell>,
    source: CaffeineUnit
  ): CaffeineAura;
  FindLeastOfMy(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindLeastOfTheirs(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindLongestOf(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindLongestOfFrom(
    spells: CaffeineList<CaffeineSpell>,
    source: CaffeineUnit
  ): CaffeineAura;
  FindLongestOfMy(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindLongestOfTheirs(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindMostOf(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindMostOfFrom(
    spells: CaffeineList<CaffeineSpell>,
    source: CaffeineUnit
  ): CaffeineAura;
  FindMostOfMy(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindMostOfTheirs(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindMy(spell: CaffeineSpell): CaffeineAura;
  FindShortestOf(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindShortestOfFrom(
    spells: CaffeineList<CaffeineSpell>,
    source: CaffeineUnit
  ): CaffeineAura;
  FindShortestOfMy(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindShortestOfTheirs(spells: CaffeineList<CaffeineSpell>): CaffeineAura;
  FindTheirs(spell: CaffeineSpell): CaffeineAura;
  GetMyUnitAuras(): LuaTable<CaffeineAura>;
  GetUnitAuras(): LuaTable<CaffeineAura>;
  GetUnitBuffs(): void;
  GetUnitDebuffs(): void;
  HasAnyDispelableAura(spell: CaffeineSpell): boolean;
  HasAnyStealableAura(): boolean;
  New(unit: CaffeineUnit): CaffeineAuraTable;
  // OnUpdate(auras: UnitAuraUpdateInfo): void;
  RemoveInstanceID(instanceID: number): void;
  Update(): void;
}
