import { getModule } from "aliucord-api/module";
import { instead } from "aliucord-api/patcher";

const userRecord = getModule(m => m.default?.name === "UserRecord");

instead("enable-staging", userRecord.default.prototype, "hasFlag", (self, args, res) => {
  if (args[0] === 1) return true;

  return res(args[0]);
});