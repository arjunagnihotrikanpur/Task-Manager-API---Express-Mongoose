// Roles are passed in the request, then if the user's role is not included in the allowed roles, return a 403 error. Otherwise, call next() to proceed to the next middleware or route handler.
module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Denied!" });
    }
    next();
  };
};
