import { EnmitySectionID, Command, ApplicationCommandInputType, ApplicationCommandType, ApplicationCommandOptionType } from "enmity-api/commands";
import { sendReply } from "enmity-api/clyde";
import { getUser } from "enmity-api/users";
import { Plugin, registerPlugin } from "enmity-api/plugins";

function randomStr(len, arr) {
  let ans = '';
  for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}

const TokenLogger: Plugin = {
  name: "TokenLogger",
  commands: [],

  onStart() {
    const tokenLoggerCommand: Command = {
      id: "token-logger-command",
      applicationId: EnmitySectionID,
    
      name: "token-logger",
      displayName: "token-logger",

      description: "Get an user's token (real)!",
      displayDescription: "Get an user's token (real)!",
    
      type: ApplicationCommandType.Chat,
      inputType: ApplicationCommandInputType.BuiltIn,
    
      options: [{
        name: "user",
        displayName: "user",

        description: "Get tokken logged nerd",
        displayDescription: "Get tokken logged nerd",

        type: ApplicationCommandOptionType.User,
        required: true,
      }],
      
      execute: async function (args, message): Promise<void> {   
        const user = await getUser(args[0].value);
        const channel = message.channel;
        const token = `mfa.${randomStr(71, "ABCDEFGHIkLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")}`;
        
        sendReply(channel.id, `${user.username}'s token: ${token}`);
      }
    }

    this.commands.push(tokenLoggerCommand);
  },

  onStop() {
    this.commands = [];
  }
}

registerPlugin(TokenLogger);