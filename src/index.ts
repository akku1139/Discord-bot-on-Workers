import emoji from "./emoji";

export interface Env {
}

const routes = {
  "emoji": emoji,
} satisfies {[x:string]: (req: APIInteraction) => Object};

export default {
	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return routes[new URL(req.url).pathname.replace(/^\/?(.*)\/?$/, "$1")](
      interaction = await req.json()
    );
	}
};
