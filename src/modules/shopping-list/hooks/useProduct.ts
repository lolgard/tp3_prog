import { useQuery,useMutation,useQueryClient } from "@tanstack/react-query";
import { productsService } from "../services/productsServices";
import type { TCreateProduct } from "../types";

export const useProducts =()=>{
    return useQuery({
        queryKey: ["products"],
        queryFn : productsService.getProducts
    })
}

export const useCreateProduct =()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn : (newProduct : TCreateProduct)=>productsService.createProducts(newProduct),
        onSuccess : ()=>{queryClient.invalidateQueries({queryKey: ["products"]})}
    })
}
export const useToggleDone =()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn :({id,done}:{id:number,done:boolean})=>productsService.updateProducts({done},id),
        onSuccess : ()=>{queryClient.invalidateQueries({queryKey:["products"]})}
    })

}
export const useDeleteProduct=()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn :({id}:{id:number})=>productsService.deleteProducts(id),
        onSuccess : ()=>{queryClient.invalidateQueries({queryKey:["products"]})}
    })
}