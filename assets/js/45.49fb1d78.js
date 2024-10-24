(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{452:function(v,_,a){"use strict";a.r(_);var l=a(2),t=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"垃圾回收-回收对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收-回收对象"}},[v._v("#")]),v._v(" 垃圾回收(回收对象)")]),v._v(" "),_("div",{staticClass:"language-markdown extra-class"},[_("pre",{pre:!0,attrs:{class:"language-markdown"}},[_("code",[v._v("new 一个对象\n引用\n\n\nA依赖B,此时B就不能被回收(引用计数法)\nclass A{\n    private B b = new B();\n}\n")])])]),_("h3",{attrs:{id:"引用计数法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[v._v("#")]),v._v(" 引用计数法")]),v._v(" "),_("p",[v._v("只要这个对象被其他对象引用了, 就不能被回收.")]),v._v(" "),_("p",[v._v("a依赖b,b依赖a,但是没有其他对象引用, 其实也是垃圾")]),v._v(" "),_("p",[v._v("比如电视和电视遥控器, 他俩互相引用, 但是当你不需要了, 它就是垃圾, 都需要丢掉")]),v._v(" "),_("h3",{attrs:{id:"可达性分析算法-gc-root"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法-gc-root"}},[v._v("#")]),v._v(" 可达性分析算法(GC ROOT)")]),v._v(" "),_("p",[v._v("当前一定不能被回收的对象")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("虚拟机栈中引用的对象")])]),v._v(" "),_("li",[_("p",[v._v("方法区中类静态属性引用的对象")])]),v._v(" "),_("li",[_("p",[v._v("方法区中常量引用的对象")])]),v._v(" "),_("li",[_("p",[v._v("本地方法栈")])])]),v._v(" "),_("h3",{attrs:{id:"垃圾回收算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[v._v("#")]),v._v(" 垃圾回收算法")]),v._v(" "),_("h4",{attrs:{id:"标记清除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[v._v("#")]),v._v(" 标记清除")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("把需要清除的对象进行标记, 然后清除")]),v._v(" "),_("p",[v._v("缺点: 有内存碎片")])])]),v._v(" "),_("h4",{attrs:{id:"标记复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标记复制"}},[v._v("#")]),v._v(" 标记复制")]),v._v(" "),_("ul",[_("li",[v._v("把需要保留的对象复制到可用空间, 其余对象直接删除")])]),v._v(" "),_("p",[v._v("缺点: 需要更大的内存空间")]),v._v(" "),_("h4",{attrs:{id:"标记整理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标记整理"}},[v._v("#")]),v._v(" 标记整理")]),v._v(" "),_("ul",[_("li",[v._v("清除完之后再整理")])]),v._v(" "),_("h4",{attrs:{id:"jvm内存划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存划分"}},[v._v("#")]),v._v(" JVM内存划分")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("堆 => 放new出来的实例对象")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("青年代 1 2g")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("标记复制算法")])]),v._v(" "),_("li",[_("p",[v._v("eden 8")])]),v._v(" "),_("li",[_("p",[v._v("survivor 1")])]),v._v(" "),_("li",[_("p",[v._v("survivor 1")])]),v._v(" "),_("li",[_("p",[v._v("为什么设计成811, 如果只有一个区域,或者两个区域, 那么当内存满了之后就会放到老年代, 但是放进去的对象可能生命周期很短,会造成老年代的频繁垃圾回收. 如果有3个区域, 就可以来回添加, 这样放到老年代的对象生命周期也是比较久的")])]),v._v(" "),_("li",[_("p",[v._v("为什么它的分代年龄是15?")]),v._v(" "),_("ul",[_("li",[v._v("因为对象头中存储是4位, 能表示的最大值就15")])])])])]),v._v(" "),_("li",[_("p",[v._v("什么时候进入老年代?")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("15次  为什么是15次? 对象头中的结构, 15是最大")])]),v._v(" "),_("li",[_("p",[v._v("大对象, 根据配置或者默认值")])]),v._v(" "),_("li",[_("p",[v._v("空间分配担保机制")])]),v._v(" "),_("li",[_("p",[v._v("动态年龄判断")])])])]),v._v(" "),_("li",[_("p",[v._v("老年代 2 4g")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("垃圾回收器: CMS   标记清除算法(隔几次GC进行一次)")])]),v._v(" "),_("li",[_("p",[v._v("特点: 对象比较大 空间大  东西多  但是大部分数据不需要被回收(因为能进到这里的生命周期都比较长)")])])])]),v._v(" "),_("li",[_("p",[v._v("CMS垃圾回收的过程")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("预先标记(GC ROOT) : 当前一定不能被回收的对象 -- STW(stop the world)")])]),v._v(" "),_("li",[_("p",[v._v("并发标记 : 根据GC ROOT标记被GC ROOT引用的对象")]),v._v(" "),_("p",[v._v("GC线程和用户线程同时在跑可能会有错标漏标")])]),v._v(" "),_("li",[_("p",[v._v("重新标记(修正一下)  -- STW")])]),v._v(" "),_("li",[_("p",[v._v("并发清除 -- 多GC线程 用户线程和GC线程一起跑")])]),v._v(" "),_("li",[_("p",[v._v("标记整理 -- 根据参数执行, 默认次数")])])])])])]),v._v(" "),_("li",[_("p",[v._v("栈")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("本地方法栈")])]),v._v(" "),_("li",[_("p",[v._v("虚拟机栈")])])])]),v._v(" "),_("li",[_("p",[v._v("程序计数器 => 记录一下方法执行到哪了")])]),v._v(" "),_("li",[_("p",[v._v("方法区 => 存储类的信息")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("方法区和永久代什么关系?")]),v._v(" "),_("ul",[_("li",[v._v("方法区相当于接口, 永久代相当于实现类")])])]),v._v(" "),_("li",[_("p",[v._v("永久代和元空间")]),v._v(" "),_("ul",[_("li",[v._v("1.8永久代改名叫元空间")])])])])])]),v._v(" "),_("p",[v._v("1:43:00开始")]),v._v(" "),_("p",[v._v("已看完, 等看完锁再复习")]),v._v(" "),_("h3",{attrs:{id:"对象什么时候进入老年代"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象什么时候进入老年代"}},[v._v("#")]),v._v(" 对象什么时候进入老年代?")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("eden区15次GC, 为什么是15次? 对象头中的4位")])]),v._v(" "),_("li",[_("p",[v._v("大对象, 可以根据配置来设置")])]),v._v(" "),_("li",[_("p",[_("mark",[v._v("空间分配担保机制")])])]),v._v(" "),_("li",[_("p",[_("mark",[v._v("动态年龄判断")])])])]),v._v(" "),_("h3",{attrs:{id:"cms垃圾回收的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cms垃圾回收的过程"}},[v._v("#")]),v._v(" "),_("mark",[v._v("CMS垃圾回收的过程")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("预先标记")]),v._v(" "),_("ul",[_("li",[v._v("GC ROOT(当前一定不能被回收的对象)")])])]),v._v(" "),_("li",[_("p",[v._v("并发标记")]),v._v(" "),_("ul",[_("li",[v._v("被GC ROOT引用的对象")])])]),v._v(" "),_("li",[_("p",[v._v("重新标记")]),v._v(" "),_("ul",[_("li",[v._v("GC 线程和用户线程同时在跑, 可能会有错标漏标")])])]),v._v(" "),_("li",[_("p",[v._v("并发清除")]),v._v(" "),_("ul",[_("li",[v._v("多GC线程 用户线程和GC线程一起跑")])])]),v._v(" "),_("li",[_("p",[v._v("标记整理")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("根据参数执行")])]),v._v(" "),_("li",[_("p",[v._v("默认几次?")])])])])]),v._v(" "),_("h3",{attrs:{id:"new出来的对象一定在堆里面吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#new出来的对象一定在堆里面吗"}},[v._v("#")]),v._v(" New出来的对象一定在堆里面吗?")]),v._v(" "),_("p",[v._v("不一定, 方法逃逸")]),v._v(" "),_("p",[v._v("只要某个方法里的对象不被方法外的对象, 就直接new在栈上")]),v._v(" "),_("h3",{attrs:{id:"锁升级-等下一期专题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#锁升级-等下一期专题"}},[v._v("#")]),v._v(" 锁升级(等下一期专题)")]),v._v(" "),_("p",[v._v("锁: syncronized和reentrantlock")]),v._v(" "),_("p",[v._v("sync基于mutex互斥变量实现的")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("JVM底层实现")])]),v._v(" "),_("li",[_("p",[v._v("很慢, 一旦用到mutex需要上下文切换(线程睡眠再唤醒)")])]),v._v(" "),_("li",[_("p",[v._v("内核态和用户态切换")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);