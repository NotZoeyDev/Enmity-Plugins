import { Command, AliucordSectionID, registerCommands, ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType } from "aliucord-api/commands";
import { registerPlugin } from "aliucord-api/plugins";
import owofire from "owofire";

registerPlugin({
  name: "OwO",
  commands: [],

  onStart() {
    const owo: Command = {
      id: "owo-command",
      applicationId: AliucordSectionID,
      name: "owo",
      description: "OwO What's this",
      type: ApplicationCommandType.Chat,
      inputType: ApplicationCommandInputType.BuiltInText,
      
      options: [{
        name: "text",
        description: "text to owoify",
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