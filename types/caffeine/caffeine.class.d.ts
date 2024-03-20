interface ColorMixin {
  r: number;
  g: number;
  b: number;
}

interface CaffeineClass {
  GetColor(): ColorMixin;
  GetID(): number;
  GetLocale(): string;
  GetName(): string;
  New(locale: string, name: string, id: number): CaffeineClass;
}
