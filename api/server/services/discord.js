const discordPlugin = require('../../plugin/discord');
const config = require('../../../config');

module.exports = {
  async sendMessageToDiscord({ messageType, message }) {
    if (config.discord.enable) {
      discordPlugin.sendMessageToDiscord({ messageType, message });
    }

    return { success: true };
  },
};
