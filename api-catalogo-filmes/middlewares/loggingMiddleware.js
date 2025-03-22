function loggingMiddleware(req, res, next) {
  const currentDate = new Date().toISOString();
  console.log(`[${currentDate}] Método HTTP: ${req.method}, URL: ${req.originalUrl}`);
  next();
}

module.exports = loggingMiddleware;
