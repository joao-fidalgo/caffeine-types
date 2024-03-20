interface CaffeineVector3 {
  Angle(to: CaffeineVector3): number;
  ClampMagnitude(maxLength: number): CaffeineVector3;
  Cross(rhs: CaffeineVector3): CaffeineVector3;
  Distance(b: CaffeineVector3): number;
  Dot(rhs: CaffeineVector3): number;
  Lerp(b: CaffeineVector3, t: number): CaffeineVector3;
  MoveTowards(
    target: CaffeineVector3,
    maxDistanceDelta: number
  ): CaffeineVector3;
  New(x: number, y: number, z: number): CaffeineVector3;
  Normalize(): CaffeineVector3;
  Project(onNormal: CaffeineVector3): CaffeineVector3;
  ProjectOnPlane(planeNormal: CaffeineVector3): CaffeineVector3;
  Reflect(inNormal: CaffeineVector3): CaffeineVector3;
  Scale(b: CaffeineVector3): CaffeineVector3;
}
