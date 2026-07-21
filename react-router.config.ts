import type { Config } from "@react-router/dev/config";

import { productSlugs } from "./src/entities/product/model/productSlugs";

import { fileURLToPath } from "node:url";

const basePath = process.env.BASE_PATH ?? "";


const staticPages = [
  "/",
  "/home",
  "/about",
  "/auto-poliv",
  "/tools",
  "/services",
  "/price",
  "/complete-jobs",
  "/contacts",
  "/catalog",
];

const productPages = productSlugs.map(
  (slug) => `/catalog/${slug}`,
);

export default {
  appDirectory: "src",

  basename: basePath
    ? `${basePath}/`
    : "/",

  // Никакого Node.js-сервера в production.
  ssr: false,

  prerender: {
    paths: [
      ...staticPages,
      ...productPages,
    ],

    concurrency: 4,
  },
} satisfies Config;
