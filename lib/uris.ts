export const tx = (txSignature: string) =>
  `https://xray.helius.xyz/tx/${txSignature}`;

export const account = (pubKey: string) =>
  `https://xray.helius.xyz/account/${pubKey}`;
