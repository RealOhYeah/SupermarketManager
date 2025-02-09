package com.rabbiter.market.controller.sale_management.sale_record;

import com.rabbiter.market.common.sercurity.annotation.HasPermisson;
import com.rabbiter.market.common.snowflake.SnowFlake;
import com.rabbiter.market.common.web.response.JsonResult;
import com.rabbiter.market.domain.sale_management.sale_records.SaleRecords;
import com.rabbiter.market.qo.sale_records.QuerySaleRecords;
import com.rabbiter.market.service.sale_management.sale_records.ISaleRecordsService;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@RestController
@Validated
@RequestMapping("/sale_management/sale_record")
public class SaleRecordController {

    @Autowired
    private ISaleRecordsService saleRecordsService;

    /**
     * 获取订单销售的id
     * @return
     */
    @GetMapping("/getCn")
    public JsonResult getCn(){

        //下方是通过Mybatis-plus的IdWorker生成订单id
        return JsonResult.success(IdWorker.getIdStr());

        /*
        *
            {
              "code": 200,
              "msg": "操作成功",
              "data": "1836675535584833537"
            }
        * */


        //这里是通过自己实现的雪花算法生成的订单id
//        SnowFlake idWorker = new SnowFlake(0, 0);
//        long id = idWorker.nextId();
//        return JsonResult.success(id);

        /*
        *
        {
          "code": 200,
          "msg": "操作成功",
          "data": 822606703009726464
         }
        */


    }

    /**
     * 查询有存货的商品
     * @return
     */
    @GetMapping("/getOptionSaleRecordsGoods")
    public JsonResult getOptionSaleRecordsGoods(){
        List<Map<String,Object>> list=saleRecordsService.getOptionSaleRecordsGoods();
        return JsonResult.success(list);
    }

    /**
     * 保存销售订单记录
     * @param saleRecords
     * @param request
     * @return
     */
    @PostMapping("/saveSaleRecords")
    public JsonResult saveSaleRecords(@RequestBody SaleRecords saleRecords, HttpServletRequest request){
        saleRecords=saleRecordsService.saveSaleRecords(saleRecords,(String) request.getHeader("token"));
        return JsonResult.success(saleRecords);
    }

    /**
     * 分页查询销售订单记录
     * @param qo
     * @return
     */
    @HasPermisson("sale_management:sale_records:list")
    @PostMapping("/queryPageByQoSaleRecords")
    public JsonResult queryPageByQoSaleRecords(QuerySaleRecords qo){
        Page<SaleRecords> page=saleRecordsService.queryPageByQoSaleRecords(qo);
        return JsonResult.success(page);
    }

    /**
     * 删除销售订单记录
     * @param cn
     * @return
     */
    @GetMapping("/delSaleRecords")
    public JsonResult delSaleRecords(String cn){
        saleRecordsService.delSaleRecords(cn);
        return JsonResult.success();
    }
}


