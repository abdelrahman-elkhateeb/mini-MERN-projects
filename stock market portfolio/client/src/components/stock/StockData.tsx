import type { Stock } from "types/stockTypes";
import { useGetStocks } from "../../../services/useGetStocks";
import StockCard from "./StockCard";


export default function StockData() {
  const { stock: stocks, isPending, error } = useGetStocks();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading stocks</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {stocks?.map((item: Stock) => (
        <StockCard key={item._id} stock={item} />
      ))}
    </div>
  )
}
