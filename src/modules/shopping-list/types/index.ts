
export interface Product{
    id : number;
    name : string;
    unit : number;
    quantity : number;
    done : boolean; 
}

export type TCreateProduct = Omit<Product,"id">
export type TUpdateProduct = Partial<TCreateProduct>
