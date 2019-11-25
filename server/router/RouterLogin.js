const express = require("express");
const router = express.Router();
const {secret_key} = require("../config")
const api = "login";
const md5 = require("md5")
const db = require('../db')

//手机号
router.get('/yam', (req, res) => {
    let phone = req.query.phone
    const Core = require('@alicloud/pop-core');
    var client = new Core({
        accessKeyId: 'LTAI4FjxicZhcZc7ePvg4gHQ',
        accessKeySecret: 'ytBga9E2VzCQR0VB23CNWD8QIRloAg',
        endpoint: 'https://dysmsapi.aliyuncs.com',
        apiVersion: '2017-05-25'
    });

    var params = {
        "RegionId": "cn-shanghai",
        "PhoneNumbers": `${phone}`,
        "SignName": "Fweung",
        "TemplateCode": "SMS_177538625",
        "TemplateParam": "{'code':987765}"
    }

    var requestOption = {
        method: 'POST'
    };
    // console.log(params.PhoneNumbers, verify)
    client.request('SendSms', params, requestOption).then((result) => {
        return res.json({
            'code': 1,
            msg: '验证码获取成功',
        })
    }, (ex) => {
        console.log(ex)
    })
})

module.exports = router;