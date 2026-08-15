import type { Component } from "@kitajs/html";
import * as Effect from "effect/Effect";
import * as HttpServerResponse from "effect/unstable/http/HttpServerResponse";
import type { ViewProps } from "./views/ViewProps.ts";

export const buildMvcHtmlResponse = <M>({
  model,
  View,
}: {
  model: M;
  View: Component<ViewProps<M>>;
}) => Effect.sync(() => HttpServerResponse.html(View({ model }) as string));
