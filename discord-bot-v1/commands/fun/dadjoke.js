const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dadjoke")
    .setDescription("Get a random dad joke"),

  async execute(interaction) {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }

      const data = await response.json();
      const joke = data.joke;

      await interaction.reply(joke);
    } catch (error) {
      console.error(error);
      await interaction.reply("Sorry, something went wrong when fetching the joke.");
    }
  },
};