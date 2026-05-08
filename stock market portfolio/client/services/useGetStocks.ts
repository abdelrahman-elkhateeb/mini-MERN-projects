import { useQuery } from "@tanstack/react-query";
import { getStocks } from "./stockAPi";

export function useGetStocks() {
  const { isPending, data: stock, error } = useQuery({
    queryFn: getStocks,
    queryKey: ["stock"]
  })

  return { isPending, stock, error };
}