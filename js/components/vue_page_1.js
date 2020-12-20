Vue.component('page-1', {
    template: `
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="HTML5"
                @back="() => this.$router.push('/')"
            />
        </a-layout-header>
        <a-layout-content class="layout-content">
            <a-list size="large" bordered>
                <a-list-item>
                    文档声明区别：<br>
                    在文档声明上，html有很长的一段代码，并且很难记住这段代码，想必很多人都是靠工具直接生成的，<br>
                    而html5却是不同，只有简简单单的声明，这也方便人们的记忆，更加精简。
                </a-list-item>
                <a-list-item>
                    结构语义区别：<br>
                    html5增加了许多新的元素和功能，比如：用于绘画的 canvas 元素、用于媒介回放的video和<br>
                    audio元素、对本地离线存储的更好的支持、语意化更好的内容元素，比如 article、footer、<br>
                    header、nav、section、新的表单控件，比如 calendar、date、time、email、url、search。
                </a-list-item>
                <a-list-item>
                    绘图区别：<br>
                    html：指可伸缩矢量图形，用于定义网络的基于矢量的图形。<br>
                    html5：html5的canvas元素使用脚本（通常使用JavaScript）在网页上绘制图像，<br>
                    可以控制画布每一个像素。
                </a-list-item>
                <a-list-item>
                    新增视频标签：<br>
                    可能在html4.0的时候，我们想要插入一段视频，还需要引用一长段的代码。但是在html5的情况<br>
                    下。我们只需要用于一个video标签即可。
                </a-list-item>
                <a-list-item>
                    可以省略标记的元素：<br>
                    在 HTML5 中，标签的标记分为“不允许写结束标记”、“可以省略结束标记”和<br>
                    “开始标记和结束标记全部可以省略”三种类型。
                </a-list-item>
                <div slot="header">
                    HTML5的新特性，相对于XHTML或者HTML，举例说明并列出区别：
                </div>
            </a-list>
        </a-layout-content>
    </a-layout>
    `
});
