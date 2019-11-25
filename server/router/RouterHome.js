const express = require("express");
const router = express.Router();

const md5 = require("md5")
const db = require('../db')

router.get('/home', (req, res) => {
    res.json({
        ok: 1,
        data: "dfafdasfjalk"
    })
})


module.exports = router;