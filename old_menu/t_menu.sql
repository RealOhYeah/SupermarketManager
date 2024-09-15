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

 Date: 09/09/2024 14:08:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_menu`;
CREATE TABLE `t_menu`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '名称',
  `purl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '地址',
  `type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '类型 0:目录 1 菜单 2 按钮 -1禁用',
  `parent_id` bigint NULL DEFAULT NULL COMMENT '父id',
  `parent_label` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '父名称',
  `info` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '描述',
  `state` varchar(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '状态',
  `flag` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL COMMENT '权限的唯一标识',
  `icon` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '图标',
  `component` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NULL DEFAULT NULL COMMENT '组件路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 63 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_bin ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of t_menu
-- ----------------------------
INSERT INTO `t_menu` VALUES (1, '销售管理', NULL, '0', NULL, NULL, NULL, '0', 'sale_management', 'iconfont icon-r-shield', NULL);
INSERT INTO `t_menu` VALUES (2, '人事管理', NULL, '0', NULL, NULL, NULL, '0', 'personnel_management', 'iconfont icon-r-team', NULL);
INSERT INTO `t_menu` VALUES (3, '个人中心', NULL, '0', NULL, NULL, NULL, '0', 'personal', 'iconfont icon-r-user2', NULL);
INSERT INTO `t_menu` VALUES (4, '库存管理', NULL, '0', NULL, NULL, NULL, '0', 'inventory_management', 'iconfont icon-r-building', NULL);
INSERT INTO `t_menu` VALUES (5, '会员管理', NULL, '0', NULL, NULL, NULL, '0', 'member_management', 'iconfont icon-r-mark1', NULL);
INSERT INTO `t_menu` VALUES (6, '系统管理', NULL, '0', NULL, NULL, NULL, '0', 'system', 'iconfont icon-r-setting', NULL);
INSERT INTO `t_menu` VALUES (7, '密码修改', '/personal/edit_pwd', '1', 3, '个人中心', NULL, '0', 'personal:edit_pwd', 'iconfont icon-r-lock', 'views/personal/Edit_pwd');
INSERT INTO `t_menu` VALUES (8, '角色管理', '/system/role/list', '1', 6, '系统管理', NULL, '0', 'system:role:list', 'iconfont icon-r-user3', 'views/system/role/List');
INSERT INTO `t_menu` VALUES (9, '创建角色', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (10, '修改角色', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:edit_role', NULL, NULL);
INSERT INTO `t_menu` VALUES (11, '停用角色', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:forbiddenRole', NULL, NULL);
INSERT INTO `t_menu` VALUES (12, '角色授权', NULL, '2', 8, '角色管理', NULL, '0', 'system:role:saveRolePermissons', NULL, NULL);
INSERT INTO `t_menu` VALUES (14, '菜单管理', '/system/menu/list', '1', 6, '系统管理', NULL, '0', 'system:menu:list', 'iconfont icon-r-list', 'views/system/menu/List');
INSERT INTO `t_menu` VALUES (15, '仓库管理', '/inventory_management/store/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:store:list', 'iconfont icon-r-building', 'views/inventory_management/store/List');
INSERT INTO `t_menu` VALUES (16, '新创仓库', '', '2', 15, '仓库管理', NULL, '0', 'inventory_management:store:save', NULL, '');
INSERT INTO `t_menu` VALUES (17, '修改仓库', '', '2', 15, '仓库管理', NULL, '0', 'inventory_management:store:update', NULL, '');
INSERT INTO `t_menu` VALUES (18, '停用仓库', '', '2', 15, '仓库管理', NULL, '0', 'inventory_management:store:deactivate', NULL, '');
INSERT INTO `t_menu` VALUES (19, '商品管理', NULL, '0', NULL, NULL, NULL, '0', 'goods_management:goods_category', 'iconfont icon-r-mark2', NULL);
INSERT INTO `t_menu` VALUES (20, '分类管理', '/goods_management/goods_category/list', '1', 19, '商品管理', NULL, '0', 'goods_management:goods_category:list', 'iconfont icon-r-list', 'views/goods_management/goods_category/List');
INSERT INTO `t_menu` VALUES (21, '创建商品分类', '', '2', 20, '商品分类管理', NULL, '0', 'goods_management:goods_category:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (22, '修改商品分类', '', '2', 20, '商品分类管理', NULL, '0', 'goods_management:goods_category:update', NULL, NULL);
INSERT INTO `t_menu` VALUES (23, '停用商品分类', '', '2', 20, '商品分类管理', NULL, '0', 'goods_management:goods_category:deactivate', NULL, NULL);
INSERT INTO `t_menu` VALUES (24, '部门管理', '/personnel_management/dept/list', '1', 2, '人事管理', NULL, '0', 'personnel_management:dept:list', 'iconfont icon-r-team', 'views/personnel_management/dept/List');
INSERT INTO `t_menu` VALUES (25, '创建部门', NULL, '2', 24, '部门管理', NULL, '0', 'personnel_management:dept:save', NULL, NULL);
INSERT INTO `t_menu` VALUES (26, '修改部门', NULL, '2', 24, '部门管理', NULL, '0', 'personnel_management:dept:update', NULL, NULL);
INSERT INTO `t_menu` VALUES (27, '停用部门', NULL, '2', 24, '部门管理', NULL, '0', 'personnel_management:dept:deactivate', NULL, NULL);
INSERT INTO `t_menu` VALUES (28, '员工管理', '/personnel_management/employee/list', '1', 2, '人事管理', NULL, '0', 'personnel_management:employee:list', 'iconfont icon-r-user2', 'views/personnel_management/employee/List');
INSERT INTO `t_menu` VALUES (29, '商品信息', '/goods_management/goods/list', '1', 19, '商品管理', NULL, '0', 'goods_management:goods:list', 'iconfont icon-r-shield', 'views/goods_management/goods/List');
INSERT INTO `t_menu` VALUES (31, '会员信息', '/member_management/member/list', '1', 5, '会员管理', NULL, '0', 'member_management:member:list', 'iconfont icon-r-mark1', 'views/member_management/member/List');
INSERT INTO `t_menu` VALUES (32, '个人资料', '/personal/information', '1', 3, '个人中心', NULL, '0', 'personnel_management:employee:update', 'iconfont icon-r-paper', 'views/personal/Information');
INSERT INTO `t_menu` VALUES (33, '出库明细', '/inventory_management/detail_store_goods_out/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:detail_store_goods_out:list', 'iconfont icon-r-left', 'views/inventory_management/detail_store_goods_out/List');
INSERT INTO `t_menu` VALUES (34, '入库明细', '/inventory_management/detail_store_goods_in/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:detail_store_goods_in:list', 'iconfont icon-r-right', 'views/inventory_management/detail_store_goods_in/List');
INSERT INTO `t_menu` VALUES (35, '销售主页', '/sale_management/sale_cmd/list', '1', 1, '销售管理', NULL, '0', 'sale_management:sale_cmd:list', 'iconfont icon-r-home', 'views/sale_management/sale_cmd/List');
INSERT INTO `t_menu` VALUES (36, '销售记录', '/sale_management/sale_records/list', '1', 1, '销售管理', NULL, '0', 'sale_management:sale_records:list', 'iconfont icon-r-paper', 'views/sale_management/sale_records/List');
INSERT INTO `t_menu` VALUES (37, '供货商信息', '/inventory_management/supplier/list', '1', 4, '库存管理', NULL, '0', 'inventory_management:supplier:list', 'iconfont icon-r-mark3', 'views/inventory_management/supplier/List');
INSERT INTO `t_menu` VALUES (41, '积分商品', '/goods_management/point_products/list', '1', 19, '商品管理', NULL, '0', 'goods_management:point_products:list', 'iconfont icon-r-mark1', 'views/goods_management/point_products/List');
INSERT INTO `t_menu` VALUES (42, '销售统计', '/goods_management/statistic_sale/list', '1', 19, '商品管理', NULL, '0', 'goods_management:statistic_sale:list', 'iconfont icon-r-add', 'views/goods_management/statistic_sale/List');
INSERT INTO `t_menu` VALUES (43, '库存统计', '/inventory_management/store/storage_situation', '1', 4, '库存管理', NULL, '0', 'inventory_management:store:storage_situation', 'iconfont icon-r-add', 'views/inventory_management/store/StorageSituation');
INSERT INTO `t_menu` VALUES (44, '积分兑换记录', '/sale_management/exchange_point_products_records/list', '1', 1, '销售管理', NULL, '0', 'sale_management:exchange_point_products_records:list', 'iconfont icon-r-paper', 'views//sale_management/exchange_point_products_records/List');
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

SET FOREIGN_KEY_CHECKS = 1;
