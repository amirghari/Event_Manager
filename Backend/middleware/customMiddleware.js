const reqLogger = (req, res, next) => {
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    console.log('Body:', req.body);
    console.log('---');
    next();
};

const unknownEndpoint = (req, res, next) => {
    const error = new Error('Unknown endpoint');
    error.statusCode = 404;
    throw error;
};

const errorHandler = (err, req, res, next) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Internal server error';

    console.error(err.stack);

    res.status(errStatus).json({
        status: errStatus,
        error: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {},
    });
};

module.exports = {
    reqLogger,
    unknownEndpoint,
    errorHandler,
};