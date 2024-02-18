import { verifyKey } from 'discord-interactions';

const publicKeys = {
  "emoji": "c31e3a69fb9270077dee4796c55c31cf81cb3ad225e446459347abe17dd5178f",
};

export async function verifySignature(body: string, headers: Headers, path: string): Promise<boolean> {
	return verifyKey(body, headers.get('x-signature-ed25519'), headers.get('x-signature-timestamp'), publicKeys[path]);
}
