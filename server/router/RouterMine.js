const express = require("express");
const router = express.Router();
const md5 = require("md5")
const db = require('../db')


// 用户中心
router.get('/me', (req, res) => {
    let dataes = []
    // 获取令牌
    let token = 3
    // let token = sessionStorage.getItem('token')
    let id = 1
    if (token == '') {
        res.json({
            'ok': 0,
            'error': '没有登陆'
        })
        return
    } else {
        let sql1 = 'select * from mayi_user where id = ?'
        db.query(sql1, id, (error, data1) => {
            if (error) {
                res.json({
                    'ok': 0,
                    'error': '获取用户信息失败'
                })
                return
            } else {
                //   res.json({
                //       'ok':1,
                //       'data':datas[0]
                //   })
                //   return
                dataes.push(data1[0])
                let sql2 = 'select count(*) num from  mayi_like where produc_id in (select id from  mayi_production where user_id = ? )'
                db.query(sql2, id, (err, data2) => {
                    if (err) {
                        res.json({
                            'ok': 0,
                            'error': '获取用户总点赞失败'
                        })
                        return 
                    } else {
                        //用户点赞总数
                        dataes.push(data2[0])
                        // res.json({
                        //      'ok':1,
                        //     'data': dataes
                        // })
                        let sql3 = 'select count(*)  num,atten_id from mayi_attention where user_id = ?'
                        db.query(sql3,id,(error,data3) =>{
                            if(err){
                                res.json({
                                    'ok':0,
                                    'error':'获取关注用户的数量失败'
                                })
                                return
                            }
                            else {
                                //用户关注
                                dataes.push(data3[0])
                            let sql4 = 'select count(user_id) num from  mayi_attention where atten_id = ?'
                             db.query(sql4,id,(err,data4) =>{
                                 if(err){
                                     res.json({
                                         'ok':0,
                                         'error':'获取用户粉丝失败'
                                     })
                                     return
                                 }else {
                                     dataes.push(data4[0])
                                     res.json({
                                         'ok':1,
                                         'data':dataes
                                     })
                                 }
                             })
                            }
                        })
                    }
                })
            }
        })
    }
})

module.exports = router;