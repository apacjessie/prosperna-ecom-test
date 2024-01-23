import { DataTable } from "@/components/ui/data-table";
import Loader from "@/components/ui/loader";
import { Product, Method } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import callApi from "@/utils/callApi";
import { useQuery } from "@tanstack/react-query";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

import Modify from "@/components/addmodify/Modify";
import Add from "@/components/addmodify/Add";

const AddModify = () => {
  const { isPending, data, refetch, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await callApi("http://localhost:3000/product", Method.GET, null);
    },
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [action, setAction] = useState<{ modify: boolean; add: boolean }>({
    modify: false,
    add: false,
  });

  const saveEdit = async (data: Product) => {
    await callApi("http://localhost:3000/product/update", Method.PUT, data);
    refetch();
  };

  const deleteProduct = async (id: string) => {
    await callApi(`http://localhost:3000/product/delete/${id}`, Method.DELETE);
    refetch();
  };

  const addProduct = async (product: FormData) => {
    await callApi("http://localhost:3000/product/add", Method.POST, product);
    refetch();
  };

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "gender",
      header: "Gender",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      header: "Action",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex w-full items-center justify-center">
                <MoreVertical />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedProduct(row.original);
                  setAction({ ...action, modify: !action.modify });
                }}
              >
                Modify product
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteProduct(row.original.id)}>
                Delete product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  if (isPending || isFetching) return <Loader />;
  return (
    <section className="padding">
      <div className="w-full justify-end flex">
        <button
          className="bg-green-400 text-white font-medium px-3 py-1 mb-2"
          onClick={() => setAction({ ...action, add: !action.add })}
        >
          Add Product
        </button>
      </div>
      {action.add && (
        <Add handleAddProduct={addProduct} setAction={setAction} />
      )}
      {action.modify && (
        <Modify
          product={selectedProduct}
          actionController={{ action: action, setAction: setAction }}
          handleEditSave={saveEdit}
        />
      )}
      <DataTable columns={columns} data={data} />
    </section>
  );
};
() => {};
export default AddModify;
