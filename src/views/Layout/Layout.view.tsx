import type { Children } from "@kitajs/html";
import type { ViewProps } from "../ViewProps.ts";
import type * as LayoutModel from "./Layout.model.ts";

/**
 * Root HTML document wrapper shared by all pages.
 */
export const LayoutView = ({
  model,
  children,
}: ViewProps<LayoutModel.LayoutModel> & { children: Children }) => (
  <>
    {"<!doctype html>"}
    <html lang="en" data-theme="garden">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{model.title}</title>
        <link rel="stylesheet" href={model.stylesheetHref} />
        <script type="module" src={model.scriptSrc} />
      </head>
      <body class="flex min-h-screen items-center justify-center bg-base-200 py-8">
        {children}
      </body>
    </html>
  </>
);
