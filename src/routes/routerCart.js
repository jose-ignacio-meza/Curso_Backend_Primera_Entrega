import Router from "express";

const RouterCarts= Router()

RouterCarts.get("/", (req,res)=>{
    res.send (console.log('desde le get del router'))
})


export default RouterCarts