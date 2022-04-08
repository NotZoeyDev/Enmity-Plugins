import { getModuleByProps } from "enmity-api/module";
import { registerPlugin } from "enmity-api/plugins";
import { instead } from "enmity-api/patcher";

const User = getModuleByProps("isDeveloper");

registerPlugin({
  name: "EnableStaging",

  onStart() {
    Object.defineProperty(User.default, "isDeveloper", {
        get: () => true,
        set: () => {},
        configurable:true
    });
  },

  onStop() {
    Object.defineProperty(User.default, "isDeveloper", {
        get: () => false,
        set: () => {},
        configurable:true
    });
  }
});
