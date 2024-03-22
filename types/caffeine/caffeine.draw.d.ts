interface CaffeineDraw {
  Enable(): void;
  Line(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
    maxDistance: number
  ): void;
  New(): CaffeineDraw;
  Sync(func: (this: void, draw: CaffeineDraw) => void): void;
  Text(
    text: string | number,
    font: string,
    x: number,
    y: number,
    z: number
  ): void;
}
