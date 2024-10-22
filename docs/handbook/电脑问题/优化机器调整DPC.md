# 调机器，调整DPC

> 需要工具：
> 
> PowerSettingsExplorer.exe 电源计划
> 
> BoosterX.exe 基本设置和设备优化
> 
> WiseCare365_CN_7.0.7.689.exe 优化注册表
> 
> Dism++x64.exe 更新

从抖音@费利克斯Felixx处学习

提升操作手感，画面流畅度

### 1. 创建一个新的电源计划

- 打开PowerSettingsExplorer
  
  ```markdown```
  - USB 设置
  USB 选择性暂停设置 禁用
  USB 3 Link Power Mangement off
  
  - 处理器电源管理
  处理器性能提高阈值 1
  针对第 1 类处理器电源效率的处理器性能提升阈值 1
  处理器性能核心放置最小核心数量 100
  针对第 1 类处理器电源效率的处理器性能核心放置最小核心数量 100
  允许节流状态 关闭
  处理器闲置降级阈值 100
  处理器性能历史计数 1
  最小处理器状态 100
  异类线程调度策略 英特尔：高性能处理器或首选高性能  AMD:所有处理器
  处理器性能时间检查间隔 5000
  ```

    左下角点击Apply



- Booster X
  
  禁用基本设置和设备中的非必要项目

![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-10-04-31-image.png)

![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-10-04-39-image.png)

设备

![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-10-04-55-image.png)

下图所示在注册表中均可找到

![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-09-58-53-image.png)

对应如下位置

`计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Multimedia\SystemProfile`

设置8个f和0即可

![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-10-01-10-image.png)



另一个如下位置

`计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\PriorityControl`

调整为十进制的40即可

![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-10-02-40-image.png)



- WiseCare
  
  系统清理和系统优化即可



- Dism++

    Windows Update 和 网络设置   ![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-09-56-27-image.png)

    服务优化   ![](C:\Users\ChenYeqing\AppData\Roaming\marktext\images\2024-10-22-09-56-04-image.png)





至此已完成


