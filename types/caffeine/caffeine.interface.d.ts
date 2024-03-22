interface CaffeineInterfaceCategoryConfig {
  New(name: string): CaffeineInterfaceCategoryConfig;
  Read(key: string, defaultValue: boolean): boolean;
  Read(key: string, defaultValue: number): number;
  Read(key: string, defaultValue: string): string;
  Write(key: string, value: boolean): void;
  Write(key: string, value: number): void;
  Write(key: string, value: string): void;
}

interface CaffeineInterfaceCategoryCheckboxParams {
  category: string;
  default: boolean;
  disabled?: boolean;
  name: string;
  tooltip: string;
  var: string;
}

interface CaffeineInterfaceCategory {
  readonly config: CaffeineInterfaceCategoryConfig;
  AddSubsection(name: string): void;
  Checkbox(params: CaffeineInterfaceCategoryCheckboxParams): void;
  New(
    name: string,
    parent?: CaffeineInterfaceCategory
  ): CaffeineInterfaceCategory;
  Register(): void;
}

interface CaffeineInterfaceHotbarButtonParams {
  name: string;
  onClick: (this: void) => void;
  texture: string;
  toggle: boolean;
  tooltip: string;
}

interface CaffeineInterfaceHotbarParams {
  buttonCount: number;
  name: string;
  options: CaffeineInterfaceCategory;
}

interface CaffeineInterfaceHotbar {
  AddButton(params: CaffeineInterfaceHotbarButtonParams): void;
  New(params: CaffeineInterfaceHotbarParams): CaffeineInterfaceHotbar;
}

interface CaffeineInterface {
  readonly Category: CaffeineInterfaceCategory;
  readonly Hotbar: CaffeineInterfaceHotbar;
}
