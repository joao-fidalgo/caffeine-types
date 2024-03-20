interface CaffeineItemBook {
  GetItem(id: number): CaffeineItem;
  New(): CaffeineItemBook;
}
