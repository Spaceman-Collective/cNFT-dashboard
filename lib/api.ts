export type Wallet = {
  wallet: string;
  bgumMint: number;
  bgumTransfer: number;
  bgumBurn: number;
  sol: number;
  tensorIX: number;
  meIX: number;
  sharkyIX: number;
  foxyIX: number;
  cmMints: number;
};

export async function fetchWallets(): Promise<Wallet[]> {
  const res = await fetch(process.env.WALLETS_API_URL ?? "");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  console.log(await res.json());
  return await res.json();
}
