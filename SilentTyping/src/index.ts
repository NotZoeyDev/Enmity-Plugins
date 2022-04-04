import { Plugin, registerPlugin } from "enmity-api/plugins";
import { getModule } from "enmity-api/module";
import { create } from "enmity-api/patcher";

const typingModule = getModule(m => m.default?.startTyping);

const SilentTyping: Plugin = {
  name: "SilentTyping",
  patches: [],

  onStart() {
    const TypingPatcher = create("silent-typing");

    TypingPatcher.instead(typingModule.default, "startTyping", (self, args, res) => {
      return;
    });

    TypingPatcher.instead(typingModule.default, "stopTyping", (self, args, res) => {
      return;
    });

    this.patches.push(TypingPatcher);
  },

  onStop() {
    this.patches = [];
  }
}

registerPlugin(SilentTyping);