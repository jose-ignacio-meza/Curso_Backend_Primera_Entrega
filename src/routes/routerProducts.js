import Router from 'express'

const RouterProducts = Router()

RouterProducts.get("/", (req,res)=>{
    res.send(console.log('desde el get de products'))
})

RouterProducts.get("/:id", (req,res)=>{
    const {id}= req.params
    res.send(console.log('desde el get con id de products '+id))
})

export default RouterProducts