package com.rabbiter.market.common.config;

import com.rabbiter.market.common.sercurity.interceptor.EmpLoginInterceptor;
import com.rabbiter.market.common.util.PathUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 解决：1.跨域问题
 */
@Configuration
public class BaseWebConfig implements WebMvcConfigurer{
    @Bean
    public EmpLoginInterceptor empLoginInterceptor(){
        return new EmpLoginInterceptor();
    }

    /**
     * 拦截器可能没使用的原因：因为拦截器配置好之后，会导致配置全局Cors失效
     * @param registry
     */
    //注册拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(empLoginInterceptor())
//                .addPathPatterns("/**")
//                .excludePathPatterns("/","/login")
//                .excludePathPatterns("/files/**")
//                .excludePathPatterns("/static/**");
    }

    //跨域访问配置
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            //重写父类提供的跨域请求处理的接口
            public void addCorsMappings(CorsRegistry registry) {
                //添加映射路径
                registry.addMapping("/**")
                        //放行哪些原始域
                        .allowedOrigins("*")
                        //是否发送Cookie信息
                        .allowCredentials(true)
                        //放行哪些原始域(请求方式)
                        .allowedMethods("GET", "POST", "PUT", "DELETE","OPTIONS")
                        //放行哪些原始域(头部信息)
                        .allowedHeaders("*")
                        //暴露哪些头部信息（因为跨域访问默认不能获取全部头部信息）
                        .exposedHeaders("Header1", "Header2");
            }
        };
    }



    /**
     * 静态资源映射
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //开发过程的路径
//        String winPath = PathUtils.getClassLoadRootPath() + "/src/main/resources/static/files/";

        //在部署项目的路径是：classes/static/files/
//        String winPath = PathUtils.getClassLoadRootPath() + "classes/static/files/";


        //在dockerCompose部署项目的路径是：supermarket/classes/static/files/
        String winPath = PathUtils.getClassLoadRootPath() + "supermarket/classes/static/files/";



        //绝对路径，在部署项目时，需要修改
//        String winPath = PathUtils.getClassLoadRootPath() + "/opt/test/classes/static/files/";

        //正常测试部署项目的路径
//        String winPath = PathUtils.getClassLoadRootPath() + "/classes/static/files/";


        //第一个方法设置访问路径前缀，第二个方法设置资源路径
        registry.addResourceHandler("/files/**")
                .addResourceLocations("file:" + winPath);

        System.out.println("???");
        System.out.println("file:" + winPath);

        WebMvcConfigurer.super.addResourceHandlers(registry);
    }
}
