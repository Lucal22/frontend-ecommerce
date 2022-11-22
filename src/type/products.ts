export type Product = {
  id: number;
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

export type Event =
  | any
  | React.ChangeEvent<HTMLButtonElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type Data = [Product];
