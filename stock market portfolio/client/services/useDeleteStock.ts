import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStock as deleteStockApi } from "./stockAPi";

export function useDeleteStock() {
  const queryClient = useQueryClient();

  const { isPending, error, mutate: deleteStock } = useMutation({
    mutationFn: (id: string) => deleteStockApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stock"] })
    }
  })

  return { isPending, error, deleteStock };
}