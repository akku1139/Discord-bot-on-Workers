import emoji from "./emoji";

import { InteractionFunction } from "types/command";

export interface Env {
}

const routes = {
  "emoji": emoji,
} satisfies {[x:string]: InteractionFunction};

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return routes[new URL(req.url).pathname.replace(/^\/?(.*)\/?$/, "$1")](
      inter = await req.json()
    );
	}
};
