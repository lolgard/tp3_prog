import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../modules/auth/components/LoginPage";
import { BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ShoppingListPage } from "../modules/shopping-list/components/ShoppingListPage";
import { PrivateRoute } from "../modules/auth/components/PrivateRoute";

export function AppRouter() {
    ///agregar rutas privadas y arreglar problema con producto item
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta pública */}
                <Route path="/login" element={<LoginPage />} />

                {/* Ruta privada — envuelta en PrivateRoute que usa <Outlet /> */}
                <Route element={<PrivateRoute />}>
                  <Route path="/shopping-list" element={<ShoppingListPage />} />
                </Route>

                {/* Cualquier ruta desconocida redirige a /shopping-list */}
                <Route path="*" element={<Navigate to="/shopping-list" replace />} />
            </Routes>
        </BrowserRouter>
            )
}


