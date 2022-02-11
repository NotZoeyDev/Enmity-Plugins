import { getModuleByProps } from "aliucord-api/module";
import { instead } from "aliucord-api/patcher";

const nsfwGateModule = getModuleByProps("isNSFWGuild");

instead("nsfw-gate-bypass", nsfwGateModule, "isNSFWGuild", (self, args, res) => {
  return false;
});

instead("nsfw-gate-bypass", nsfwGateModule, "isNSFWInvite", (self, args, res) => {
  return false;
});