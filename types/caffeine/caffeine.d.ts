interface CaffeineGlobals {
  readonly EventManager: CaffeineEventManager;
  readonly SpellBook: CaffeineSpellBook;
  readonly ItemBook: CaffeineItemBook;
}

interface Caffeine {
  // Libraries
  readonly APL: CaffeineAPL;
  readonly APLActor: CaffeineAPLActor;
  readonly APLTrait: CaffeineAPLTrait;
  readonly Aura: CaffeineAura;
  readonly AuraTable: CaffeineAuraTable;
  readonly Cache: CaffeineCache;
  readonly Cacheable: CaffeineCachable;
  readonly Class: CaffeineClass;
  readonly ClassMagic: CaffeineClassMagic;
  readonly CombatTimer: CaffeineTimer;
  readonly Commmand: CaffeineCommand;
  readonly EventManager: CaffeineEventManager;
  readonly Globals: CaffeineGlobals;
  readonly Item: CaffeineItem;
  readonly Library: CaffeineLibrary;
  readonly ItemBook: CaffeineItemBook;
  readonly Module: CaffeineModule;
  readonly Notification: CaffeineNotification;
  readonly NotificationList: CaffeineNotificationList;
  readonly Refreshable: CaffeineRefreshable;
  readonly Sequencer: CaffeineSequencer;
  readonly Spell: CaffeineSpell;
  readonly SpellBook: CaffeineSpellBook;
  readonly Timer: CaffeineTimer;
  readonly Unit: CaffeineUnit;
  readonly UnitManager: CaffeineUnitManager;
  readonly Vector3: CaffeineVector3;

  // Variables
  Enabled: boolean;

  // Functions
  CheckLibraryDependencies(): boolean;
  Debug(...args: unknown[]): void;
  FindModule(name: string): void;
  GetLibrary(name: string): CaffeineLibrary;
  Import(library: CaffeineLibrary): unknown[];
  Print(...args: unknown[]): void;
  Register(module: CaffeineModule): void;
  RegisterLibrary(library: CaffeineLibrary): void;
  Require(file: string): void;
}

declare const Caffeine: Caffeine;
