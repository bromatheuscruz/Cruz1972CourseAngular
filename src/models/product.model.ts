export interface Product {
  _id: string;
  active: boolean;
  tags: string[];
  title: string;
  description: string;
  slug: string;
  price: number;
}
