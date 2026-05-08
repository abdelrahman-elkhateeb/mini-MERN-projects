import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Stock } from "../types/stockTypes";
import { updateStock as updateStockApi } from "./stockAPi";

export function useUpdateStock() {
  const queryClient = useQueryClient();
  const { mutate: updateStock, isPending, error } = useMutation({
    mutationFn: ({ id, newStock }: { id: string, newStock: Stock }) => updateStockApi(id, newStock),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stock"] })
    }
  })
  return { updateStock, isPending, error };
}