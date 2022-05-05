import { Plugin, registerPlugin } from "enmity-api/plugins";
import { getByProps } from "enmity-api/modules";

const SentryMain = getByProps('Status');

const DisableSentry: Plugin = {
  name: "DisableSentry",
  commands: [],
  patches: [],

  onStart() {
    // Set an empty sentry connection
    SentryMain.init({});

    // Close the sentry connection
    SentryMain.close();
  },

  onStop() {
    this.patches = [];
  }
}

registerPlugin(DisableSentry);