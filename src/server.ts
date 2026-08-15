import * as BunHttpServer from "@effect/platform-bun/BunHttpServer";
import * as BunRuntime from "@effect/platform-bun/BunRuntime";
import * as Layer from "effect/Layer";
import * as HttpRouter from "effect/unstable/http/HttpRouter";
import * as HttpApiBuilder from "effect/unstable/httpapi/HttpApiBuilder";
import * as KeyValueStore from "effect/unstable/persistence/KeyValueStore";
import { Api } from "./api/Api.ts";
import { TodoStoreLayer } from "./domain/Todo.ts";
import { StaticFilesLive } from "./handlers/StaticHandler.ts";
import { TodosHandlerLive } from "./handlers/TodosHandler.ts";

const HttpLive = HttpRouter.serve(
  HttpApiBuilder.layer(Api).pipe(
    Layer.provide(TodosHandlerLive),
    Layer.provide(StaticFilesLive),
  ),
).pipe(
  Layer.provide(TodoStoreLayer),
  Layer.provide(KeyValueStore.layerMemory),
  Layer.provide(BunHttpServer.layer({ port: 3000 })),
);

BunRuntime.runMain(Layer.launch(HttpLive));
