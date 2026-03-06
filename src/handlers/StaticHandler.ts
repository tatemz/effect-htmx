import * as HttpApiBuilder from "@effect/platform/HttpApiBuilder";
import * as HttpServerResponse from "@effect/platform/HttpServerResponse";
import * as Effect from "effect/Effect";

const distFile = (file: string) =>
  new URL(`../../dist/${file}`, import.meta.url).pathname;

export const StaticFilesLive = HttpApiBuilder.Router.use((router) =>
  Effect.all([
    router.get(
      "/styles.css",
      HttpServerResponse.file(distFile("styles.css"), {
        headers: { "Content-Type": "text/css" },
      }),
    ),
    router.get(
      "/client.js",
      HttpServerResponse.file(distFile("client.js"), {
        headers: { "Content-Type": "application/javascript" },
      }),
    ),
  ]),
);
