import emoji from "./emoji";

import { Interaction, InteractionCallbackType, InteractionFunction, InteractionType } from "types/command";

export interface Env {
}

const routes = {
  "emoji": emoji,
} satisfies { [x: string]: InteractionFunction };

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const inter: Interaction = await req.json();

    if (inter.type === InteractionType.PING) {
      return new Response(
        JSON.stringify(
          {
            type: InteractionCallbackType.PONG
          }
        ),
        {
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify(
        routes[new URL(req.url).pathname.replace(/^\/?(.*)\/?$/, "$1")](
          inter = inter,
        )
      ),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
