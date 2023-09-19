"use client";

import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Wallet } from "@/lib/api";
import { account } from "@/lib/uris";
import { truncateKey } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { CopyIcon, ExternalLinkIcon } from "lucide-react";

export const columns: ColumnDef<Wallet>[] = [
  {
    header: "Wallet",
    accessorKey: "wallet",
    cell: ({ row }) => {
      const pk: string = row.getValue("wallet");
      return (
        <div className="flex items-center space-x-2">
          <span className="font-mono">{truncateKey(pk)}</span>

          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigator.clipboard.writeText(pk)}
            >
              <CopyIcon size={16} />
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a href={account(pk)} target="_blank">
                <ExternalLinkIcon size={16} />
              </a>
            </Button>
          </div>
        </div>
      );
    },
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Minted (BGUM)" />
    ),
    accessorKey: "bgumMint",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transferred (BGUM)" />
    ),
    accessorKey: "bgumTransfer",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Burned (BGUM)" />
    ),
    accessorKey: "bgumBurn",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Minted (CM)" />
    ),
    accessorKey: "cmMints",
  },
  {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="SOL Balance" />
    ),
    accessorKey: "sol",
  },
  {
    header: "Tokens",
    accessorKey: "tokens",
  },
];
