async function authorization(req, res, next) {
  try {
    if (req.user.role !== "Admin") {
      throw { name: "Forbiden" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;
