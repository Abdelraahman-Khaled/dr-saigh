export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cdn-cgi/", // ده السطر اللي هيحل المشكلة اللي في الصورة
    },
    sitemap: "https://aalsaigh.com/sitemap.xml",
  };
}
