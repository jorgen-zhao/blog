### java反射获取参数名 idea 与 maven

#### 一、Maven方式获取

>  引入相关依赖，即可获取到

```java
<build>
    <plugins>
        <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.3</version>
        <configuration>
            <source>1.8</source>
            <target>1.8</target>
            <compilerArgs>
                <arg>-parameters</arg>
            </compilerArgs>
        </configuration>
        </plugin>
    </plugins>
</build>
```

***

#### 二、Java方式获取

> 在8以前的jdk版本的时候，我们利用反射只能获取到参数类型，然后参数名字都是利用arg0,arg1,arg2......所以在使用一些反射编程方面上不是很方便，jdk8开始开辟了这项function，但是我们正常情况下使用jvm不会默认保留参数名字，因为这个可能导致class文件过大或其他问题，所以我们如果需要可以自行开启，下面说下idea怎么开启parameters

1. File->Settings->Build,Execution,Deployment->Compiler->Java Compiler

2. 在 Additional command line parameters: 后面填上 -parameters，如下图

   ![img](.\assets\stickpicture.png)

3. 填好后，再将项目重新build一下，如下图

   ![img](.\assets\stickpicture-1614839747930.png)