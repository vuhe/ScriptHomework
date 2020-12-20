Vue.component('page-4', {
    template: `
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="JavaScript"
                @back="() => this.$router.push('/')"
            />
        </a-layout-header>
        <a-layout-content class="layout-content">
            <a-list size="large" bordered>
                <a-list-item>
                    (1)脚本语言。<br>
                    JavaScript是一种解释型的脚本语言,C、C++等语言先编译后执行,<br>
                    而JavaScript是在程序的运行过程中逐行进行解释。
                </a-list-item>
                <a-list-item>
                    (2)基于对象。<br>
                    JavaScript是一种基于对象的脚本语言,它不仅可以创建对象,也能使用现有的对象。　
                </a-list-item>
                <a-list-item>
                    (3)简单。<br>
                    JavaScript语言中采用的是弱类型的变量类型,对使用的数据类型未做出严格的要求,<br>
                    是基于Java基本语句和控制的脚本语言,其设计简单紧凑。
                </a-list-item>
                <a-list-item>
                    (4)动态性。<br>
                    JavaScript是一种采用事件驱动的脚本语言,它不需要经过Web服务器就可以对用户的输入做出响应。<br>
                    在访问一个网页时,鼠标在网页中进行鼠标点击或上下移、窗口移动等操作JavaScript都可直接对这些事件给出相应的响应。
                </a-list-item>
                <a-list-item>
                    (5)跨平台性。<br>
                    JavaScript脚本语言不依赖于操作系统,仅需要浏览器的支持。<br>
                    因此一个JavaScript脚本在编写后可以带到任意机器上使用,<br>
                    前提上机器上的浏览器支持JavaScript脚本语言,JavaScript已被大多数的浏览器所支持。
                </a-list-item>
                <div slot="header">
                    JavaScript脚本语言具有以下特点:
                </div>
            </a-list>
        </a-layout-content>
    </a-layout>
    `
});
