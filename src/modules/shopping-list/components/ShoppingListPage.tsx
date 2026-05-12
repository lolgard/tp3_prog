
import { useNavigate } from "react-router-dom";

import { ProductItem } from "./ProductItem";
import { ProductForm } from "./ProductForm";
import { useAuthStore } from "../../auth/store/authStore";
import { useProducts } from "../hooks/useProduct";

export const ShoppingListPage = () => {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const { data: products = [], isLoading, isError } = useProducts();

  const pending = products.filter((p) => !p.done);
  const bought = products.filter((p) => p.done);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isLoading) return <p>Cargando productos...</p>;
  if (isError) return <p>Error al cargar los productos.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>🛒 Lista de Compras</h1>
        <button onClick={handleLogout}>Salir</button>
      </div>

      <ProductForm />

      <section>
        <h2>Pendientes</h2>
        {pending.length === 0 ? (
          <p>No hay productos pendientes.</p>
        ) : (
          pending.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </section>

      <section>
        <h2>Comprados</h2>
        {bought.length === 0 ? (
          <p>No hay productos comprados aún.</p>
        ) : (
          bought.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </section>
    </div>
  );
};
