import { Command, EnmitySectionID, registerCommands, ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType } from "enmity-api/commands";
import { registerPlugin } from "enmity-api/plugins";
import owofire from "owofire";

registerPlugin({
  name: "OwO",
  commands: [],

  onStart() {
    const owo: Command = {
      id: "owo-command",
      applicationId: EnmitySectionID,

      name: "owo",
      displayName: "owo",

      description: "OwO What's this",
      displayDescription: "OwO What's this",
      
      type: ApplicationCommandType.Chat,
      inputType: ApplicationCommandInputType.BuiltInText,
      
      options: [{
        name: "text",
        displayName: "text",

        description: "Text to owoify",
        displayDescription: "Text to owoify",
        
        type: ApplicationCommandOptionType.String,
        required: true
      }],
    
      execute: function (args, message) {
        const text = args[0].value;
    
        return {
          content: owofire(text)
        };
      }
    }

    this.commands.push(owo);
  },

  onStop() {
    this.commands = [];
  }
});