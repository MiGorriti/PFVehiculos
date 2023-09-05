const {Product, Category, Brand}= require("../db");

const createProduct= async (name, image, description, price, stock, maker, model, visible, brand, category)=>{
    try{
        if(!name || !image || !description || !price || !stock || !maker || !model || !visible || !brand || !category.length){
            return {error:"Faltan datos"}   
        }
        
        const newProduct= await Product.create({
            name, image, description, price, stock, maker, model, visible, brand, category
        })
        
        if(brand){
            const brandInstance = await Brand.findOne({ where: { name: brand } });
            if(brandInstance){
                await newProduct.setBrand(brandInstance);
            }
        }
      
        if(category && category.length > 0){
          const categoryInstances = await Category.findAll({ where: { name: category } });
          if (categoryInstances) {
            await newProduct.setCategories(categoryInstances);
          }
        }
        return newProduct; 

    } catch(error){
        console.error(error);
        throw new Error("Error al crear carro", error)
    }
}

module.exports= createProduct;