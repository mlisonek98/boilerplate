const router = require('express').Router();


router.use(function (req, res, next) {
  const err = new Error('NAH BRUH');
  err.status = 404;
  next(err);
});

module.exports = router;
