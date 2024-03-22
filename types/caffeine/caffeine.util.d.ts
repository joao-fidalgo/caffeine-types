interface CaffeineUtil {
  GetAnglesBetweenPositions(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number
  ): number;
  GetDistance(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number
  ): number;
  TableContains(table: LuaTable, value: unknown): boolean;
}
