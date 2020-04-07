export const redirectLogin = (req, res, next) => {
  // if (!req.session.userId) {
  // res.redirect('/users/login');
  // } else {
  next();
  // }
};

export const redirectDashboard = (req, res, next) => {
  // if (req.session.userId) {
  // res.redirect('/dashboard');
  // } else {
  next();
  // }
};
