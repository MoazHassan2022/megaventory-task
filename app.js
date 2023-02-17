const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const ErrorController = require("./controllers/error-controller");
const productRouter = require("./routes/product-routes");
const AppError = require("./utils/app-error");

const app = express();

const errorController = new ErrorController();
// MIDDLEWARES

app.use(function (req, res, next) {
  console.log(req.originalUrl); //  for debugging
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors());
app.options("*", cors());

// Set security HTTP headers
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: {
      allowOrigins: ["*"],
    },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["*"],
        scriptSrc: ["* data: 'unsafe-eval' 'unsafe-inline' blob:"],
        imgSrc: ["* 'self' data: https:"],
      },
    },
  })
);

// Development logging
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Data sanitization against XSS
app.use(xss()); // prevent dangerous of html and javascript code in the request

// Prevent parameters pollution by preventing for example writing sort twice
app.use(
  hpp({
    whitelist: [], // keep multiple of any string param in this list
  })
);

app.use(compression());

// Limit requests from same IP address
const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000, // Ms: milliseconds, this will allow the same IP address to perform only 10000 request per hour
  message:
    "Too many requests from this IP address, please try again in an hour!",
});
app.use("/api", limiter);

// Body parser, reading date from body into req.body
app.use(express.json({ limit: "10kb" }));

// ROUTES
app.use("/api/products", productRouter);
app.all("*", (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server`, 404)
  ); // Here will assume that this is an error and skip all middlewares forward to the error handler middleware we defined
});

// Error handler middleware
app.use(errorController.globalErrorHandler);
module.exports = app;
