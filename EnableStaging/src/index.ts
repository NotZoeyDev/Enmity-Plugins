import { getByProps } from "enmity-api/modules";
import { registerPlugin } from "enmity-api/plugins";

const User = getByProps("isDeveloper");

registerPlugin({
  name: "EnableStaging",

  onStart() {
    Object.defineProperty(User, "isDeveloper", {
        get: () => true,
        set: () => {},
        configurable:true
    });
  },

  onStop() {
    Object.defineProperty(User, "isDeveloper", {
        get: () => false,
        set: () => {},
        configurable:true
    });
  }
});
