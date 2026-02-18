"use client";

import React from "react";

const DeferredStyles = () => {
    return (
        <>
            <link
                href="/css/animate.css"
                rel="stylesheet"
                media="print"
                onLoad={(e) => (e.currentTarget.media = "all")}
            />
            <link
                rel="stylesheet"
                href="/css/magnific-popup.css"
                media="print"
                onLoad={(e) => (e.currentTarget.media = "all")}
            />
            <link
                rel="stylesheet"
                href="/css/mousecursor.css"
                media="print"
                onLoad={(e) => (e.currentTarget.media = "all")}
            />
        </>
    );
};

export default DeferredStyles;
