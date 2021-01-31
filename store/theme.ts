import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({
  name: "theme",
  stateFactory: true,
  namespaced: true
})
export default class ThemeClass extends VuexModule {
  darkMode: Boolean = false;

  @Mutation
  set(bool: Boolean) {
    this.darkMode = bool;
  }
  @Mutation
  toggle() {
    this.darkMode = !this.darkMode;
  }

  get isDark(): Boolean {
    return this.darkMode;
  }
}
