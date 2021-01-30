export default interface CharacterList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Object>;
}
