import emoji from "./emoji/index.ts";

import { Interaction, InteractionCallbackType, InteractionFunction, InteractionResponse, InteractionType } from "types/command.ts";
import { verifySignature } from "./verify.ts";

export interface Env {
}

const routes = {
  "emoji": emoji,
} satisfies { [x: string]: InteractionFunction };

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> | Response {
    // POSTという前提
    const path = new URL(req.url).pathname.replace(/^\/?(.*)\/?$/, "$1");
    const req_text = await req.text();
    const interaction: Interaction = JSON.parse(req_text);

    if (interaction.type === InteractionType.PING) {
      if(!await verifySignature(req_text, req.headers, path)) {
        // 時々実行しないと消される?
        return new Response("invalid request signature", {status: 401});
      }
      return new Response(
        JSON.stringify<InteractionResponse>({ type: InteractionCallbackType.PONG }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // if (type === InteractionType.APPLICATION_COMMAND)
    return new Response(
      JSON.stringify(routes[path](interaction)),
      { headers: { "Content-Type": "application/json" } }
    );
  }
};
