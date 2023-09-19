import Dashboard from "@/components/Dashboard";
import ThemeToggle from "@/components/ThemeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/DateRangePicker";
import { fetchWallets } from "@/lib/api";
import { columns } from "./wallets/columns";
import { DataTable } from "@/components/ui/data-table";

export default async function Home() {
  const data = await fetchWallets();

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
            <DataTable columns={columns} data={data} />
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
