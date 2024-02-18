import { verifyKey } from 'discord-interactions';

const publicKeys = {
  "emoji": "c31e3a69fb9270077dee4796c55c31cf81cb3ad225e446459347abe17dd5178f",
};

export function verifySignature(req: Request, parh: string): boolean {
	return verifyKey(await req.text(), req.headers.get('x-signature-ed25519'), req.headers.get('x-signature-timestamp'), PUBLIC_KEY);
}
