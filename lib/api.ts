export type Wallet = {
  wallet: string;
  bgumMint: number;
  bgumTransfer: number;
  bgumBurn: number;
  sol: number;
  tokens: any;
  tensorIX: number;
  meIX: number;
  sharkyIX: number;
  foxyIX: number;
  cmMints: number;
};

export function fetchWallets(): Promise<Wallet[]> {
  return fetch(process.env.WALLETS_API_URL ?? "").then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
}
