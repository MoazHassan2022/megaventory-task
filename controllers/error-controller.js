/**
 * @namespace ErrorController
 */
class ErrorController {
  /**
   * @constructor
   */
  constructor() {}

  /**
   * Handles errors in development
   * @param {Object} req
   * @param {Object} res
   * @param {function} next
   * @returns {Object} res
   */
  sendErrorDev = (req, res, err) => {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  };

  /**
   * Handles errors in production
   * @param {Object} req
   * @param {Object} res
   * @param {function} next
   * @returns {Object} res
   */
  sendErrorProd = (req, res, err) => {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    console.error("ERROR 💥", err);
    return res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  };

  /* eslint-disable */
  /**
   * Handles some errors
   * @param {Object} err
   * @param {Object} req
   * @param {Object} res
   * @param {function} next
   * @returns {Object} res
   */
  globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (process.env.NODE_ENV !== "development") {
      let error = { ...err };
      this.sendErrorProd(req, res, error);
    } else this.sendErrorDev(req, res, err);
  };
}

module.exports = ErrorController;
