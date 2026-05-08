import axios from "axios";
import { Stock } from "../types/stockTypes";

export async function getStocks() {
  const URL = (import.meta as any).env.VITE_API_URL;

  if (!URL) {
    throw new Error("API URL is not defined in environment variables");
  }

  const { data } = await axios.get(`${URL}`);

  return data.data;
}

export async function updateStock(id: string, newStock: Stock) {
  const URL = (import.meta as any).env.VITE_API_URL;

  if (!URL) {
    throw new Error("API URL is not defined in environment variables");
  }

  const { data } = await axios.patch(`${URL}/${id}`, newStock);

  return data.data;
}

export async function createStock(stock: Stock) {
  const URL = (import.meta as any).env.VITE_API_URL;

  if (!URL) {
    throw new Error("API URL is not defined in environment variables");
  }

  const { data } = await axios.post(`${URL}`, stock)
  return data.data;
}

export async function deleteStock(id: string) {
  const URL = (import.meta as any).env.VITE_API_URL;

  if (!URL) {
    throw new Error("API URL is not defined in environment variables");
  }

  const { data } = await axios.delete(`${URL}/${id}`);

  return data.data;
}