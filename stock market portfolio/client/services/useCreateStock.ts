import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStock as createStockApi } from "./stockAPi";
import { Stock } from "../types/stockTypes";

export function useCreateStock() {
  const queryClient = useQueryClient();

  const { mutate: createStock, error, isPending } = useMutation({
    mutationFn: (stock: Stock) => createStockApi(stock),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stock'] })
    }
  })

  return { createStock, error, isPending };
}