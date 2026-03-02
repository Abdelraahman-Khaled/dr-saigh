export default async function sitemap() {
  const baseUrl = "https://aalsaigh.com";
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const locales = ["ar", "en"];

  // 1. المسارات الثابتة (Static Routes)
  const staticRoutes = ["", "/contact", "/blog", "/operations"].flatMap(
    (route) =>
      locales.map((locale) => ({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: route === "" ? 1 : 0.8,
      })),
  );

  // 2. جلب المقالات من الـ API
  let blogs = [];
  try {
    const res = await fetch(`${API_URL}/blogs_landing`, {
      next: { revalidate: 3600 }, // تحديث البيانات كل ساعة (Cache)
    });

    if (res.ok) {
      blogs = await res.json();
    } else {
      console.error("Sitemap fetch failed: Status", res.status);
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // 3. المسارات الديناميكية للمدونة (Dynamic Routes) باستخدام flatMap
  const blogRoutes = blogs.flatMap((blog) => {
    const entries = [];

    // إضافة المسار بالإنجليزية لو موجود
    if (blog.slug) {
      entries.push({
        url: `${baseUrl}/en/blog/${blog.slug}`,
        lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    // إضافة المسار بالعربية لو موجود
    if (blog.slug_ar) {
      entries.push({
        url: `${baseUrl}/ar/blog/${blog.slug_ar}`,
        lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    return entries;
  });

  // دمج كل المسارات في مصفوفة واحدة
  return [...staticRoutes, ...blogRoutes];
}
