import * as LayoutModel from "./Layout.model.ts";

/**
 * Builds the page-level layout model with default static asset paths.
 */
export const toLayout = ({
  title = "Todos",
}: {
  readonly title?: string;
} = {}): LayoutModel.LayoutModel =>
  LayoutModel.LayoutModel.make({
    title,
    stylesheetHref: "/styles.css",
    scriptSrc: "/client.js",
  });
