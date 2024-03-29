const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Por favor registra el nombre de la obra."],
    trim: true,
    maxLength: [120, "El nombre de la obra no debe exceder los 120 caracteres."]
  },
  autor: {
    type: String,
    required: [true, "Por favor registra el nombre del autor de la obra."],
    trim: true,
    maxLength: [600, "El nombre de la obra no debe exceder los 120 caracteres."]
  },
  precio: {
    type: Number,
    required: [true, "Por favor registre el precio del producto."],
    maxLength: [8, "El precio del producto no puede estar por encima de 99'999.999"],
    default: 0.0
  },
  descripcion: {
    type: String,
    required: [true, "Por favor registre la descripción de la obra."]
  },
  calificacion: {
    type: Number,
    default: 0
  },
  
  imagen: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],

  categoria: {
    type: String,
    required: [true, "Por favor seleccione la categoría del producto."],
    enum: {
      values: [
        "Arte digital",
        "Dibujo",
        "Diseño",
        "Escultura",
        "Grabado",
        "Pintura"
      ]
    }
  },

  vendedor: {
    type: String,
    required: [true, "Por favor registre el vendedor del producto."]
  },

  inventario: {
    type: Number,
    required: [true, "Por favor registre el stock del producto"],
    maxLength: [5, "Cantidad maxima del producto no puede sobrepasar 99999"],
    default: 0
  },

  numCalificaciones: {
    type: Number,
    default: 0
  },

  opiniones: [
    {
      nombreCliente: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comentario: {
        type: String,
        required: true
      }
    }
  ],

  /* Relacón entidad producto-usuario(auth) */
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User', //Esta relacionado con la variable User de authController.js
    required: true
  },
  /* Relacón entidad producto-usuario(auth) */

  fechaCreacion: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('productos', productsSchema);
