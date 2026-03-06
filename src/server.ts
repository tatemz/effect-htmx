import * as HttpApiBuilder from "@effect/platform/HttpApiBuilder";
import * as HttpServer from "@effect/platform/HttpServer";
import * as KeyValueStore from "@effect/platform/KeyValueStore";
import * as BunHttpServer from "@effect/platform-bun/BunHttpServer";
import * as BunRuntime from "@effect/platform-bun/BunRuntime";
import * as Layer from "effect/Layer";
import { Api } from "./api/Api.ts";
import { TodoStoreLayer } from "./domain/Todo.ts";
import { StaticFilesLive } from "./handlers/StaticHandler.ts";
import { TodosHandlerLive } from "./handlers/TodosHandler.ts";

const ApiLive = HttpApiBuilder.api(Api).pipe(Layer.provide(TodosHandlerLive));

const HttpLive = HttpApiBuilder.serve().pipe(
  Layer.provide(ApiLive),
  Layer.provide(StaticFilesLive),
  Layer.provide(TodoStoreLayer),
  Layer.provide(KeyValueStore.layerMemory),
  HttpServer.withLogAddress,
  Layer.provide(BunHttpServer.layer({ port: 3000 })),
);

BunRuntime.runMain(Layer.launch(HttpLive) as never);
