const router = require('express').Router();
const noteRoutes = require('../apiRoutes/apiRoutes');

router.use(noteRoutes);

module.exports = router;