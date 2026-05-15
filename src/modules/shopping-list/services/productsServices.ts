import type { Product, TCreateProduct, TUpdateProduct } from "../types"

const API_URL ="http://localhost:3001/products"

export const productsService = {
    
    getProducts : async () : Promise<Product[]> =>{
        const res = await fetch(API_URL)
        if (!res.ok){
            throw new Error(" no se encontraros los productos ")
        }
        return res.json()
    },

    createProducts : async (product:TCreateProduct) : Promise<Product>=>{
        const res =await fetch(API_URL,{
            method : "POST",
            body : JSON.stringify(product)
        })
        if (!res.ok){
            throw new Error(" error al crear producto ")
        }
        return res.json()
    },
    updateProducts: async (product:TUpdateProduct, Id:number):Promise<Product>=>{
        const res =await fetch(`${API_URL}/${Id}`,{
            method : "PATCH",
            body : JSON.stringify(product)
        })
        
        if (!res.ok){
            throw new Error ("error al editar producto")
        }
        return res.json()
    },

    deleteProducts : async (Id:number) : Promise<void>=>{
        const res =await fetch(`${API_URL}/${Id}`,{
            method : "DELETE",
        })
        if (!res.ok){
            throw new Error ("error al borrar")
        }
    } 

}