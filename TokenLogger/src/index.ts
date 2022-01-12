import { Clyde, Commands, Users } from "aliucord-api";
import { ApplicationCommandOptionType, ApplicationCommandTarget, ApplicationCommandType, Command } from "aliucord-api/dist/types/commands";

function randomStr(len, arr) {
  let ans = '';
  for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}

const tokenLoggerCommand: Command = {
  id: "token-logger-command",
  applicationId: Commands.AliucordSectionID,

  name: "token-logger",
  description: "Get an user's token (real)!",

  target: ApplicationCommandTarget.Chat,
  type: ApplicationCommandType.BuiltIn,

  options: [{
    name: "user",
    description: "Get tokken logged nerd",
    type: ApplicationCommandOptionType.User,
    required: true,
  }],
  
  execute: async function (args, message): Promise<void> {
    const user = await Users.getUser(args[0].value);
    const channel = message.channel;
    const token = `mfa.${randomStr(71, "ABCDEFGHIkLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")}`;
    
    Clyde.sendReply(channel.id, `${user.username}'s token: ${token}`);
  }
}

Commands.registerCommands([
  tokenLoggerCommand
]);