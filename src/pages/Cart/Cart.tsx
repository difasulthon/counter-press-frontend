import React from "react";

import PageTitle from "../../components/PageTitle";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
import { getCurrency } from "../../utils/Formatter.util";

const dummy = [
  {
    id: "cm21wejts00034fms97fa1opd",
    productId: "cm1i111n6000590cwb1jwdezf",
    quantity: 3,
    cartId: "cm21usdfz00014fmsfk0kfh4g",
    createdAt: "2024-10-09T13:21:07.552Z",
    updatedAt: "2024-10-09T13:51:42.107Z",
    product: {
      id: "cm1i111n6000590cwb1jwdezf",
      slug: "nike-zoom-vapor-16",
      name: "NIKE ZOOM VAPOR 16",
      price: 1189150,
      image:
        "https://images.tokopedia.net/img/cache/200-square/hDjmkQ/2024/9/4/b3e5fedf-aead-4d2e-924e-129ce556a8e2.jpg",
      stock: 200,
      createdAt: "2024-09-25T15:35:12.016Z",
      updatedAt: "2024-09-27T14:47:00.342Z",
      brandId: "cm1i0yhg5000090cwl7okhfbf",
      brandName: "Nike",
    },
  },
  {
    id: "cm222pqhx0001puspz4krdx7x",
    productId: "cm1i147ou000790cwglcxnheu",
    quantity: 1,
    cartId: "cm21usdfz00014fmsfk0kfh4g",
    createdAt: "2024-10-09T16:17:47.109Z",
    updatedAt: "2024-10-09T16:17:47.109Z",
    product: {
      id: "cm1i147ou000790cwglcxnheu",
      slug: "nike-tiempo-legend-10",
      name: "NIKE TIEMPO LEGEND 10",
      price: 799000,
      image:
        "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/5/10/4ed79d08-c517-40d2-a2e7-4992e8d9cf99.jpg",
      stock: 200,
      createdAt: "2024-09-25T15:37:39.820Z",
      updatedAt: "2024-09-27T14:47:28.545Z",
      brandId: "cm1i0yhg5000090cwl7okhfbf",
      brandName: "Nike",
    },
  },
];

const Cart = (): React.ReactElement => {
  const topSection = dummy.map((item) => ({
    label: item.product.name,
    value: getCurrency(item.quantity * item.product.price),
  }));
  const subTotal = dummy
    .map((item) => ({
      label: item.product.name,
      value: item.quantity * item.product.price,
    }))
    .reduce((total, item) => total + item.value, 0);
  const bottomSection = [
    {
      label: "Sub Total",
      value: getCurrency(subTotal),
    },
    {
      label: "Shipping",
      value: "-",
    },
  ];

  return (
    <div className="pl-20 pr-20">
      <PageTitle text="Shopping Cart" />
      <div className="flex flex-row">
        <div className="w-2/3">
          {dummy.map((item) => (
            <CartItem
              key={item.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="w-1/3 ml-4 mt-8">
          <OrderSummary
            topSection={topSection}
            bottomSection={bottomSection}
            total={subTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
