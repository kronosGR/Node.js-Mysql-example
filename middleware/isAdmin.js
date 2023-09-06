const isAdmin = (req, res, next) => {
  if (req.user.role === 1) {
    next();
  } else {
    console.log('Not an admin');
  }
};
module.exports = isAdmin;
