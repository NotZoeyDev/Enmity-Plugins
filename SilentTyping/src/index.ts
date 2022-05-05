import { Plugin, registerPlugin } from "enmity-api/plugins";
import { getByProps } from "enmity-api/modules";
import { create } from "enmity-api/patcher";

const typingModule = getByProps('startTyping');

const SilentTyping: Plugin = {
  name: "SilentTyping",
  patches: [],

  onStart() {
    const TypingPatcher = create("silent-typing");

    TypingPatcher.instead(typingModule, "startTyping", (self, args, res) => {
      return;
    });

    TypingPatcher.instead(typingModule, "stopTyping", (self, args, res) => {
      return;
    });

    this.patches.push(TypingPatcher);
  },

  onStop() {
    this.patches = [];
  }
}

registerPlugin(SilentTyping);