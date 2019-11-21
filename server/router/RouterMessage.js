const express = require("express");
const router = express.Router();

const md5 = require("md5")
const db = require('../db')

// 获取全部消息 
router.get('/classify', (req, res) => {
    let user_id = req.query.userid
    // console.log(user_id)
    if (!user_id) {


        res.json({
            'ok': 0,
            'error': '请先登录!'
        })
        return
    } else {
        let sql = 'select * from mayi_user where id = ?'
        db.query(sql, user_id, (err, data) => {
            if (err) {
                res.json({
                    'ok': 0,
                    'error': '请登录正确的用户!'
                })
                return
            } else {
                // 用户id
                let user_data = data
                let id = data[0].id
                // 作品·关注查询 
                sql = 'select * from mayi_production where user_id = ?;select * from mayi_attention a,mayi_user b  where a.user_id = b.id and atten_id = ?'
                db.query(sql, [id, id], (err, data) => {
                    if (err) {
                        res.json({
                            'ok': 0,
                            'error': '获取作品和关注失败!'
                        })
                        return
                    }
                    // console.log(data)
                    // 作品数据
                    let produc_data = data[0]
                    // 关注数据
                    let guanzhu = data[1]
                    // console.log(guanzhu)
                    // 作品id 数组
                    let producarrid = []
                    for (var i = 0; i < data[0].length; i++) {
                        // 作品id
                        let producs = data[0][i].id
                        // 添加入 producarrid 数组中
                        producarrid.push(producs)
                    }
                    // console.log(producarrid)
                    producarrid.join(',')
                    db.query('select * from mayi_like a,mayi_user b,mayi_production c where a.user_id = b.id and a.produc_id = c.id and a.produc_id in(?);select * from mayi_atten a,mayi_user b,mayi_production c where a.user_id = b.id and a.produc_id = c.id and a.produc_id in(?);select * from mayi_commentary a,mayi_production b,mayi_user c where a.production_id = b.id and a.user_id = c.id and a.commentary_user is not null and a.production_id in(?)',[producarrid,producarrid,producarrid],(err,data) => {
                        if (err) return console.log(err)
                        data.push(guanzhu)
                        // console.log(data)
                        res.json({
                            'ok': 1,
                            data: data
                        })
                    })

                })
            }
        })
    }
})

module.exports = router;