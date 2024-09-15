package com.rabbiter.market.common.sercurity.interceptor;


import com.rabbiter.market.common.constants.HttpStatus;
import com.rabbiter.market.common.redis.constants.RedisKeys;
import com.rabbiter.market.common.redis.service.RedisTemplateService;
import com.rabbiter.market.common.sercurity.annotation.HasPermisson;
import com.rabbiter.market.common.sercurity.annotation.NoRequireLogin;
import com.rabbiter.market.common.web.response.JsonResult;
import com.rabbiter.market.domain.personnel_management.employee.Employee;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class EmpLoginInterceptor implements HandlerInterceptor {
    @Autowired
    private RedisTemplateService redisTemplateService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (!(handler instanceof HandlerMethod)) {
            //optinos请求
            return true;
        }

        //允许跨域
        response.setHeader("Access-Control-Allow-Origin", "*");
        //请求或响应消息不能缓存(有助于用户获取最新数据)
        response.setHeader("Cache-Control", "no-cache");
        response.setCharacterEncoding("UTF-8");
        //设置返回类型(响应体中的数据是JSON格式的)
        response.setContentType("application/json");

        //获取token
        String token = request.getHeader("token");

        /**
         * 也就是说，根据请求，可以通过handler的反射获取到特定Controller类中某个方法上的注解，
         * 如果存在该注解，则不进行拦截，如果不存在该注解，则进行拦截
         */
        //是否贴有不必登录的注解
        HandlerMethod handler1 = (HandlerMethod) handler;
        NoRequireLogin noRequireLogin = handler1.getMethodAnnotation(NoRequireLogin.class);

        if (noRequireLogin != null) {
            //贴有注解
            return true;

        } else {
            if (StringUtils.hasText(token)) {
                String value2 = redisTemplateService.getCacheObject(token);
                if (!StringUtils.hasText(value2)) {
                    JsonResult res = JsonResult.error(HttpStatus.CODE_BUSINESS_ERROR, "请先登录");
                    String result = JSONObject.toJSONString(res);
                    response.getWriter().println(result);
                    response.getWriter().flush();
                    return false;
                } else {
                    //缓存有值,延长存储时间
                    redisTemplateService.expire(token, RedisKeys.LOGIN_USER.getTimeout(), RedisKeys.LOGIN_USER.getTimeUnit());
                }

            } else {
                //没有token
                JsonResult res = JsonResult.error(HttpStatus.CODE_BUSINESS_ERROR, "请先登录");
                String result = JSONObject.toJSONString(res);
                response.getWriter().println(result);
                response.getWriter().flush();
                return false;
            }

        }
        //是否贴有HasPermisson注解
        HasPermisson hasPermisson = handler1.getMethodAnnotation(HasPermisson.class);
        if (hasPermisson != null) {
            if (!StringUtils.hasText(token)) {
                //没有token
                JsonResult res = JsonResult.error(HttpStatus.CODE_BUSINESS_ERROR, "请先登录");
                String result = JSONObject.toJSONString(res);

                /**
                 * 这两行代码首先通过response.getWriter()获取一个PrintWriter对象，
                 * 该对象允许我们向HTTP响应中写入内容。
                 * 然后，使用println方法将之前生成的JSON字符串result写入响应体。
                 * flush方法确保所有缓冲的输出都被发送到客户端。这样，客户端就能接收到一个包含错误信息的JSON响应。
                 * 最后，我们调用flush方法确保所有缓冲的输出都被发送到客户端。
                 * 这样，客户端就能接收到一个包含错误信息的JSON响应。
                 */
                response.getWriter().println(result);
                response.getWriter().flush();

                return false;

            }

            Employee employee = JSONObject.parseObject(redisTemplateService.getCacheObject(token), Employee.class);
            //判断是否是系统管理员
            if (employee.getIsAdmin()) {
                return true;
            }

            String value = hasPermisson.value();
            // 此处从token中判断是否有该权限来进行操作（t_menu中的flag字段）
            boolean contains = employee.getFlags().contains(value);
            if (!contains) {
                JsonResult res = JsonResult.error(HttpStatus.CODE_BUSINESS_ERROR, "您没有权限操作");
                String result = JSONObject.toJSONString(res);
                response.getWriter().println(result);
                response.getWriter().flush();
                return false;
            }
        }

        return true;
    }

}
