import { serialize } from "@thi.ng/hiccup";
import * as Effect from "effect/Effect";
import * as HttpServerResponse from "effect/unstable/http/HttpServerResponse";
import type { ViewProps } from "./views/ViewProps.ts";

/**
 * A hiccup view: takes a view model and returns a hiccup node tree.
 */
export type HiccupView<M> = (props: ViewProps<M>) => unknown;

export const buildMvcHtmlResponse = <M>({
  model,
  View,
}: {
  model: M;
  View: HiccupView<M>;
}) =>
  Effect.sync(() =>
    HttpServerResponse.html(serialize(View({ model }), { escape: true })),
  );
