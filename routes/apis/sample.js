var express = require('express');
var router = express.Router();


router.get('/:id', function (req, res, next) {
    if (req)
        res.json({
            request_params: req.query.param1,
            query_params: req.params.id,
            message: "success"
        })
    else
        res.json({
            message: "failure"
        })
});

module.exports = router;
