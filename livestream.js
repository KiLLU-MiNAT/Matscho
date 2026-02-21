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
  const openTwitchBtn = document.getElementById("openTwitch");
  const openVodsBtn = document.getElementById("openVods");

  // Buttons korrekt setzen
  if (openTwitchBtn) openTwitchBtn.href = `https://www.twitch.tv/${TWITCH_CHANNEL}`;
  if (openVodsBtn) openVodsBtn.href = `https://www.twitch.tv/${TWITCH_CHANNEL}/videos`;

  const parent = parentParams();

  // Twitch Player
  if (player) {
    player.src = `https://player.twitch.tv/?channel=${encodeURIComponent(TWITCH_CHANNEL)}&autoplay=true&muted=true&${parent}`;
  }

  // Twitch Chat
  if (chat) {
    chat.src = `https://www.twitch.tv/embed/${encodeURIComponent(TWITCH_CHANNEL)}/chat?darkpopout&${parent}`;
  }
});
