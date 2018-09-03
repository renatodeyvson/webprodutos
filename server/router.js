const product = require('./controllers/productController');

module.exports = (app) => {

    const productLabel = 'products';
    app.get('/'+productLabel+'/', product.getAll);
    app.post('/'+productLabel+'/', product.add);
    app.put('/'+productLabel+'/', product.update);
    app.delete('/'+productLabel+'/', product.remove);

};