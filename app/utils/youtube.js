// Helpers for turning YouTube links coming from the backend content into
// responsive embeds. Shared by the blog and operations detail pages.
// `formatContent` also handles TikTok links (see ./tiktok).

import { buildTiktokEmbed, getTiktokId } from "./tiktok";

// Extract a YouTube video ID from a full URL or a raw ID
export const getYoutubeId = (value) => {
    if (!value) return "";
    const patterns = [
        /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
        /^([A-Za-z0-9_-]{11})$/,
    ];
    for (const re of patterns) {
        const match = value.match(re);
        if (match) return match[1];
    }
    return "";
};

// Build a YouTube embed from a video ID. Shorts get a portrait (9:16) wrapper;
// normal videos return a bare iframe that the generic wrapper handles as 16:9.
export const buildYoutubeEmbed = (videoId, isShort = false) => {
    if (!videoId) return "";
    const iframe = `<iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    return isShort ? `<div class="video-responsive video-short">${iframe}</div>` : iframe;
};

// Normalize the HTML content: decode escaped iframes, convert YouTube links into
// embeds and wrap every iframe in a responsive container.
export const formatContent = (htmlContent) => {
    if (!htmlContent) return "";
    let formatted = htmlContent;

    // The backend may store the iframe HTML-escaped (&lt;iframe ...&gt;), which shows
    // up as plain text. Decode any escaped iframe back to a real element first.
    formatted = formatted.replace(/&lt;iframe[\s\S]*?&lt;\/iframe&gt;/gi, (match) =>
        match
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, '&')
    );

    // Convert a plain YouTube link wrapped in an <a> tag into a responsive embed
    formatted = formatted.replace(
        /<a\b[^>]*href=["'](https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)[A-Za-z0-9_-]{11}[^"']*)["'][^>]*>[\s\S]*?<\/a>/gi,
        (match, url) => buildYoutubeEmbed(getYoutubeId(url), /\/shorts\//i.test(url)) || match
    );

    // Convert a bare YouTube link (plain text) into a responsive embed
    formatted = formatted.replace(
        /(^|[\s>(])((?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)[A-Za-z0-9_-]{11}[^\s<)]*)/gi,
        (match, pre, url) => {
            const embed = buildYoutubeEmbed(getYoutubeId(url), /\/shorts\//i.test(url));
            return embed ? pre + embed : match;
        }
    );

    // The official TikTok markup is a <blockquote class="tiktok-embed"> that only
    // renders once their embed.js runs — swap it for a plain iframe instead.
    formatted = formatted.replace(
        /<blockquote\b[^>]*class=["'][^"']*tiktok-embed[^"']*["'][^>]*>[\s\S]*?<\/blockquote>(?:\s*<script\b[^>]*tiktok[^>]*>[\s\S]*?<\/script>)?/gi,
        (match) => {
            const id =
                (match.match(/data-video-id=["'](\d{6,})["']/i) || [])[1] ||
                getTiktokId((match.match(/cite=["']([^"']+)["']/i) || [])[1]);
            return buildTiktokEmbed(id) || match;
        }
    );

    // Convert a TikTok link wrapped in an <a> tag into a responsive embed
    formatted = formatted.replace(
        /<a\b[^>]*href=["'](https?:\/\/(?:www\.)?tiktok\.com\/[^"']+)["'][^>]*>[\s\S]*?<\/a>/gi,
        (match, url) => buildTiktokEmbed(getTiktokId(url)) || match
    );

    // Convert a bare TikTok link (plain text) into a responsive embed
    formatted = formatted.replace(
        /(^|[\s>(])((?:https?:\/\/)?(?:www\.)?tiktok\.com\/[^\s<)]+)/gi,
        (match, pre, url) => {
            const embed = buildTiktokEmbed(getTiktokId(url));
            return embed ? pre + embed : match;
        }
    );

    // A TikTok iframe stored by the backend as the feed-style widget (embed/v2)
    // plays muted with no controls — swap it for the click-to-play Embed Player.
    formatted = formatted.replace(
        /<iframe\b[^>]*src=["']https?:\/\/(?:www\.)?tiktok\.com\/embed(?:\/v2)?\/(\d{6,})[^"']*["'][\s\S]*?<\/iframe>/gi,
        (match, id) => buildTiktokEmbed(id) || match
    );

    // Wrap any <iframe> (e.g. YouTube embeds coming from the backend) in a responsive
    // container — skip ones already wrapped to avoid double wrapping. Portrait
    // sources (Shorts / TikTok) get the matching portrait class.
    formatted = formatted.replace(
        /(?<!<div class="video-responsive[^"]*">)(<iframe[\s\S]*?<\/iframe>)/gi,
        (_match, iframe) => {
            const src = (iframe.match(/src=["']([^"']+)["']/i) || [])[1] || "";
            let extra = "";
            if (/tiktok\.com/i.test(src)) extra = " video-tiktok";
            else if (/\/shorts\//i.test(src)) extra = " video-short";
            return `<div class="video-responsive${extra}">${iframe}</div>`;
        }
    );

    return formatted;
};
