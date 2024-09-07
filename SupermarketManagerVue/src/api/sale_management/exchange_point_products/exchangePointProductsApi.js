/*
 * @Author: Oh...Yeah!!! 614988210@qq.com
 * @Date: 2024-09-02 21:47:56
 * @LastEditors: Oh...Yeah!!! 614988210@qq.com
 * @LastEditTime: 2024-09-07 17:12:06
 * @FilePath: \SupermarketManagerVue\src\api\sale_management\exchange_point_products\exchangePointProductsApi.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/sale_management/exchange_point_products_records'

export function queryPointProductBymemberId(data) {
    return ajaxGet(apiPrefix + "/queryPointProductBymemberId", data)
}

export function queryMemberByGoodsId(data) {
    return ajaxGet(apiPrefix + "/queryMemberByGoodsId", data)
}
export function queryPointProductByGoodsId(data) {
    return ajaxGet(apiPrefix + "/queryPointProductByGoodsId", data)
}

export function saveExchangePointProductRecords(data) {
    return ajaxPost(apiPrefix + "/saveExchangePointProductRecords", data)
}


export function queryOptionsMemberPhone() {
    return ajaxGet(apiPrefix + "/queryOptionsMemberPhone", {})
}

export function queryPageByQoExchangePointProducts(data) {
    return ajaxPost(apiPrefix + "/queryPageByQoExchangePointProducts", data)
}


export function delExchangePointProducts(data) {
    return ajaxGet(apiPrefix + "/delExchangePointProducts", data)
}


export function queryOptionsPointProducts() {
    return ajaxGet(apiPrefix + "/queryOptionsPointProducts", {})
}
export function queryOptionsMember() {
    return ajaxGet(apiPrefix + "/queryOptionsMember", {})
}

