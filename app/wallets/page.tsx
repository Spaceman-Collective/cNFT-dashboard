import { Wallet, fetchWallets } from "@/lib/api";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

export default async function Wallets() {
  const data = await fetchWallets();

  return (
    <div className="container mx-auto py-10 w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
