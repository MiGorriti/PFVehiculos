const {Product, Category, Product_Category}=require("../db")

const filterCars= async (categorycar)=>{
    try {

        const categorycarSplit=Array.from(categorycar)
        for(let i = 0; i < categorycarSplit.length; i++){
            if(i===0){categorycarSplit[i]=categorycarSplit[i].toUpperCase()}
        }
        
        const catcar= categorycarSplit.join("");

        const carsFilt=[];
        
        const cars= await Product.findAll();
        const categories= await Category.findAll()
        const Prod_Cat= await Product_Category.findAll();

        for(let i = 0; i < cars.length; i++){
            cars[i]={...cars[i].dataValues, category:[]};
        }

        for(let i = 0; i < Prod_Cat.length; i++){
            for(let j = 0; j < cars.length; j++){
                if(cars[j].id===Prod_Cat[i].ProductId){
                    cars[j].category.push(Prod_Cat[i].CategoryId);
                }
            }
        }

        for(let h = 0; h < cars.length; h++){
            for(let i = 0; i < cars[h].category.length; i++){
                for(let j = 0; j < categories.length; j++){
                 if(cars[h].category[i]===categories[j].id){
                     cars[h].category[i]=categories[j].name
                 }
                } 
             }
        }

        for(let i = 0; i < cars.length; i++){
            if(cars[i].category.includes(catcar)){
                let carObj={
                    id:cars[i].id,
                    name:cars[i].name,
                    image:cars[i].image,
                    brand:cars[i].brand,
                    description:cars[i].description,
                    price:cars[i].price,
                    stock:cars[i].stock,
                    maker:cars[i].maker,
                    model:cars[i].model,
                    visible:cars[i].visible,
                    visits:cars[i].visits,
                    Categories:cars[i].category
                }
                carsFilt.push(carObj)
            }
        }

        if (!carsFilt.length) {
            return "No hay auto de tal categoría"
        }
        return carsFilt;

    } catch (error) {
        console.error(error);
        throw new Error("No se encontró el auto", error)
    }
}

module.exports= filterCars;