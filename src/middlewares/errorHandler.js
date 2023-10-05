const errorHandler = (err, req, res) => {
    console.error(err.stack);

    res.status(500).json({ messagem: "Ocorreu um interno :("});
};

module.exports = errorHandler;