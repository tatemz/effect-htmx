import { DOCTYPE_HTML } from "@thi.ng/hiccup";
import {
  body,
  head,
  html,
  link,
  metaUTF8,
  metaViewport,
  script,
  title,
} from "@thi.ng/hiccup-html";
import type { ViewProps } from "../ViewProps.ts";
import type * as LayoutModel from "./Layout.model.ts";

/**
 * Root HTML document wrapper shared by all pages.
 */
export const LayoutView = ({
  model,
  children,
}: ViewProps<LayoutModel.LayoutModel> & {
  children: unknown[];
}) => [
  DOCTYPE_HTML,
  html(
    { lang: "en" },
    head(
      null,
      metaUTF8(),
      metaViewport({ width: -1 }),
      title(null, model.title),
      link({ rel: "stylesheet", href: model.stylesheetHref }),
      script({ type: "module", src: model.scriptSrc }),
    ),
    body({ class: "todo-page" }, ...children),
  ),
];
