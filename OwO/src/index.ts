import { Commands } from "aliucord-api";
import owofire from "owofire";

const { AliucordSectionID, ApplicationCommandInputType, ApplicationCommandType, ApplicationCommandOptionType, registerCommands } = Commands;

const owo: Commands.Command = {
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

registerCommands("owo", [owo]);