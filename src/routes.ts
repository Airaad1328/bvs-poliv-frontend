import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("*?", "./framework-entry.tsx"),
] satisfies RouteConfig;