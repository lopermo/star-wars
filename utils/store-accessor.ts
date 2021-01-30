import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import theme from "~/store/theme";
import history from "~/store/history";

let darkModeStore: theme;
let historyStore: history;

function initialiseStores(store: Store<any>): void {
  darkModeStore = getModule(theme, store);
  historyStore = getModule(history, store);
}

export { initialiseStores, darkModeStore, historyStore };
