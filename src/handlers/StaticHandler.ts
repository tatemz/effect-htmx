import * as Effect from "effect/Effect";
import * as HttpRouter from "effect/unstable/http/HttpRouter";
import * as HttpServerResponse from "effect/unstable/http/HttpServerResponse";

const distFile = (file: string) =>
  new URL(`../../dist/${file}`, import.meta.url).pathname;

export const StaticFilesLive = HttpRouter.use((router) =>
  Effect.all([
    router.add(
      "GET",
      "/styles.css",
      HttpServerResponse.file(distFile("styles.css"), {
        headers: { "Content-Type": "text/css" },
      }),
    ),
    router.add(
      "GET",
      "/client.js",
      HttpServerResponse.file(distFile("client.js"), {
        headers: { "Content-Type": "application/javascript" },
      }),
    ),
  ]),
);
