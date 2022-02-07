import { getModule } from "aliucord-api/dist/modules/module";
import { instead } from "aliucord-api/dist/modules/patcher";

const userRecord = getModule(m => m.default?.name === "UserRecord");

instead("enable-staging", userRecord.default.prototype, "hasFlag", (self, args, res) => {
  if (args[0] === 1) return true;

  return res(args[0]);
});