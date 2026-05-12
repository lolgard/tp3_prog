import { useState } from "react";
import { useCreateProduct } from "../hooks/useProduct";


export const ProductForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [unit, setUnit] = useState(0);

  const createProduct = useCreateProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    createProduct.mutate(
      { name: name.trim(), quantity, unit, done: false },
      {
        onSuccess: () => {
          setName("");
          setQuantity(1);
          setUnit(0);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ flex: 2, minWidth: 150 }}
      />
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
        style={{ width: 70 }}
      />
      <select
        value={unit}
        onChange={(e) => setUnit(Number(e.target.value))}
        style={{ flex: 1, minWidth: 100 }}
      >
        <option value="unidades">unidades</option>
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="litros">litros</option>
        <option value="ml">ml</option>
      </select>
      <button type="submit" disabled={createProduct.isPending}>
        {createProduct.isPending ? "Agregando..." : "Agregar"}
      </button>
    </form>
  );
};
