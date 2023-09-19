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

export function fetchWallets(): Promise<Wallet[]> {
  return fetch(process.env.WALLETS_API_URL ?? "", {
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json();
  });
}
