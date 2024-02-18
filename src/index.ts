import emoji from "./emoji";

import { Interaction, InteractionCallbackType, InteractionFunction, InteractionType } from "types/command";

export interface Env {
}

const routes = {
  "emoji": emoji,
} satisfies { [x: string]: InteractionFunction };

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    console.log(interaction);
    const interaction: Interaction = await req.json();

    if (interaction.type === InteractionType.PING) {
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
          inter = interaction,
        )
      ),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
