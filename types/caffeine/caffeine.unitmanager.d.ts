interface CaffeineUnitManager {
  CreateCustomUnit(token: string, cb: () => CaffeineUnit): CaffeineUnit;
  EnumEnemies(cb: (unit: CaffeineUnit) => boolean): void;
  EnumFriends(cb: (unit: CaffeineUnit) => boolean): void;
  EnumUnits(cb: (unit: CaffeineUnit) => boolean): void;
  FindEnemiesCentroid(radius: number, range: number): CaffeineVector3 | null;
  FindFriendsCentroid(radius: number, range: number): CaffeineVector3 | null;
  Get(token: string): CaffeineUnit;
  GetEnemiesWithMostEnemies(
    radius: number
  ): LuaMultiReturn<[CaffeineUnit, LuaTable]>; // TODO: Confirm this
  GetFriendWithMostFriends(
    radius: number
  ): LuaMultiReturn<[CaffeineUnit, LuaTable]>; // TODO: Confirm this
  GetNumFriendsAlive(): number;
  GetNumFriendsWithBuff(spell: CaffeineSpell): number;
  GetObject(guid: string): CaffeineUnit;
  New(): CaffeineUnitManager;
  SetObject(unit: CaffeineUnitManager): void;
}
