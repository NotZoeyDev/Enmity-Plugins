import { Plugin, registerPlugin } from "enmity-api/plugins";

const ExamplePlugin: Plugin = {
  name: "ExamplePlugin",
  commands: [],

  onStart() {

  },

  onStop() {

  }
}

registerPlugin(ExamplePlugin);