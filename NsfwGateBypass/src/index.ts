import { getModuleByProps } from "aliucord-api/dist/modules/module";
import { instead } from "aliucord-api/dist/modules/patcher";

const nsfwGateModule = getModuleByProps("isNSFWGuild");

instead("nsfw-gate-bypass", nsfwGateModule, "isNSFWGuild", (self, args, res) => {
  return false;
});

instead("nsfw-gate-bypass", nsfwGateModule, "isNSFWInvite", (self, args, res) => {
  return false;
});