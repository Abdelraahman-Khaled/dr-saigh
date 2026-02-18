export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cdn-cgi/", // ده السطر اللي هيحل المشكلة اللي في الصورة
    },
    sitemap: "https://www.aalsaigh.com/sitemap.xml", // استبدل الدومين بموقعك
  };
}
