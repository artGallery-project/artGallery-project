const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

/* Ver la lista de productos */
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

  const resPerPage = 5;
  const productsCount = await producto.countDocuments();

  const apiFeatures = new APIFeatures(producto.find(), req.query)
    .search()
    .filter();

    let products = await apiFeatures.query;
    let filteredProductsCount = products.length;
    apiFeatures.pagination(resPerPage);
    products = await apiFeatures.query.clone();
  
    res.status(200).json({
      success: true,
      productsCount,
      resPerPage,
      filteredProductsCount,
      products
    })
  })
/* Ver la lista de productos */


/* Ver un producto por ID */
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.params.id)

  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404))
  }

  res.status(200).json({
    success: true,
    message: "Aqui debajo encuentras información sobre tu producto: ",
    product
  })
})
/* Ver un producto por ID */


/* Update un producto  */
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await producto.findById(req.params.id) //Variable de tipo modificable
  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404))
  }

  //Si el objeto si existia, entonces si ejecuto la actualización
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true, //Valido solo los atributos nuevos o actualizados
    runValidators: true
  });
  //Respondo Ok si el producto si se actualizó
  res.status(200).json({
    success: true,
    message: "Producto actualizado correctamente",
    product
  })
})
/* Update un producto  */


/* Eliminar un producto */
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.params.id) //Variable de tipo modificable

  if (!product) {
    return next(new ErrorHandler("Producto no encontrado", 404))
  }

  await product.remove();//Eliminamos el proceso
  res.status(200).json({
    success: true,
    message: "Producto eliminado correctamente"
  })
})
/* Eliminar un producto */


/* ------------ Crear nuevo producto /api/productos ------------ */
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id; //Relaciona el usuario(vendedor) con el nuevo producto
  const product = await producto.create(req.body);

  res.status(201).json({
    success: true,
    product
  })
})
/* ------------ Crear nuevo producto /api/productos ------------ */



/* Crear o actualizar una review */
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comentario, idProducto } = req.body;

  const opinion = {
    nombreCliente: req.user.nombre,
    rating: Number(rating),
    comentario
  }

  const product = await producto.findById(idProducto);

  const isReviewed = product.opiniones.find(item =>
    item.nombreCliente === req.user.nombre)

  if (isReviewed) {
    product.opiniones.forEach(opinion => {
      if (opinion.nombreCliente === req.user.nombre) {
        opinion.comentario = comentario,
          opinion.rating = rating
      }
    });
  } else {
    product.opiniones.push(opinion)
    product.numCalificaciones = product.opiniones.length;
  }

  //Promedio de calificaciones
  product.calificacion = product.opiniones.reduce((acc, opinion) =>
    opinion.rating + acc, 0) / product.opiniones.length

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: 'Hemos opinado correctamente'
  })
})
/* Crear o actualizar una review */



/* Ver todas las review de un producto */
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.query.id);

  res.status(200).json({
    success: true,
    cantidad: `La obra cuenta con ${product.opiniones.length} calificaciones`,
    opiniones: product.opiniones
  })
})
/* Ver todas las review de un producto */



/* Eliminar review */
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await producto.findById(req.query.idProducto);

  const opiniones = product.opiniones.filter(opinion =>
    opinion._id.toString() !== req.query.idReview.toString());

  const numCalificaciones = opiniones.length;

  const calificacion = product.opiniones.reduce((acc, Opinion) =>
    Opinion.rating + acc, 0) / opiniones.length;

  await producto.findByIdAndUpdate(req.query.idProducto, {
    opiniones,
    calificacion,
    numCalificaciones
  }, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  })
  res.status(200).json({
    success: true,
    message: "review eliminada correctamente"
  })
})
/* Eliminar review */