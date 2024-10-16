import fs from 'fs'

export class ProductManager{
    static #path='./src/data/products.json'

    static setPath(unaRuta=''){
        this.#path=unaRuta
    }


    static async getCarts(){
        let products= await fs.promises.readFile(this.#path, {encoding:"utf-8"})
        return console.log('desde aca'+products)
    }

    static async setProduct(product={}){
        let products= await fs.promises.readFile(this.#path, {encoding:"utf-8"})
    }

}