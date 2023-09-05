const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const productRoutes = require('./productRoutes');
const filterRoutes= require('./filterRoutes')
const categoryRoutes=require('./categoryRoutes')
const brandRoutes= require('./brandRoutes')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', productRoutes);
router.use('/create', filterRoutes);
router.use('/update', productRoutes);
router.use('/name', productRoutes)
router.use('/category', categoryRoutes)
router.use('/brand', brandRoutes)
router.use('/filt', filterRoutes)

module.exports = router;
