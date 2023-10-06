/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({ message: "Ocorreu um interno :("});
};

module.exports = errorHandler;