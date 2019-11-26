-- 用户表 mayi_user
create TABLE mayi_user
(
    id int PRIMARY KEY auto_increment not null, -- 用户id 自动增长
    user_name VARCHAR(30) not null, -- 用户名
    user_password VARCHAR(20) not null, -- 密码/手机号
    usre_sex enum('男','女','保密') not null, -- 0/男 1/女 2/保密
    user_birthday VARCHAR(10), -- 用户生日
    user_introduced text null, -- 签名介绍 可以不写
    user_topimage VARCHAR(255) default 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1902370678,722059919&fm=26&gp=0.jpg', -- 头像 有个默认头像
    user_time TIMESTAMP not NULL -- 记录用户 创建时间和修改时间
);
-- 用户表添加地址
insert into mayi_user(id,user_name,user_password,usre_sex,user_birthday,user_introduced)
VALUES(1,'皮皮侠44929644',123456,3,'06-25','哈哈哈'),(2,'皮皮侠44938919',123456,3,'08-16',null);


-- 用户 其他信息
create TABLE mayi_userinfo 
(
    user_id int PRIMARY KEY auto_increment not null, -- 用户id 自动增长
    userinfo_site text -- 用户地址
);
-- 用户 其他信息添加数据
insert into mayi_userinfo values(1,'沐阳'),(2,'沐阳');

-- 作品表 mayi_production
create table mayi_production
(
    id int PRIMARY KEY auto_increment not null, -- 作品表 id
    pro_title VARCHAR(30) not null, -- 作品标题
    pro_classes enum('视频吧','文字帖','音乐台'), -- 作品分类
    likesum int not null, -- 这个作品的总点赞数
    boringunm int, -- 这个作品踩数
    pro_text text not null, -- 用户发表的作品可以是视屏文字
    user_id int not null -- 用户id 关联用户
);
-- 作品表数据
insert into mayi_production VALUES
(1,'小视频',1,0,0,'http://vd4.bdstatic.com/mda-jj8m7nvan11hwavm/sc/mda-jj8m7nvan11hwavm.mp4',1),
(2,'帖子',2,0,0,'人世间没有无缘无故的爱，人世间亦没有无缘无故的恨，爱与恨是对孪生姐妹，爱与恨紧紧地联系在一起。
理解与误解，了解与不了解，都是人与人交往中存在的必然。处理好了，你会得到幸福；处理不好，你会失去属于你的快乐。
亲情、友情、爱情总关情，
爱
你，因为理解；恨你，因为了解。',2);


-- 点赞数
CREATE table mayi_like(
    id int PRIMARY KEY auto_increment not null, -- 点赞表 id
    liketime VARCHAR(20), -- 点赞时间
    produc_id int not null, -- 作品id 关联作品
    beuser_id int not null, -- 被点赞的用户
    user_id int not null -- 用户 关联user
);
insert into mayi_like VALUES
(1,'11-20 15:20',1,1,2),
(2,'11-20 16:20',2,2,1);


-- 插眼表
CREATE table mayi_atten(
    id int PRIMARY KEY auto_increment not null, -- 点赞表 id
    attentiem VARCHAR(20), -- 插眼的时间
    produc_id int not null, -- 作品id 关联作品
    beuser_id int not null, -- 被插眼的用户
    user_id int not null -- 用户 关联user
);
insert into mayi_atten VALUES
(1,'11-20 15:20',1,1,2),
(2,'11-20 16:20',2,2,1);


-- 用户关注表 mayi_attention
create table mayi_attention 
(
    id int PRIMARY KEY auto_increment not null, -- 用户关注表 id
    atten_id int not null, -- 关注的用户id
    atten_time VARCHAR(20), -- 关注的时间
    user_id int not null -- 用户id 关联用户
);
-- 关注表添加数据
insert into mayi_attention values(1,2,'11-20 09:38',1),(2,1,'11-20 08:20',2);


--  评论表 mayi_commentary
create table mayi_commentary
(
    id int PRIMARY KEY auto_increment not null, -- 评论 id 自动增长
    commentary_user int, -- 被评论的 用户id
    commentary_id int, -- 回复评论的评论 id
    commentary_text text not null, -- 评论的信息
    production_id int not null, -- 评论的作品 id
    commen_tiem VARCHAR(20), -- 评论时间
    user_id int not null -- 用户id 关联用户
);
-- 评论数据
insert into mayi_commentary values
(1,1,null,'有意思',1,'11-18 09:54',2),
(2,2,null,'写的不错!',2,'11-20 08:44',1),
(3,null,1,'哈哈',1,'11-18 15:26',1);

-- 回复表 mayi_replymessage
-- create table mayi_replymessage
-- (
--     id int PRIMARY KEY auto_increment not null, -- 回复信息 id 自动增长
--     commentary_id int not null, -- 要回复评论的id 关联评论表
--     replymessage_text text not null, -- 回复的信息
--     user_id int not null  -- 用户id 关联用户表
-- );

-- 回复表数据
-- insert into mayi_replymessage values(1,1,'谢谢夸奖',1)

-- 收藏表 mayi_enshrine
CREATE TABLE enshrine
(
    id int PRIMARY KEY auto_increment not null, -- 收藏 id 自动增长
    enshrine_id int not null, -- 被收藏的用户id
    enshrine_replyid int not null, -- 被收藏的作品
    user_id int not null -- 用户id 关联用户
);
-- 收藏表数据
insert into enshrine VALUES(1,2,2,1),(2,1,1,2);

-- 消息分类表

-- create TABLE classify_text
-- (
--     id int PRIMARY KEY auto_increment not null, -- 消息分类表 id 自动增加
--     clas_text VARCHAR(10) not null -- 分类名称
-- )
