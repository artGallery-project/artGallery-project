/* PAGINACIÓN */
class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr
  }

  /* Sistema de búsqueda */
  search() {
    const keyword = this.queryStr.keyword ? {
      nombre: {
        $regex: this.queryStr.keyword,
        $options: 'i'
      }
    } : {}

    this.query = this.query.find({ ...keyword });
    return this
  }
  /* Sistema de búsqueda */

  /* Aplicar filtros */
  filter() {
    const queryCopy = { ...this.queryStr };

    //eliminemos los campos que vienen de otras consultas
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach(el => delete queryCopy[el]);

    //Filtro avanzado para precio
    let queryStr = JSON.stringify(queryCopy)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match =>
      `$${match}`)

    this.query = this.query.find(JSON.parse(queryStr))
    return this
  }
  /* Aplicar filtros */

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip)
    return this
  }
}

module.exports = APIFeatures