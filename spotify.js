// LINKS (von dir)
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/45a4oz9xmatk0sMNErxWjb?si=25fc220adb024e05";
const YT_MUSIC_PLAYLIST_URL = "https://music.youtube.com/playlist?list=PLu-wfuFaz7pKg1cz69Cf9l1937wSDJd3A";

// Helpers
function getSpotifyPlaylistId(url) {
    const m = url.match(/\/playlist\/([a-zA-Z0-9]+)\b/);
    return m ? m[1] : null;
}

function getYTListId(url) {
    // expects ...?list=....
    const u = new URL(url);
    return u.searchParams.get("list");
}

// DOM
const spotifyFrame = document.getElementById("spotifyPlaylistFrame");
const openSpotify = document.getElementById("openSpotifyPlaylist");
const spotifySaveHint = document.getElementById("spotifySaveHint");
const openSpotifyApp = document.getElementById("openSpotifyApp");

const ytFrame = document.getElementById("ytPlaylistFrame");
const openYT = document.getElementById("openYTPlaylist");
const ytSaveHint = document.getElementById("ytSaveHint");
const openYTApp = document.getElementById("openYTApp");

// Spotify
const spId = getSpotifyPlaylistId(SPOTIFY_PLAYLIST_URL);
if (spId) {
    spotifyFrame.src = `https://open.spotify.com/embed/playlist/${spId}`;
    openSpotify.href = `https://open.spotify.com/playlist/${spId}`;
    spotifySaveHint.href = `https://open.spotify.com/playlist/${spId}`;
    openSpotifyApp.href = `spotify:playlist:${spId}`;
} else {
    console.warn("Spotify Playlist ID konnte nicht aus URL gelesen werden.");
    spotifyFrame.src = "";
}

// YouTube Music
let ytListId = null;
try {
    ytListId = getYTListId(YT_MUSIC_PLAYLIST_URL);
} catch (e) {
    console.warn("YouTube Music URL ist ungültig:", e);
}

if (ytListId) {
    // YouTube Embed für Playlists
    ytFrame.src = `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(ytListId)}`;
    openYT.href = `https://music.youtube.com/playlist?list=${encodeURIComponent(ytListId)}`;
    ytSaveHint.href = `https://music.youtube.com/playlist?list=${encodeURIComponent(ytListId)}`;

    // App link (funktioniert je nach Device/Browser)
    openYTApp.href = `https://music.youtube.com/playlist?list=${encodeURIComponent(ytListId)}`;
} else {
    console.warn("YouTube Playlist List-ID konnte nicht aus URL gelesen werden.");
    ytFrame.src = "";
}