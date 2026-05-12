import { useDeleteProduct, useToggleDone } from "../hooks/useProduct";

import type { Product } from "../types";

interface Props {
  product: Product;
  
}

export const ProductItem = ({ product }: Props) => {
  const toggleDone = useToggleDone();
  const deleteProduct = useDeleteProduct();

  const handleToggle = () => {
    toggleDone.mutate({ id: product.id, done: !product.done });
  };

  const handleDelete = () => {
    deleteProduct.mutate({ id: product.id });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.5rem 0",
        borderBottom: "1px solid #eee",
        opacity: product.done ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={product.done}
        onChange={handleToggle}
        disabled={toggleDone.isPending}
      />
      <span
        style={{
          flex: 1,
          textDecoration: product.done ? "line-through" : "none",
        }}
      >
        {product.name} — {product.quantity} {product.unit}
      </span>
      <button
        onClick={handleDelete}
        disabled={deleteProduct.isPending}
        aria-label={`Eliminar ${product.name}`}
      >
        delete
      </button>
    </div>
  );
};
