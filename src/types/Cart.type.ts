export type Cart = {
  id: string;
  productId: string;
  quantity: number;
  cartId: string;
  createdAt: string;
  updatedAt: string;
  product: {
    id: string;
    slug: string;
    name: string;
    price: number;
    image: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
    brandId: string;
    brandName: string;
  };
};
