import { Module, VuexModule, Mutation } from "vuex-module-decorators";

interface Character {
  id: Number;
  name: String;
}

@Module({
  name: "history",
  stateFactory: true,
  namespaced: true
})
export default class HistoryClass extends VuexModule {
  lastPageVisited: Number = 1;
  lastCharacterVisited: Character[] = [
    { id: 1, name: "Luke Skywalker" },
    { id: 2, name: "Admiral Ackbar" }
  ];

  /**
   * If array is length >= 3 slice first one and push new one
   */
  @Mutation
  pushVisited(character: Character) {
    this.lastCharacterVisited.push(character);
  }

  /**
   * Retrieve last page visited of the pagination component
   */
  get getLastPageVisited() {
    return this.lastPageVisited;
  }
}
