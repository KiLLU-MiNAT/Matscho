// Twitch Settings
const TWITCH_CHANNEL = "killu_minat";

// GitHub Pages Domain (WICHTIG)
const PARENT_DOMAINS = ["killu-minat.github.io"];

// OPTIONAL: Wenn du auch lokal testen willst (Live Server):
// const PARENT_DOMAINS = ["killu-minat.github.io", "localhost", "127.0.0.1"];

function parentParams() {
  return PARENT_DOMAINS.map(d => `parent=${encodeURIComponent(d)}`).join("&");
}

document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("twitchPlayer");
  const chat = document.getElementById("twitchChat");

  const parent = parentParams();

  // Twitch Player (iframe)
  // muted=true, sonst blocken Browser autoplay oft
  if (player) {
    player.src = `https://player.twitch.tv/?channel=${encodeURIComponent(TWITCH_CHANNEL)}&autoplay=true&muted=true&${parent}`;
  }

  // Twitch Chat (iframe)
  if (chat) {
    chat.src = `https://www.twitch.tv/embed/${encodeURIComponent(TWITCH_CHANNEL)}/chat?darkpopout&${parent}`;
  }
});
