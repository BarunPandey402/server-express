// use of middleware

const logger = (req,res,next) => {
    req.msg = "hello world";
    console.log(`${req.method} ${req.protocol}://${req.hostname}${req.originalUrl}`);
    next();
}

module.exports = logger;