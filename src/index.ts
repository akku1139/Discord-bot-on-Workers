import emoji from "./emoji";

import { Interaction, InteractionCallbackType, InteractionFunction, InteractionResponse, InteractionType } from "types/command";
import { verifySignature } from "./verify";

export interface Env {
}

const routes = {
  "emoji": emoji,
} satisfies { [x: string]: InteractionFunction };

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> | Response {
    // POSTという前提
    const path = new URL(req.url).pathname.replace(/^\/?(.*)\/?$/, "$1");
    const interaction: Interaction = await req.json();

    if (interaction.type === InteractionType.PING) {
      if(!await verifySignature(req, path)) {
        return new Response("invalid request signature", {status: 401});
      }
      return new Response(
        JSON.stringify<InteractionResponse>({ type: InteractionCallbackType.PONG }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify(routes[path]( inter = interaction )),
    );
  }
};
