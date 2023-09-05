const {Product, Category}= require("../db")

const getCategories=async ()=>{
    try{
        const categories=["Sedán","Compacto","Camioneta"]

        for(let i = 0; i < categories.length; i++){
            let name=categories[i]
            const category=await Category.create({name})
        }
        return categories;
    } catch(error){
        console.log(error);
        throw new Error("Error al obtener categorías", error)
    }
}

module.exports= getCategories