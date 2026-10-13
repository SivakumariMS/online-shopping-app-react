import { useEffect, useState } from "react";
import axios from "axios";
import type { IProduct } from "./types";

interface ProductsResponse {
  products: IProduct[];
}

function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get<ProductsResponse>("./products.json")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((fetchError: unknown) => {
          console.error("Failed to load products:", fetchError);
          setError("Products could not be loaded.");
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return { products, loading, error };
}

export default useProducts;
