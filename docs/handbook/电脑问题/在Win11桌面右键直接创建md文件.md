# 在Win11桌面右键直接创建.md文件

> 之前想记录一下东西的时候总是创建一个txt文件，然后修改文件后缀，用的久了就感觉有点繁琐，于是在网上寻找右键直接新建.md的方法，在这里记录一下

1. 下载一个.md文档编辑器（用的是MarkText，其他没试过）

2. 打开注册表
   
   ![](D:\Developer\GitFiles\blog\docs\handbook\电脑问题\img\2024-10-21-14-36-55-image.png)
   
   - Win + R打开`运行`输入`regedit`

3- 定位到shell处
   
   ![](D:\Developer\GitFiles\blog\docs\handbook\电脑问题\img\2024-10-21-14-37-47-image.png)
   
   - 在路径中进入到`HKEY_CLASSES_ROOT\Directory\Background\shell`

4- 新建项MarkText
   
   ![](D:\Developer\GitFiles\blog\docs\handbook\电脑问题\img\2024-10-21-14-33-34-image.png)
   
   1- 点击shell，右键新建项，命名为MarkText，点击MarkText，点击右边默认，右键修改，修改数值数据为"新增 Markdown 文件"；
   
   2- 点击左边MarkText文件夹，右键新建字符串值，命名为icon，数值数据为MarkText安装的绝对路径(右键选项前面的icon)

5- 到目前为止，在桌面右键就能看到新增项了，但是点击后不能运行，因为还需要添加命令路径

6- MarkText右键新建项command
   
   ![](D:\Developer\GitFiles\blog\docs\handbook\电脑问题\img\2024-10-21-14-32-48-image.png)
   
   - 点击MarkText，右键新建项，命名为command， 修改右边窗口的默认文件，填写文件路径(带有英文引号)

7- 此时点击右键中的更多选项然后打开了（按住Shift+右键直接打开更多）

8- 右键直接打开更多选项
   
   ![](D:\Developer\GitFiles\blog\docs\handbook\电脑问题\img\2024-10-21-14-39-33-image.png)
   
   - 在管理员的cmd命令窗中输入`reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve`，之后重启资源管理器就可以直接右键打开Win10的全部菜单

## 右键效果

![](D:\Developer\GitFiles\blog\docs\handbook\电脑问题\img\2024-10-21-14-20-46-image.png)
