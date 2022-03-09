import { getModule } from "enmity-api/module";
import { instead } from "enmity-api/patcher";
import { registerPlugin } from "enmity-api/plugins";

const userRecord = getModule(m => m.default?.name === "UserRecord");

registerPlugin({
  name: "EnableStaging",
  patches: [],

  onStart() {
    const staffPatch = instead(this.name, userRecord.default.prototype, "hasFlag", (self, args, res) => {
      if (args[0] === 1) return true
      return res(args[0]);
    });

    this.patches.push(staffPatch);
  },

  onStop() {
    this.patches = [];
  }
});