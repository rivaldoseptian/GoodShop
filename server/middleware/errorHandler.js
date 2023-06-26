module.exports = (err, req, res, next) => {
  let message = "Internal Server Error";
  let status = 500;

  switch (err.name) {
    case "Forbiden":
      status = 403;
      message = "You are not authorized";
      break;
    case "JsonWebTokenError":
    case "Invalid Token":
      status = 401;
      message = "Unauthenticated";
      break;
    case "SequelizeValidationError":
    case "SequelizeUniqueValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "Invalid Email/Password":
      status = 404;
      message = "Invalid Email/Password";
      break;
    case "Not Found":
      status = 404;
      message = "Not Found";
      break;
    case "Email/Password Required":
      status = 400;
      message = "Email/Password Required";
      break;
    default:
      message = "Internal Server Error";
      status = 500;
      break;
  }
  res.status(status).json({ message: message });
};
