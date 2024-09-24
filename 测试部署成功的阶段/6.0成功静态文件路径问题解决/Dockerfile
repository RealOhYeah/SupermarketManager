# 基础镜像---这里用的是Ubuntu系统和jdk1.8
FROM openjdk:11.0-jre-buster
# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 拷贝jar包
COPY SupermarketManagerApi-1.0.0.jar /SupermarketManagerApi-1.0.0.jar

COPY supermarket/classes/static/files supermarket/classes/static/files 

# 入口
ENTRYPOINT ["java", "-jar", "/SupermarketManagerApi-1.0.0.jar"]
 