declare module "*.vue" {
  // eslint-disable-next-line no-unused-vars
  import { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
