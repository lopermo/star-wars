import { Module, VuexModule, Mutation } from "vuex-module-decorators";

interface Character {
  id: number;
  name: string;
}

@Module({
  name: "history",
  stateFactory: true,
  namespaced: true
})
export default class HistoryClass extends VuexModule {
  lastPageVisited: Number = 1;
  lastCharacterVisited: Character[] = [];

  /**
   * If array is length >= 3 slice first one and push new one
   */
  @Mutation
  pushVisited(character: Character) {
    let alreadyExists = false;
    this.lastCharacterVisited.forEach((data, key) => {
      if (data.id === character.id) {
        alreadyExists = true;
        this.lastCharacterVisited.splice(key, 1);
      }
    });
    if (this.lastCharacterVisited.length === 3) {
      this.lastCharacterVisited.pop();
    }
    this.lastCharacterVisited.unshift(character);
  }

  /**
   * Retrieve last page visited of the pagination component
   */
  get getLastVisited(): Array<Character> {
    return this.lastCharacterVisited;
  }
}
