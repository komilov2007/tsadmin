export interface CategoryType {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ProductsType {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryType;
  images: Array<string>;
  creationAt: string;
  updatedAt: string;
}
