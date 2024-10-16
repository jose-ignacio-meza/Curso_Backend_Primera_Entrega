import nodemon from 'nodemon'
import express from 'express'
import RouterProducts from "./routes/routerProducts.js"
import RouterCarts from "./routes/routerCart.js"
import { CartManager } from './dao/cartManager.js'


await CartManager.getCarts()
const PORT=8080
const app= express()
const server = app.listen(PORT,()=>console.log('escuchando al puerto 8080'))
app.use('/api/products', RouterProducts)
app.use('/api/cart', RouterCarts)
