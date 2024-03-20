interface CaffeineLibrary {
  DependsOn(other: CaffeineLibrary): boolean;
  Import(library: string): LuaTable;
  New(library: LuaTable): CaffeineLibrary;
  Resolve(): LuaTable;
  ResolveExport(Export: LuaTable | ((self: unknown) => unknown)): LuaTable;
}
