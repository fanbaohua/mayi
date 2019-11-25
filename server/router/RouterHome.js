const express = require("express");
const router = express.Router();

const md5 = require("md5")
const db = require('../db')

router.get('/home', (req, res) => {
    console.log(req.query)
    let classes = req.query.class || "1,2,3"
    let pageNo = 1;
    let pageSize = 10;
    console.log(classes)
    let sql = `select * from mayi_production a,mayi_user b where a.user_id = b.id AND a.pro_classes in (${classes}) limit ?,?`
    db.query(sql, [(pageNo - 1) * pageSize, pageSize], (error, data) => {
        if (error) {
            console.log(error)
        }
        pageNo++
        console.log(data)
        res.json({
            ok: 1,
            data: data
        })
    })
})

// 赞
router.post('/home/addzan', (req, res) => {
    console.log(req.body)
    let id = req.body.id
    let sqls = 'select likenum from mayi_production where id = ?'
    db.query(sqls, id, (error, datas) => {
        if (error) {
            return error
        }
        console.log(datas)
        let sql = 'update mayi_production set likenum=? where id = ?'
        let num = datas[0].likenum;
        if (req.body.deladd == 0) {
            num++
        } else {
            num--
        }
        db.query(sql, [num, id], (error, data) => {
            if (error) {
                return error
            }
            if (data.affectedRows == 1) {
                res.json({
                    ok: 1,
                    data: "修改成功"
                })
            }

        })
    })

})

// 搜索
router.post('/search', (req, res) => {
    let abc = req.body
    let ids = []
    let wenhao = ''
    // 返回数据的数组
    let dataes = []
    db.query(`select * from mayi_production where pro_title LIKE "%${abc.val}%" or  pro_text LIKE "%${abc.val}%"`, (error, data) => {
        if (error) {
            return console.log(error)
        }
        data.forEach(item => {
            ids.push(item.id)
            wenhao += '?,'
        });
        wenhao = wenhao.slice(0, wenhao.length - 1)
        console.log(wenhao)
        db.query(`SELECT * FROM mayi_user WHERE id in (${wenhao})`, ids, (error, datas) => {
            if (error) {
                return console.log(error)
            }
            // datas.forEach(item => {
            //     data.push(item)
            // });
            for (let i = 0; i <= data.length - 1; i++) {
                let obj = Object.assign({},data[i],datas[i]);
                dataes.push(obj)
            }
            res.json({
                ok: 1,
                dataes: dataes
            })
        })

    })
})

// 评论
router.get('/comments',(req,res) => {
    console.log(req.query.id)
})

module.exports = router;  