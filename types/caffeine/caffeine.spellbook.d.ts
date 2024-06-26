interface CaffeineSpellBook {
  GetHighestRank(spells: CaffeineList<CaffeineSpell>): CaffeineSpell;
  GetIfRegistered(id: number): CaffeineSpell;
  GetList(...args: number[]): CaffeineList<CaffeineSpell>;
  GetSpell(id: number): CaffeineSpell;
  GetSpellByName(name: string): CaffeineSpell;
  GetSpells(...args: number[]): CaffeineSpell | CaffeineSpell[];
  New(): CaffeineSpellBook;
}
