export type Product = {
  name: string;
  brand: string;
  category: string;
  type: string;
  description: string;
  image: string;
  price: string;
  qtd: number;
};

export type Products = {
  data: [Product];
};

export type Data = [Product];
