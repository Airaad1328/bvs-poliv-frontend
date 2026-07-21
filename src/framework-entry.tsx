import { App } from "@/app/App";
import { getCanonicalUrl, getSeoData } from "@/app/seo/routeSeo";

import type { Route } from "./+types/framework-entry";

export function meta({ location }: Route.MetaArgs): Route.MetaDescriptors {
  const seo = getSeoData(location.pathname);
  const canonicalUrl = getCanonicalUrl(seo.canonicalPath);

  return [
    { title: seo.title },
    { name: "description", content: seo.description },
    {
      name: "robots",
      content: seo.noIndex ? "noindex, nofollow" : "index, follow",
    },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "uk_UA" },
    {
      tagName: "link",
      rel: "canonical",
      href: canonicalUrl,
    },
  ];
}

export default function FrameworkEntry() {
  return <App />;
}
