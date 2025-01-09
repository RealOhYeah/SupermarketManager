/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : localhost:3306
 Source Schema         : supermarket_manager

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 22/11/2024 13:38:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '部门名称',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '描述',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES (8, '销售部', '销售部门', '0');
INSERT INTO `department` VALUES (9, '软件', '学习软件开发主要部门', '0');
INSERT INTO `department` VALUES (10, '软件实践', '将知识应用于生活', '0');

-- ----------------------------
-- Table structure for detail_sale_records
-- ----------------------------
DROP TABLE IF EXISTS `detail_sale_records`;
CREATE TABLE `detail_sale_records`  (
  `sell_cn` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '销售订单号',
  `goods_id` bigint NOT NULL COMMENT '商品编号',
  `goods_num` bigint NOT NULL COMMENT '商品数量',
  `goods_price` double(10, 2) NOT NULL COMMENT '销售单价',
  `goods_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '商品名',
  PRIMARY KEY (`sell_cn`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of detail_sale_records
-- ----------------------------
INSERT INTO `detail_sale_records` VALUES ('1701213155180429314', 7, 1, 120.00, '运动鞋');
INSERT INTO `detail_sale_records` VALUES ('1701220094014722049', 9, 1, 350.00, '桌椅套装');
INSERT INTO `detail_sale_records` VALUES ('1833124331315408897', 8, 1, 50.00, '《PASLMS》英文版');
INSERT INTO `detail_sale_records` VALUES ('1835881697266003969', 10, 50, 40.00, '短袖');

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '用户名',
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '邮箱',
  `address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '住址',
  `sex` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '性别',
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '密码',
  `nick_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '昵称',
  `head_img` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL COMMENT '头像',
  `state` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '状态 0：在职 1：离职',
  `isAdmin` bit(1) NULL DEFAULT NULL COMMENT '是否是超管 1:是 0不是',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '描述',
  `createby` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `age` int NULL DEFAULT NULL COMMENT '年龄',
  `deptId` bigint NULL DEFAULT NULL COMMENT '部门主键',
  `id_card` varchar(18) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '身份证号',
  `leave_time` datetime NULL DEFAULT NULL COMMENT '离职时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES (1, '123', '123@qq.com', '北京市海淀区', '1', '123', 'Oh...Yeah！！！', '/files/1727233326049_3.jpg', '0', b'1', '超级系统拥有者', 'Oh...Yeah！！！', '2024-09-25 03:02:07', 999, 10, '411111199905089999', NULL);
INSERT INTO `employee` VALUES (15, '456', NULL, '北京市海淀区', '1', '123', '李四', '/files/1694434162457_07.jpg', '0', b'0', '销售人员', '张三', '2023-09-11 12:10:04', 18, 8, '411111199501019999', NULL);
INSERT INTO `employee` VALUES (16, '789', NULL, NULL, '1', '123', '叶子', '/files/1694434162457_07.jpg', '0', b'0', '仓库管理员', '张三', '2023-09-11 13:06:52', 18, 8, '511111199501015555', NULL);
INSERT INTO `employee` VALUES (17, '111', NULL, NULL, '1', '123', '明哥', NULL, '0', b'0', '系统拥有者', NULL, NULL, 17, 10, '311111199501015555', NULL);
INSERT INTO `employee` VALUES (18, '123456789', NULL, '火星一号', '0', '123456', '火狼女', '/files/1726318584192_2.png', '0', b'0', '销冠', 'Oh...Yeah！！！', '2024-09-14 12:58:29', 35, 8, '123456789987654321', NULL);

-- ----------------------------
-- Table structure for exchange_point_products_records
-- ----------------------------
DROP TABLE IF EXISTS `exchange_point_products_records`;
CREATE TABLE `exchange_point_products_records`  (
  `cn` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '订单号',
  `goods_id` bigint NULL DEFAULT NULL COMMENT '商品编号',
  `member_id` bigint NULL DEFAULT NULL COMMENT '会员编号',
  `integral` bigint NULL DEFAULT NULL COMMENT '积分',
  `update_time` datetime NULL DEFAULT NULL COMMENT '最近操作时间',
  `updateby` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '操作者',
  `update_id` bigint NULL DEFAULT NULL COMMENT '操作者编号',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`cn`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of exchange_point_products_records
-- ----------------------------
INSERT INTO `exchange_point_products_records` VALUES ('1701220420541288450', 10, 5, 60, '2023-09-11 13:05:30', '张三', 1, '0');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '商品名',
  `createby` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `category_id` bigint NULL DEFAULT NULL COMMENT '商品分类id',
  `sell_price` double(10, 2) NULL DEFAULT NULL COMMENT '销售价格',
  `purchash_price` double(10, 2) NULL DEFAULT NULL COMMENT '进货价格',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更改时间',
  `updateby` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '更改者',
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_czech_ci NULL DEFAULT NULL COMMENT '分类名',
  `cover_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '商品封面',
  `state` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '状态',
  `residue_num` bigint NULL DEFAULT NULL COMMENT '剩余数量',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '备注',
  `sales_volume` bigint NULL DEFAULT NULL COMMENT '销量',
  `inventory` bigint NULL DEFAULT NULL COMMENT '需库存量',
  `shelves` bigint NULL DEFAULT NULL COMMENT '货架上需摆放的数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (7, '飞雷神之鞋', '张三', '2023-09-11 12:20:02', 9, 150.00, 120.00, '2024-09-16 13:15:51', 'Oh...Yeah！！！', '服装', '/files/1694434783850_04.jpg', '0', 160, '适合打球跑步的运动鞋', 1, 100, 10);
INSERT INTO `goods` VALUES (8, '《PASLMS》英文版', '张三', '2023-09-11 12:21:11', 11, 55.00, 50.00, '2023-09-11 12:21:11', '张三', '书籍', '/files/1694434840737_05.jpg', '0', 59, '著名书籍《PASLMS》英文版', 1, 200, 50);
INSERT INTO `goods` VALUES (9, '桌椅套装', '张三', '2023-09-11 12:21:43', 13, 400.00, 350.00, '2023-09-11 12:22:00', '张三', '办公用具', '/files/1694434883855_03.jpg', '0', 9, '桌子加椅子', 1, 300, 20);
INSERT INTO `goods` VALUES (10, '短袖', '张三', '2023-09-11 12:22:50', 9, 60.00, 40.00, '2023-09-11 12:22:50', '张三', '服装', '/files/1694434945440_02.jpg', '0', 150, '夏季短袖', 50, NULL, NULL);
INSERT INTO `goods` VALUES (11, '变形金刚玩具套装', '张三', '2023-09-11 12:30:45', 13, 165.00, 140.00, '2023-09-11 12:30:45', '张三', '办公用具', '/files/1694435421618_e04f06dc02b84d38bc4d1ba2b39add0d.jpg', '0', 20, '变形金刚玩具套装', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for goods_category
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '分类名',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '备注',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of goods_category
-- ----------------------------
INSERT INTO `goods_category` VALUES (9, '服装', '衣服鞋袜', '0');
INSERT INTO `goods_category` VALUES (10, '零食', '饭后零食', '-1');
INSERT INTO `goods_category` VALUES (11, '书籍', '考研考公均适用', '0');
INSERT INTO `goods_category` VALUES (12, '饮料酒水', '饮料酒水类别', '0');
INSERT INTO `goods_category` VALUES (13, '办公用具', '办公用具', '0');

-- ----------------------------
-- Table structure for point_products
-- ----------------------------
DROP TABLE IF EXISTS `point_products`;
CREATE TABLE `point_products`  (
  `goods_id` bigint NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `integral` bigint NULL DEFAULT NULL,
  `updateby` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `update_time` datetime NULL DEFAULT NULL,
  `update_id` bigint NULL DEFAULT NULL,
  `cover_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of point_products
-- ----------------------------
INSERT INTO `point_products` VALUES (10, '短袖', 60, '张三', '2023-09-11 12:59:57', 1, '/files/1694434945440_02.jpg', '0');
INSERT INTO `point_products` VALUES (11, '变形金刚玩具套装', 50, '张三', '2023-09-11 12:59:48', 1, '/files/1694435421618_e04f06dc02b84d38bc4d1ba2b39add0d.jpg', '0');

-- ----------------------------
-- Table structure for store
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '仓库名称',
  `address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '仓库地址',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '状态',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES (5, '一号仓库', '北京市海淀区', '0', '超市一号仓库');
INSERT INTO `store` VALUES (6, '七号库', '哈尔滨呼兰区', '0', '存储超多的锅包肉');

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `cn` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '名称',
  `address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '地址',
  `tel` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '联系电话',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '备注',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  PRIMARY KEY (`cn`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES (7, '阿里巴巴', '浙江省杭州市', '123', '1688商家供货商', '0');
INSERT INTO `supplier` VALUES (8, '腾讯', '月球', '12311111516', '来自月球的土特产', '0');

-- ----------------------------
-- Table structure for t_detail_store_goods
-- ----------------------------
DROP TABLE IF EXISTS `t_detail_store_goods`;
CREATE TABLE `t_detail_store_goods`  (
  `cn` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `goods_id` bigint NOT NULL,
  `goods_num` int NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `goods_price` double NULL DEFAULT NULL COMMENT '0：入库 1：出库',
  `type` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `createid` bigint NOT NULL,
  `create_time` datetime NOT NULL,
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '0：正常 1：过期 2：下架',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `expiry_time` datetime NULL DEFAULT NULL COMMENT '过期时间',
  `createby` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL,
  `birth_time` datetime NULL DEFAULT NULL COMMENT '生产时间',
  `state1` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '0:正常 1：删除 2：待处理',
  `store_id` bigint NULL DEFAULT NULL,
  `supplier_id` bigint NULL DEFAULT NULL COMMENT '供货商编号',
  `supplier_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '供货商名称',
  `untreated_num` bigint NULL DEFAULT NULL COMMENT '待处理数量',
  PRIMARY KEY (`cn`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_detail_store_goods
-- ----------------------------
INSERT INTO `t_detail_store_goods` VALUES ('1701212006578667522', 7, 200, '运动鞋', 120, '0', 1, '2023-09-11 12:32:04', '0', '运动鞋入库', '2029-06-25 16:00:00', '张三', '2023-09-10 16:00:00', '0', 5, 7, '阿里巴巴', NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701212043736006658', 8, 200, '《PASLMS》英文版', 50, '0', 1, '2023-09-11 12:32:13', '0', '', '2029-06-25 16:00:00', '张三', '2023-09-10 16:00:00', '0', 5, 7, '阿里巴巴', NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701212067161194498', 9, 200, '桌椅套装', 350, '0', 1, '2023-09-11 12:32:18', '0', '', '2029-06-25 16:00:00', '张三', '2023-09-10 16:00:00', '0', 5, 7, '阿里巴巴', NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701212086803120129', 10, 200, '短袖', 40, '0', 1, '2023-09-11 12:32:23', '0', '', '2029-06-25 16:00:00', '张三', '2023-09-10 16:00:00', '0', 5, 7, '阿里巴巴', NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701212102829555713', 11, 200, '变形金刚玩具套装', 140, '0', 1, '2023-09-11 12:32:27', '0', '', '2029-06-25 16:00:00', '张三', '2023-09-10 16:00:00', '0', 5, 7, '阿里巴巴', NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701212176804495361', 7, 20, '运动鞋', NULL, '1', 1, '2023-09-11 12:32:45', '0', '', NULL, '张三', NULL, '0', 5, NULL, NULL, NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701218295690104833', 8, 50, '《PASLMS》英文版', NULL, '1', 1, '2023-09-11 12:57:03', '0', '', NULL, '张三', NULL, '0', 5, NULL, NULL, NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701218352346763266', 9, 10, '桌椅套装', NULL, '1', 1, '2023-09-11 12:57:17', '0', '', NULL, '张三', NULL, '0', 5, NULL, NULL, NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701218386224156674', 10, 60, '短袖', NULL, '1', 1, '2023-09-11 12:57:25', '0', '', NULL, '张三', NULL, '0', 5, NULL, NULL, NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701218444214603778', 11, 20, '变形金刚玩具套装', NULL, '1', 1, '2023-09-11 12:57:39', '0', '', NULL, '张三', NULL, '0', 5, NULL, NULL, NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1701219991275245570', 8, 10, '《PASLMS》英文版', NULL, '1', 1, '2023-09-11 13:03:48', '0', '', NULL, '张三', NULL, '0', 5, NULL, NULL, NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1835249595923251202', 9, 5, '桌椅套装', 350, '0', 1, '2024-09-15 09:29:36', '0', '电竞椅套装专门为学习', '2027-09-12 16:00:00', 'Oh...Yeah！！！', '2024-09-08 16:00:00', '0', 6, 7, '阿里巴巴', NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1835687474923261953', 7, 19, '飞雷神之鞋', NULL, '0', 1, '2024-09-17 16:00:00', '1', '', NULL, 'Oh...Yeah！！！', NULL, '2', 5, NULL, NULL, 19);
INSERT INTO `t_detail_store_goods` VALUES ('1835880257713762306', 7, 160, '飞雷神之鞋', NULL, '0', 1, '2024-09-16 16:00:00', '0', '用于测试退还', NULL, 'Oh...Yeah！！！', NULL, '0', 6, NULL, NULL, 160);
INSERT INTO `t_detail_store_goods` VALUES ('1835880645703659522', 7, 160, '飞雷神之鞋', NULL, '1', 1, '2024-09-17 03:17:10', '0', '进货可以来卖了', NULL, 'Oh...Yeah！！！', NULL, '0', 6, NULL, NULL, NULL);
INSERT INTO `t_detail_store_goods` VALUES ('1835881368818446337', 10, 140, '短袖', NULL, '1', 1, '2024-09-17 03:20:02', '0', '到了夏季，是时候卖卖短袖了\n', NULL, 'Oh...Yeah！！！', NULL, '0', 5, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for t_emp_role
-- ----------------------------
DROP TABLE IF EXISTS `t_emp_role`;
CREATE TABLE `t_emp_role`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `eid` bigint NOT NULL COMMENT '用户id',
  `rid` bigint NOT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_emp_role
-- ----------------------------
INSERT INTO `t_emp_role` VALUES (1, 1, 2);
INSERT INTO `t_emp_role` VALUES (20, 15, 3);
INSERT INTO `t_emp_role` VALUES (21, 16, 4);
INSERT INTO `t_emp_role` VALUES (22, 16, 5);
INSERT INTO `t_emp_role` VALUES (23, 17, 6);

-- ----------------------------
-- Table structure for t_goods_store
-- ----------------------------
DROP TABLE IF EXISTS `t_goods_store`;
CREATE TABLE `t_goods_store`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `goods_id` bigint NOT NULL COMMENT '商品编号',
  `store_id` bigint NOT NULL COMMENT '仓库编号',
  `in_num` bigint NOT NULL COMMENT '入库数数量',
  `residue_num` bigint NOT NULL COMMENT '剩余数量',
  `store_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '仓库名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_goods_store
-- ----------------------------
INSERT INTO `t_goods_store` VALUES (12, 7, 5, 200, 199, '一号仓库');
INSERT INTO `t_goods_store` VALUES (13, 8, 5, 200, 140, '一号仓库');
INSERT INTO `t_goods_store` VALUES (14, 9, 5, 200, 190, '一号仓库');
INSERT INTO `t_goods_store` VALUES (15, 10, 5, 200, 0, '一号仓库');
INSERT INTO `t_goods_store` VALUES (16, 11, 5, 200, 180, '一号仓库');
INSERT INTO `t_goods_store` VALUES (17, 9, 6, 5, 5, '七号库');
INSERT INTO `t_goods_store` VALUES (18, 7, 6, 0, 0, '七号库');

-- ----------------------------
-- Table structure for t_member
-- ----------------------------
DROP TABLE IF EXISTS `t_member`;
CREATE TABLE `t_member`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '姓名',
  `phone` varchar(11) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '手机号',
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '密码',
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '邮箱',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '状态',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '描述',
  `integral` bigint NULL DEFAULT NULL COMMENT '会员积分',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_member
-- ----------------------------
INSERT INTO `t_member` VALUES (5, '陈小明', '123', '123', '123@qq.com', '0', '新会员', 2624);
INSERT INTO `t_member` VALUES (6, '哇哈哈', '456', '123', NULL, '0', '老会员', 3000);
INSERT INTO `t_member` VALUES (7, '小王', '789', '123', NULL, '0', '老会员', 20);

-- ----------------------------
-- Table structure for t_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '名称',
  `purl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '后端接口地址',
  `type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '类型 0:目录 1 菜单 2 按钮 -1禁用',
  `parent_id` bigint NULL DEFAULT NULL COMMENT '父id',
  `parent_label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '父名称',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '描述',
  `state` varchar(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '状态',
  `flag` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '权限的唯一标识',
  `icon` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '图标',
  `component` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '前端组件路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 63 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_menu
-- ----------------------------
INSERT INTO `t_menu` VALUES (1, '销售管理', NULL, '0', NULL, NULL, NULL, '0', 'sale_management', 'iconfont icon-xiaoshoutixi\r\n\r\n', NULL);
INSERT INTO `t_menu` VALUES (2, '人事管理', NULL, '0', NULL, NULL, NULL, '0', 'personnel_management', 'iconfont icon-hrrenshirenshiguanli380', NULL);
INSERT INTO `t_menu` VALUES (3, '个人中心', NULL, '0', NULL, NULL, NULL, '0', 'personal', 'iconfont icon-gerenzhongxin-gerenxinxi\r\n', NULL);
INSERT INTO `t_menu` VALUES (4, '库存管理', NULL, '0', NULL, NULL, NULL, '0', 'inventory_management', 'iconfont icon-a-Saleswarehousemanagement', NULL);
INSERT INTO `t_menu` VALUES (5, '会员管理', NULL, '0', NULL, NULL, NULL, '0', 'member_management', 'iconfont icon-huiyuanguanli', NULL);
INSERT INTO `t_menu` VALUES (6, '系统管理', NULL, '0', NULL, NULL, NULL, '0', 'system', 'iconfont icon-xitongguanli', NULL);
INSERT INTO `t_menu` VALUES (7, '密码修改', '/personal/edit_pwd', '1', 3, '个人中心', NULL, '0', 'personal:edit_pwd', 'iconfont icon-mima', 'views/personal/Edit_pwd');
INSERT INTO `t_menu` VALUES (8, '角色管理', '/system/role/list', '1', 6, '系统管理', NULL, '0', 'system:role:list', 'iconfont icon-yidongyunkongzhitaiicon45', 'views/system/role/List');
INSERT INTO `t_menu` VALUES (9, '创建角色', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (10, '修改角色', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:edit_role', NULL, NULL);
INSERT INTO `t_menu` VALUES (11, '停用角色', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:forbiddenRole', NULL, NULL);
INSERT INTO `t_menu` VALUES (12, '角色授权', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:saveRolePermissons', NULL, NULL);
INSERT INTO `t_menu` VALUES (14, '菜单管理', '/system/menu/list', '1', 6, '系统管理', NULL, '0', 'system:menu:list', 'iconfont icon-dangjian_caidanguanli', 'views/system/menu/List');
INSERT INTO `t_menu` VALUES (15, '仓库管理', '/inventory_management/store/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:store:list', 'iconfont icon-cangku_kucun_o\r\n', 'views/inventory_management/store/List');
INSERT INTO `t_menu` VALUES (16, '新创仓库', '', '2', 15, '仓库管理', NULL, '0', 'inventory_management:store:save', NULL, '');
INSERT INTO `t_menu` VALUES (17, '修改仓库', '', '2', 15, '仓库管理', NULL, '0', 'inventory_management:store:update', NULL, '');
INSERT INTO `t_menu` VALUES (18, '停用仓库', '', '2', 15, '仓库管理', NULL, '0', 'inventory_management:store:deactivate', NULL, '');
INSERT INTO `t_menu` VALUES (19, '商品管理', NULL, '0', NULL, NULL, NULL, '0', 'goods_management:goods_category', 'iconfont icon-shangpinguanli\r\n', NULL);
INSERT INTO `t_menu` VALUES (20, '分类管理', '/goods_management/goods_category/list', '1', 19, '商品管理', NULL, '0', 'goods_management:goods_category:list', 'iconfont icon-fenleiguanli', 'views/goods_management/goods_category/List');
INSERT INTO `t_menu` VALUES (21, '创建商品分类', '', '2', 20, '商品分类管理', NULL, '0', 'goods_management:goods_category:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (22, '修改商品分类', '', '2', 20, '商品分类管理', NULL, '0', 'goods_management:goods_category:update', NULL, NULL);
INSERT INTO `t_menu` VALUES (23, '停用商品分类', '', '2', 20, '商品分类管理', NULL, '0', 'goods_management:goods_category:deactivate', NULL, NULL);
INSERT INTO `t_menu` VALUES (24, '部门管理', '/personnel_management/dept/list', '1', 2, '人事管理', NULL, '0', 'personnel_management:dept:list', 'iconfont icon-bumenguanli', 'views/personnel_management/dept/List');
INSERT INTO `t_menu` VALUES (25, '创建部门', NULL, '2', 24, '部门管理', NULL, '0', 'personnel_management:dept:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (26, '修改部门', NULL, '2', 24, '部门管理', NULL, '0', 'personnel_management:dept:update', NULL, NULL);
INSERT INTO `t_menu` VALUES (27, '停用部门', NULL, '2', 24, '部门管理', NULL, '0', 'personnel_management:dept:deactivate', NULL, NULL);
INSERT INTO `t_menu` VALUES (28, '员工管理', '/personnel_management/employee/list', '1', 2, '人事管理', NULL, '0', 'personnel_management:employee:list', 'iconfont icon-yuangongguanli', 'views/personnel_management/employee/List');
INSERT INTO `t_menu` VALUES (29, '商品信息', '/goods_management/goods/list', '1', 19, '商品管理', NULL, '0', 'goods_management:goods:list', 'iconfont icon-shangpinxinxi', 'views/goods_management/goods/List');
INSERT INTO `t_menu` VALUES (31, '会员信息', '/member_management/member/list', '1', 5, '会员管理', NULL, '0', 'member_management:member:list', 'iconfont icon-huiyuanqia', 'views/member_management/member/List');
INSERT INTO `t_menu` VALUES (32, '个人资料', '/personal/information', '1', 3, '个人中心', NULL, '0', 'personnel_management:employee:update', 'iconfont icon-gerenxinxi_o\r\n', 'views/personal/Information');
INSERT INTO `t_menu` VALUES (33, '出库明细', '/inventory_management/detail_store_goods_out/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:detail_store_goods_out:list', 'iconfont icon-chuku', 'views/inventory_management/detail_store_goods_out/List');
INSERT INTO `t_menu` VALUES (34, '入库明细', '/inventory_management/detail_store_goods_in/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:detail_store_goods_in:list', 'iconfont icon-ruku', 'views/inventory_management/detail_store_goods_in/List');
INSERT INTO `t_menu` VALUES (35, '销售主页', '/sale_management/sale_cmd/list', '1', 1, '销售管理', NULL, '0', 'sale_management:sale_cmd:list', 'iconfont icon-zhuye', 'views/sale_management/sale_cmd/List');
INSERT INTO `t_menu` VALUES (36, '销售记录', '/sale_management/sale_records/list', '1', 1, '销售管理', NULL, '0', 'sale_management:sale_records:list', 'iconfont icon-xiaoshoufenxi', 'views/sale_management/sale_records/List');
INSERT INTO `t_menu` VALUES (37, '供货商信息', '/inventory_management/supplier/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:supplier:list', 'iconfont icon-gonghuo-gonghuoguanli', 'views/inventory_management/supplier/List');
INSERT INTO `t_menu` VALUES (41, '积分商品', '/goods_management/point_products/list', '1', 19, '商品管理', NULL, '0', 'goods_management:point_products:list', 'iconfont icon-jifenshangpin', 'views/goods_management/point_products/List');
INSERT INTO `t_menu` VALUES (42, '统计分析', '/goods_management/statistic_sale/list', '1', 19, '商品管理', NULL, '0', 'goods_management:statistic_sale:list', 'iconfont icon-xiaoshoutongji', 'views/goods_management/statistic_sale/List');
INSERT INTO `t_menu` VALUES (43, '库存统计', '/inventory_management/store/storage_situation', '1', 4, '库存管理', NULL, '0', 'inventory_management:store:storage_situation', 'iconfont icon-kucuntongji', 'views/inventory_management/store/StorageSituation');
INSERT INTO `t_menu` VALUES (44, '积分兑换记录', '/sale_management/exchange_point_products_records/list', '1', 1, '销售管理', NULL, '0', 'sale_management:exchange_point_products_records:list', 'iconfont icon-xiaoshouzhengce', 'views/sale_management/exchange_point_products_records/List');
INSERT INTO `t_menu` VALUES (45, '员工创建', NULL, '2', 28, '员工管理', NULL, '0', 'personnel_management:employee:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (46, '员工修改', NULL, '2', 28, '员工管理', NULL, '0', 'personnel_management:employee:update', NULL, NULL);
INSERT INTO `t_menu` VALUES (47, '员工分配职务', NULL, '2', 28, '员工管理', NULL, '0', 'personnel_management:employee:queryRoleIdsByEid', NULL, NULL);
INSERT INTO `t_menu` VALUES (48, '重置员工密码', NULL, '2', 28, '员工管理', NULL, '0', 'personnel_management:employee:resetPwd', NULL, NULL);
INSERT INTO `t_menu` VALUES (49, '商品入库', NULL, '2', 34, '入库明细', NULL, '0', 'inventory_management:detail_store_goods_in:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (50, '入库记录删除', NULL, '2', 34, '入库明细', NULL, '0', 'inventory_management:detail_store_goods_in:delIn', NULL, NULL);
INSERT INTO `t_menu` VALUES (51, '商品出库', NULL, '2', 33, '出库明细', NULL, '0', 'inventory_management:detail_store_goods_out:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (52, '出库记录删除', NULL, '2', 33, '出库明细', NULL, '0', 'inventory_management:detail_store_goods_out:delOut', NULL, NULL);
INSERT INTO `t_menu` VALUES (53, '创建', NULL, '2', 37, '供货商信息', NULL, '0', 'inventory_management:supplier:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (54, '修改', NULL, '2', 37, '供货商信息', NULL, '0', 'inventory_management:supplier:update', NULL, NULL);
INSERT INTO `t_menu` VALUES (55, '删除', NULL, '2', 37, '供货商信息', NULL, '0', 'inventory_management:supplier:deactivate', NULL, NULL);
INSERT INTO `t_menu` VALUES (56, '商品上架处理', NULL, '2', 40, '出库通知', NULL, '0', 'inventory_management:detail_store_goods_out:notice:saveOut_shelves', NULL, NULL);
INSERT INTO `t_menu` VALUES (57, '商品过期/下架处理', NULL, '2', 40, '出库通知', NULL, '0', 'inventory_management:detail_store_goods_out:notice:resolveOutUntreatedForm', NULL, NULL);
INSERT INTO `t_menu` VALUES (58, '创建', NULL, '2', 31, '会员信息管理', NULL, '0', 'member_management:member:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (59, '兑换商品', NULL, '2', 31, '会员信息管理', NULL, '0', 'sale_management:exchange_point_products_records:saveExchangePointProductRecords', NULL, NULL);
INSERT INTO `t_menu` VALUES (60, '修改', NULL, '2', 31, '会员信息管理', NULL, '0', 'member_management:member:update', NULL, NULL);
INSERT INTO `t_menu` VALUES (61, '删除', NULL, '2', 31, '会员信息管理', NULL, '0', 'member_management:member:delMember', NULL, NULL);

-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '角色名',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '描述',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '状态： 正常 0  停用: -1',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES (1, '系统管理员', '系统拥有者', '0');
INSERT INTO `t_role` VALUES (2, '超级系统拥有者', '超级系统拥有者', '0');
INSERT INTO `t_role` VALUES (3, '收银员', '负责销售收钱', '0');
INSERT INTO `t_role` VALUES (4, '仓库管理员', '负责管理库存', '-1');
INSERT INTO `t_role` VALUES (5, '商品管理员', '负责商品货架的商品数量、通知仓库管理员入库和出库', '0');
INSERT INTO `t_role` VALUES (6, '人事主管', '负责管理部门信息和员工信息', '0');
INSERT INTO `t_role` VALUES (7, '员工', '超市工作人员', '0');

-- ----------------------------
-- Table structure for t_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_role_menu`;
CREATE TABLE `t_role_menu`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `rid` bigint NOT NULL COMMENT '角色id',
  `mid` bigint NOT NULL COMMENT '菜单id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 210 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_role_menu
-- ----------------------------
INSERT INTO `t_role_menu` VALUES (64, 4, 32);
INSERT INTO `t_role_menu` VALUES (65, 4, 33);
INSERT INTO `t_role_menu` VALUES (66, 4, 34);
INSERT INTO `t_role_menu` VALUES (67, 4, 3);
INSERT INTO `t_role_menu` VALUES (68, 4, 4);
INSERT INTO `t_role_menu` VALUES (69, 4, 37);
INSERT INTO `t_role_menu` VALUES (70, 4, 7);
INSERT INTO `t_role_menu` VALUES (73, 4, 43);
INSERT INTO `t_role_menu` VALUES (74, 4, 15);
INSERT INTO `t_role_menu` VALUES (75, 4, 16);
INSERT INTO `t_role_menu` VALUES (76, 4, 17);
INSERT INTO `t_role_menu` VALUES (77, 4, 49);
INSERT INTO `t_role_menu` VALUES (78, 4, 18);
INSERT INTO `t_role_menu` VALUES (79, 4, 50);
INSERT INTO `t_role_menu` VALUES (80, 4, 51);
INSERT INTO `t_role_menu` VALUES (81, 4, 52);
INSERT INTO `t_role_menu` VALUES (82, 4, 53);
INSERT INTO `t_role_menu` VALUES (83, 4, 54);
INSERT INTO `t_role_menu` VALUES (84, 4, 55);
INSERT INTO `t_role_menu` VALUES (85, 4, 56);
INSERT INTO `t_role_menu` VALUES (86, 4, 57);
INSERT INTO `t_role_menu` VALUES (109, 7, 32);
INSERT INTO `t_role_menu` VALUES (110, 7, 3);
INSERT INTO `t_role_menu` VALUES (111, 7, 7);
INSERT INTO `t_role_menu` VALUES (134, 5, 32);
INSERT INTO `t_role_menu` VALUES (135, 5, 3);
INSERT INTO `t_role_menu` VALUES (136, 5, 19);
INSERT INTO `t_role_menu` VALUES (137, 5, 20);
INSERT INTO `t_role_menu` VALUES (138, 5, 21);
INSERT INTO `t_role_menu` VALUES (139, 5, 22);
INSERT INTO `t_role_menu` VALUES (140, 5, 7);
INSERT INTO `t_role_menu` VALUES (141, 5, 23);
INSERT INTO `t_role_menu` VALUES (142, 5, 41);
INSERT INTO `t_role_menu` VALUES (143, 5, 42);
INSERT INTO `t_role_menu` VALUES (144, 5, 29);
INSERT INTO `t_role_menu` VALUES (145, 6, 32);
INSERT INTO `t_role_menu` VALUES (146, 6, 2);
INSERT INTO `t_role_menu` VALUES (147, 6, 3);
INSERT INTO `t_role_menu` VALUES (148, 6, 7);
INSERT INTO `t_role_menu` VALUES (149, 6, 45);
INSERT INTO `t_role_menu` VALUES (150, 6, 46);
INSERT INTO `t_role_menu` VALUES (151, 6, 47);
INSERT INTO `t_role_menu` VALUES (152, 6, 48);
INSERT INTO `t_role_menu` VALUES (153, 6, 24);
INSERT INTO `t_role_menu` VALUES (154, 6, 25);
INSERT INTO `t_role_menu` VALUES (155, 6, 26);
INSERT INTO `t_role_menu` VALUES (156, 6, 27);
INSERT INTO `t_role_menu` VALUES (157, 6, 28);
INSERT INTO `t_role_menu` VALUES (197, 3, 32);
INSERT INTO `t_role_menu` VALUES (198, 3, 1);
INSERT INTO `t_role_menu` VALUES (199, 3, 3);
INSERT INTO `t_role_menu` VALUES (200, 3, 35);
INSERT INTO `t_role_menu` VALUES (201, 3, 36);
INSERT INTO `t_role_menu` VALUES (202, 3, 5);
INSERT INTO `t_role_menu` VALUES (203, 3, 7);
INSERT INTO `t_role_menu` VALUES (204, 3, 44);
INSERT INTO `t_role_menu` VALUES (205, 3, 58);
INSERT INTO `t_role_menu` VALUES (206, 3, 59);
INSERT INTO `t_role_menu` VALUES (207, 3, 60);
INSERT INTO `t_role_menu` VALUES (208, 3, 61);
INSERT INTO `t_role_menu` VALUES (209, 3, 31);

-- ----------------------------
-- Table structure for t_sale_records
-- ----------------------------
DROP TABLE IF EXISTS `t_sale_records`;
CREATE TABLE `t_sale_records`  (
  `cn` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '订单号',
  `eid` bigint NOT NULL COMMENT '操作者编号',
  `sellway` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '支付方式（0：支付宝，1：微信，2：现金，3：银行卡）',
  `sell_time` datetime NOT NULL COMMENT '支付时间',
  `state` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '0:正常 1：删除',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '备注',
  `sellby` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '买家',
  `sell_total` bigint NOT NULL COMMENT '销售总数量',
  `sell_totalmoney` double NOT NULL COMMENT '销售总金额',
  `type` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '0:非会员消费 1：会员消费',
  `member_phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '顾客会员号码',
  PRIMARY KEY (`cn`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_sale_records
-- ----------------------------
INSERT INTO `t_sale_records` VALUES ('1701213155180429314', 15, '0', '2023-09-11 12:37:16', '0', '', '李四', 1, 120, '0', '456');
INSERT INTO `t_sale_records` VALUES ('1701220094014722049', 1, '1', '2023-09-11 13:04:45', '0', '', '张三', 1, 315, '1', '123');
INSERT INTO `t_sale_records` VALUES ('1833124331315408897', 1, '0', '2024-09-09 12:46:02', '0', '第一次shopping', 'Oh...Yeah！！！', 1, 45, '1', '123');
INSERT INTO `t_sale_records` VALUES ('1835881697266003969', 1, '3', '2024-09-17 03:22:03', '0', '短袖进货', 'Oh...Yeah！！！', 50, 2000, '0', NULL);

SET FOREIGN_KEY_CHECKS = 1;
