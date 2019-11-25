const express = require("express");
const router = express.Router();
const md5 = require("md5")
const db = require('../db')



module.exports = router;

//资料编辑
router.get('/edit',(req,res) =>{
    let id = 1
    let sql = 'select * from mayi_user where id = ?'
    db.query(sql,id,(error,data) =>{
        console.log(data)
        if(error){
            res.json({
                'ok':0,
                'error':'获取用户信息失败'
            })
            return
        }else {
            res.json({
                'ok':1,
                'data':data
            })
            return
        }
    })

})


//修改资料
router.post('/submit',(req,res) =>{
    let params = req.body.params
    console.log(params)
   let id = 1;
   db.query(`update mayi_user set user_name = '${params.username}',usre_sex = '${params.deindex}',user_introduced = '${params.introduced}',user_address =  '${params.deindexss}' where id = ${id}`,(error,data) =>{
    if(error){
        console.log(error)
         res.json({
             'ok':0,
             'error':'修改用户信息失败'
         })
         return
     }else {
         console.log(data)
         res.json({
             'ok':1,
              'msg':'修改成功'
         })
     }
 })
})