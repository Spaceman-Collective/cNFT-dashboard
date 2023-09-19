import Dashboard from "@/components/Dashboard";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/DateRangePicker";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { account } from "@/lib/uris";
import { truncateKey } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import { fetchWallets } from "@/lib/api";

export default async function Home() {
  // const { from, to } = useDateRangeStore.getState().dateRange;
  const wallets = await fetchWallets();

  return (
    <main className="flex flex-col min-h-screen p-8">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <DateRangePicker />
            <ThemeToggle />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Top Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Account</TableHead>
                  <TableHead>SOL Balance</TableHead>
                  <TableHead># Minted (BGUM)</TableHead>
                  <TableHead># Transferred (BGUM)</TableHead>
                  <TableHead># Burned (BGUM)</TableHead>
                  <TableHead># Minted (CM)</TableHead>
                  <TableHead># Minted (CM)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wallets.map(({ wallet: pk, ...wallet }) => (
                  <TableRow key={pk}>
                    <TableCell className="flex items-center w-[250px]">
                      <span className="font-mono">{truncateKey(pk)}</span>

                      <Button variant="link" asChild>
                        <a href={account(pk)} target="_blank">
                          <ExternalLinkIcon size={20} />
                        </a>
                      </Button>
                    </TableCell>
                    <TableCell>{wallet.sol}</TableCell>
                    <TableCell>{wallet.bgumMint}</TableCell>
                    <TableCell>{wallet.bgumTransfer}</TableCell>
                    <TableCell>{wallet.bgumBurn}</TableCell>
                    <TableCell>{wallet.cmMints}</TableCell>
                    <TableCell>{JSON.stringify(wallet.tokens)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 grid-cols-12">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Lorem</CardTitle>
            </CardHeader>
            <CardContent>
              <Dashboard />
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Lorem</CardTitle>
            </CardHeader>
            <CardContent>
              <Dashboard />
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Lorem</CardTitle>
            </CardHeader>
            <CardContent>
              <Dashboard />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
