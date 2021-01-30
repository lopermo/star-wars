import Vue from "vue";
import { Context, Middleware } from "@nuxt/types";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/options" {
  interface NuxtContext<V extends Vue> {
    app: V;
    isClient: boolean;
    isServer: boolean;
    isStatic: boolean;
    isDev: boolean;
    env: object;
    params: object;
    query: object;
  }

  interface ComponentOptions<V extends Vue> {
    asyncData?(context: NuxtContext<V>): Promise<object> | object;
    fetch?(ctx: Context): Promise<void> | void;
    layout?: string | ((ctx: Context) => string);
    middleware?: Middleware | Middleware[];
  }
}
