import { getModule } from "aliucord-api/dist/modules/module";

const userRecord = getModule(m => m.default?.name === "UserRecord");

const _hasFlag = userRecord.default.prototype.hasFlag;
userRecord.default.prototype.hasFlag = function(t) {
  if (t === 1) return true;
  return _hasFlag.call(this, t);
}