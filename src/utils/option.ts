import type { InteractionOption } from "utils/option.ts";

type Parsed = {[name: string]: InteractionOption};

export function parseOptions(options: Array<InteractionOption>): Parsed {
  let parsed: Parsed = {};
  options.forEach((o) => {
    parsed[o.name] = o;
  });
  return parsed;
}
