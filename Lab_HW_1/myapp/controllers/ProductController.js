const Product = require('../models/Product');

exports.getAllProduct = (req, res) => {
    try {
        res.status(200).json({ success: true, data: Product.getAll() });
    } catch (error) {
        res.status(520).json({ success: false, error: error.message });
    }

}

exports.getProductById = (req, res) => {
    try {
        res.status(200).json({ success: true, data: Product.getById(req.params.id) });
    } catch (error) {
        res.status(520).json({ success: false, error: error.message });
    }
}

exports.saveProduct = (req, res) => {
    try {
        const product = req.body;
        const saveProduct = new Product(null, product.title, product.price, product.description).save();
        res.status(201).json({ success: true, data: saveProduct });
    } catch (error) {
        res.status(520).json({ success: false, error: error.message });
    }
}

exports.updateProduct = (req, res) => {
    try {
        const product = req.body;
        const updateProduct = new Product(req.params.id, product.title, product.price, product.description).update();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(501).json({ success: false, error: error.message });
    }
}

exports.deleteProuduct = (req, res) => {
    try {
        Product.deleteById(req.params.id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(501).json({ success: false, error: error.message });
    }
}



