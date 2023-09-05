const createProduct= require("../controllers/createProduct")
const filterCars=require("../controllers/filterCars")

const createHandler= async (req, res)=>{
    try{
        const {name, image, description, price, stock, maker, model, visible, brand, category}= req.body;
        const response= await createProduct(name, image, description, price, stock, maker, model, visible, brand, category)
        if(response.error){
            return res.status(400).json(response)  
        }
        res.status(200).json(response);
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

const filterHandler=async (req,res)=>{
    try {
        const { categorycar }=req.query;
        const response= await filterCars(categorycar)
        res.status(200).json(carsFilt);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports= { createHandler, filterHandler}