export default async function sitemap() {
  const baseUrl = "https://aalsaigh.com";
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

  // Static routes
  const routes = ["", "/contact", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic routes (Blogs)
  let blogs = [];
  try {
    const res = await fetch(`${API_URL}/blogs_landing`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      blogs = await res.json();
    } else {
      console.error("Failed to fetch blogs for sitemap");
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date().toISOString(), // Or use blog.updatedAt if available
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes];
}
