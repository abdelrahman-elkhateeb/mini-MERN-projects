import type { Stock } from "types/stockTypes";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function StockCard({ stock }: { stock: Stock }) {
  const priceDiff = stock.price_2007 - stock.price_2002;
  const isPositive = priceDiff > 0;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">{stock.company}</CardTitle>
          <Badge variant="outline">{stock.symbol}</Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {stock.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-muted-foreground">Initial Price</p>
            <p className="text-2xl font-bold">${stock.initial_price}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Status</p>
            <p className={`font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '▲ Gain' : '▼ Loss'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t text-sm">
          <div>
            <span className="text-muted-foreground">2002:</span> ${stock.price_2002}
          </div>
          <div className="text-right">
            <span className="text-muted-foreground">2007:</span> ${stock.price_2007}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
