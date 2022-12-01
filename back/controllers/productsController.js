const producto = require('../models/producto');

/* Ver la lista de productos */
exports.getProducts = async (req, res, next) => {
  const products = await producto.find();
  res.status(200).json({
    success: true,
    productsCount: products.length,
    products
  })
}
/* Ver la lista de productos */


/* Ver un producto por ID */
exports.getProductById = async (req, res, next) => {
  const product = await producto.findById(req.params.id)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Producto no encontrado'
    })
  }
  res.status(200).json({
    success: true,
    message: "Aqui debajo encuentras información sobre tu producto: ",
    product
  })
}
/* Ver un producto por ID */


/* Update un producto  */
exports.updateProduct = async (req, res, next) => {
  let product = await producto.findById(req.params.id)
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Producto no encontrado'
    })
  }
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //Valido solo los atributos nuevos o actualizados
    runValidators: true
  });
  res.status(200).json({
    success: true,
    message: "Producto actualizado correctamente",
    product
  })
}
/* Update un producto  */


/* Eliminar un producto */
exports.deleteProduct = async (req, res, next) => {
  const product = await producto.findById(req.params.id) //Variable de tipo modificable

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Producto no encontrado'
    })
  }

  await product.remove();//Eliminamos el proceso
  res.status(200).json({
    success: true,
    message: "Producto eliminado correctamente"
  })
}
/* Eliminar un producto */


/* ------------ Crear nuevo producto /api/productos ------------ */
exports.newProduct = async (req, res, next) => {
  const product = await producto.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
}
/* ------------ Crear nuevo producto /api/productos ------------ */