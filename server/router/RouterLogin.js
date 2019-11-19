const express = require("express");
const router = express.Router();
const {secret_key} = require("../config")
const api = "login";
const md5 = require("md5")
const db = require('../db')

// 注册接口
app.post('/api/v1/regist', (req, res)=>{
    // 1. 接收表单中的参数
    let mobile = req.query.mobile
    // 2. 验证数据
    let mobileRE = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    if( !mobileRE.test(mobile) ) {
        res.json({
            'ok': 0,
            'error': '手机号码格式不正确！'
        })
        // 退出函数，后面代码不再执行了
        return
    }
    if(password.length < 6 || password.length > 18) {
        res.json({
            'ok': 0,
            'error': '密码必须是 6~18 位'
        })
        // 退出函数，后面代码不再执行了
        return
    }
    // 3. 先到数据库中查询这个手机号码是否已经存在
    let sql = 'SELECT COUNT(*) c FROM shop_users WHERE mobile = ?'
    db.query(sql, mobile, (err, data) => {
        // 如果执行 SQL 失败
        if(err) {
            res.json({
                'ok': 0,
                'error': err
            })
            // 退出函数，后面代码不再执行了
            return
        } else {
            // 如果手机号码已经在数据库中存在
            if(data[0].c > 0) {
                res.json({
                    'ok': 0,
                    'error': '手机号码已经存在！请换一个~'
                })
                // 退出函数，后面代码不再执行了
                return
            } else {
                // 把账号插入到数据库中
                sql = 'INSERT INTO shop_users SET ?'
                // 获取当前时间的时间戳，以秒为单位
                let regtime = parseInt(new Date().getTime()/1000)
                let data = {
                    // 字段  :  插入的值
                    mobile: mobile,
                    password: md5(password + secret),
                    regtime: regtime
                }
                // 执行 SQL
                db.query(sql, data, (err, data)=>{
                    if(err) {
                        res.json({
                            'ok': 0,
                            'error': err
                        })
                        // 退出函数，后面代码不再执行了
                        return
                    } else {
                        res.json({
                            'ok': 1
                        })
                    }
                })
            }
        }
    })
})


module.exports = router;