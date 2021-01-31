SET names utf8;
DROP DATABASE IF EXISTS lc;
CREATE DATABASE lc charset=utf8;
USE lc;
#用户表
CREATE TABLE lc_user(
  uid INT PRIMARY KEY auto_increment,
  uname VARCHAR(32) NOT NULL,
  phone VARCHAR(16) NOT NULL,
  vcode VARCHAR(8) NOT NULL,
  upwd VARCHAR(16) NOT NULL,
  avator VARCHAR(128),
  gender VARCHAR(2),
  birthday DATE
  );
INSERT INTO lc_user VALUES(null,'小张','13412345678','1234','123456','image/01.png','男','1985-11-13'),
                          (null,'小王','17712345678','4213','123456','img/02.png','女','1994-10-02'),
                          (null,'小李','18312345678','6345','123456','img/03.png','女','1979-09-17'),
                          (null,'小赵','19912345678','9675','123456','img/04.png','男','1989-06-23'),
                          (null,'小钱','13512345678','2635','123456','img/05.png','男','1997-12-14');
#收货地址表
CREATE TABLE lc_receiver_address(
  aid INT PRIMARY KEY auto_increment,
  address_type VARCHAR(16),
  receiver VARCHAR(16),
  phone VARCHAR(16),
  province VARCHAR(16),
  city VARCHAR(16),
  county VARCHAR(16),
  address VARCHAR(64),
  isDefault boolean
);
#购物车表
CREATE TABLE lc_shopping_cart(
  cid INT PRIMARY KEY auto_increment, 
  product VARCHAR(64),
  price DECIMAL(8,2),
  count INT,
  total_price DECIMAL(8,2)
);
#首页轮播图表
CREATE TABLE lc_index_carousel(
  cid INT PRIMARY KEY auto_increment,
  img VARCHAR(64),
  title VARCHAR(128),
  href VARCHAR(64)
);

#汽车参数详情表
CREATE TABLE lc_car_params(
  pid INT PRIMARY KEY auto_increment,
  engine  VARCHAR(64),
  displacement INT,
  max_power VARCHAR(16),
  max_torque VARCHAR(16),
  max_speed INT,
  transmission VARCHAR(32),
  wheelbase INT,
  curb_quality INT,
  fuel_consumption DECIMAL(2,1)
);