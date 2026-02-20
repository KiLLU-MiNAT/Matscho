const TWITCH_CHANNEL = "KiLLU_MiNAT"; // z.B. "KiLLU_MiNAT"
const PARENT_DOMAINS = ["killu-minat.github.io"]; // später deine Domain(s)

const player = document.getElementById("twitchPlayer");
const chat = document.getElementById("twitchChat");
const openTwitch = document.getElementById("openTwitch");
const openVods = document.getElementById("openVods");

function parentParams() {
    return PARENT_DOMAINS.map(d => `parent=${encodeURIComponent(d)}`).join("&");
}

const parent = parentParams();

// Stream Player
player.src = `https://www.twitch.tv/killu_minat{encodeURIComponent(TWITCH_CHANNEL)}&autoplay=true&muted=true&${parent}`;

// Chat (Desktop)
chat.src = `https://www.twitch.tv/embed/${encodeURIComponent(TWITCH_CHANNEL)}/chat?darkpopout&${parent}`;

// Buttons
openTwitch.href = `https://www.twitch.tv/killu_minat{TWITCH_CHANNEL}`;

openVods.href = `https://www.twitch.tv/killu_minat{TWITCH_CHANNEL}/videos`;d
