const validadeFieldTitle = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined || body.title === "") {
        return res.status(400).json({ message: "The field 'title' is required and cannot be empty"});
    }
    next();
};

const validadeFieldStatus = (req, res, next) => {
    const { body } = req;

    if (body.status === undefined || body.status === "") {
        return res.status(400).json({ message: "The field 'status' is required and cannot be empty"});
    }
    next();
};

module.exports = {
    validadeFieldTitle,
    validadeFieldStatus
};