package com.rabbiter.market.common.util;

import com.rabbiter.market.common.exception.BusinessException;
import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileItemFactory;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Random;
import java.util.UUID;

public class PathUtils {

//    @Value("${filePath}")
    private static final String filePath = "/src/main/resources/static/files/";


    public static void main(String[] args) throws UnsupportedEncodingException {

        //sun.misc.Launcher$AppClassLoader@14dad5dc
//        System.out.println(PathUtils.class.getClassLoader());
//
//        System.out.println("!!!!!");
//        System.out.println(PathUtils.class.getClassLoader().getResource(""));
//        System.out.println(URLDecoder.decode(PathUtils.class.getClassLoader().getResource("").toString()));
//
//
//        System.out.println("%%%%%%%");
//        System.out.println(PathUtils.class.getClassLoader().getResource("").getPath());
//        System.out.println(URLDecoder.decode(PathUtils.class.getClassLoader().getResource("").getPath()));
//
//        System.out.println("@@@@@");
//        String prePath = URLDecoder.decode(PathUtils.class.getClassLoader().getResource("").getPath(),"utf-8").replace("/target/classes", "");
//        System.out.println(prePath);


//        System.out.println(filePath);


    }

    /**
     * 最开始的处理方式
     * @return
     */
/*
    public static String getClassLoadRootPath() {
        String path = "";
        try {
            String prePath = URLDecoder.decode(PathUtils.class.getClassLoader().getResource("").getPath(),"utf-8").replace("/target/classes", "");
            String osName = System.getProperty("os.name");
            if (osName.toLowerCase().startsWith("mac")) {
                // 苹果
                path = prePath.substring(0, prePath.length() - 1);
            } else if (osName.toLowerCase().startsWith("windows")) {
                // windows
                path = prePath.substring(1, prePath.length() - 1);
            } else if(osName.toLowerCase().startsWith("linux") || osName.toLowerCase().startsWith("unix")) {
                // unix or linux
                path = prePath.substring(0, prePath.length() - 1);
            } else {
                path = prePath.substring(1, prePath.length() - 1);
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return path;
    }
*/

    /**
     * 改进之后的路径获取方式
     * @return
     */
    public static String getClassLoadRootPath() {
        String path = null; // 初始化为null，以便在无法获取路径时返回null
        try {
            // 获取类加载器的根资源路径的URL(绝对路径)
            URL resourceUrl = PathUtils.class.getClassLoader().getResource("");
            if (resourceUrl == null) {
                // 如果无法获取资源URL，则直接返回null
                throw new BusinessException("无法获取资源URL");
//                return null;
            }

            // 提取路径部分并解码
            String decodedPath = URLDecoder.decode(resourceUrl.getPath(), "UTF-8");

            // 移除可能的协议头（如"file:"）
            String filePath = decodedPath.startsWith("file:") ? decodedPath.substring(5) : decodedPath;

            // 移除可能存在的"/target/classes"路径（更灵活的处理方式）
            // 注意：这里假设"/target/classes"是可选的，且只在开发环境中存在
            if (filePath.endsWith("/target/classes/") || filePath.endsWith("/target/classes")) {
                filePath = filePath.substring(0, filePath.lastIndexOf("/target/classes") + 1); // 修正索引计算，确保不会移除最后一个字符前的'/'（如果有的话）
                filePath = filePath.endsWith("/") ? filePath.substring(0, filePath.length() - 1) : filePath; // 如果现在以'/'结尾，则移除它
            }

            // 处理特定操作系统的路径（但通常不需要，除非有特定需求）
            // 对于Windows系统，通常不需要在这里做额外的处理，因为getResource("")不会返回驱动器号路径

            path = filePath;
        } catch (UnsupportedEncodingException e) {
            // 在Java 7及以上版本中，UTF-8总是受支持的，但保留这个捕获块以增加代码的健壮性
            // 改为抛出更具体的运行时异常，以便调用者可以更容易地处理或记录错误
            throw new IllegalStateException("Unsupported encoding exception occurred", e);
        }

        return path;
    }


    /**
     * 改进之后的文件上传方法
     * @param multipartFile
     * @return
     */
    public static String upload(MultipartFile multipartFile) {
        String res = null;
        File destFile = null;

        try {

            String s = PathUtils.getClassLoadRootPath() + filePath;
            System.out.println(s);

            // 创建文件对象
            File dir = new File(s);

            // 如果目录不存在，则创建目录
            if (!dir.exists()) {
                boolean created = dir.mkdirs();
                if (!created) {
                    throw new RuntimeException("无法创建文件存储目录：" + dir.getAbsolutePath());
                }
            }

            // 加上时间戳生成新文件名
            String newFileName = System.currentTimeMillis() + "_" + multipartFile.getOriginalFilename();
            res = "/files/" + newFileName; // 根据实际情况调整返回的路径格式

            // 构建目标文件对象
            destFile = new File(dir, newFileName);

            // 直接将MultipartFile写入目标文件
            multipartFile.transferTo(destFile);

        } catch (IOException e) {
            // 记录或抛出异常
            throw new RuntimeException("文件上传失败：" + e.getMessage(), e);
        }

        return res;
    }


    /**
     * 最开始的处理方式
     * @return
     */
   /* public static String upload(MultipartFile multipartFile) {
        String res = null;  // 返回网络路径
        try {
            String staticDir = PathUtils.getClassLoadRootPath() + filePath;

            // 创建文件对象
            File resDirFile = new File(staticDir);

            // 如果结果目录不存在，则创建目录
            if(!resDirFile.exists()) {
                boolean flag = resDirFile.mkdirs();
                if(!flag) throw new RuntimeException("创建结果目录失败");
            }
            // 获取MultipartFile的字节数组
            byte[] fileBytes = multipartFile.getBytes();

            // 加个时间戳防止重名
            String newFileName = System.currentTimeMillis() + "_" + multipartFile.getOriginalFilename();
            res = "/files/" + newFileName;

            // 写文件
            File file = new File(staticDir + newFileName);

            // 将字节数组写入文件
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(fileBytes);
            fos.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }*/
}
