import fs from 'fs'

export class CartManager{
    static #path='./src/data/carts.json'

    static setPath(unaRuta=''){
        this.#path=unaRuta
    }


    static async getCarts(){
        let carts= await fs.promises.readFile(this.#path, {encoding:"utf-8"})
        return console.log('desde aca'+carts)
    }

}