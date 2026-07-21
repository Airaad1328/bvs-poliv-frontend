import type { ReactNode } from "react";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "@/index.css";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({
  children,
}: LayoutProps) {
  return (
    <html lang="uk-UA">
      <head>
        <meta charSet="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <Meta />
        <Links />

        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}