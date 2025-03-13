export const productsList: Product[] = [
    {id: 1, name: 'Colchon', price: 6000, description: 'Colchon matrimonial'},
    {id: 2, name: 'Mesa', price: 700, description: 'Mesa de madera'},
    {id: 3, name: 'Silla', price: 400, description: 'Silla de plastico'},
    {id: 4, name: 'Computadora', price: 20000, description: 'Computadora de escritorio'},
    {id: 5, name: 'Puerta', price: 2000},
    {id: 6, name: 'Regulador', price: 1200, description: 'Regulador de voltaje'}
]

export interface Product{
    id: number | string;
    name: string;
    price: number;
    description?: string;
}