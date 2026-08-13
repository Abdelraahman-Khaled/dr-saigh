// Helpers for turning TikTok links coming from the backend content into
// responsive embeds. Shared by the blog and operations detail pages.

// Extract a TikTok video ID from a full URL or a raw ID.
// Short links (vm.tiktok.com/xxxx, tiktok.com/t/xxxx) don't contain the ID, so
// they can't be resolved here and are left untouched.
export const getTiktokId = (value) => {
    if (!value) return "";
    const patterns = [
        /tiktok\.com\/(?:@[\w.-]+\/video\/|embed\/v2\/|embed\/|player\/v1\/|v\/)(\d{6,})/,
        /^(\d{6,})$/,
    ];
    for (const re of patterns) {
        const match = value.match(re);
        if (match) return match[1];
    }
    return "";
};

// Build the player URL for a video ID. We use TikTok's Embed Player (player/v1)
// rather than the feed-style embed/v2 widget, because it exposes real controls:
// autoplay=0 means the video only starts on a user click, and because that click
// is the required user gesture the browser lets it play with sound (the muted
// autoplay browsers force on unattended playback never kicks in).
export const buildTiktokPlayerSrc = (videoId) => {
    if (!videoId) return "";
    const params = new URLSearchParams({
        autoplay: "0", // wait for the viewer to press play → audio is allowed
        controls: "1",
        play_button: "1",
        volume_control: "1",
        progress_bar: "1",
        fullscreen_button: "1",
        loop: "0",
        music_info: "0",
        description: "0",
        rel: "0",
    });
    return `https://www.tiktok.com/player/v1/${videoId}?${params.toString()}`;
};

// Attributes the iframe needs for click-to-play audio and fullscreen.
export const TIKTOK_IFRAME_ALLOW =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";

// Build a TikTok embed from a video ID. TikTok is always portrait, so the
// iframe gets its own wrapper instead of relying on the generic 16:9 one.
export const buildTiktokEmbed = (videoId) => {
    if (!videoId) return "";
    const iframe = `<iframe src="${buildTiktokPlayerSrc(videoId)}" title="TikTok video player" frameborder="0" allow="${TIKTOK_IFRAME_ALLOW}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    return `<div class="video-responsive video-tiktok">${iframe}</div>`;
};
