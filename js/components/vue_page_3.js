Vue.component('page-3', {
    template: `
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="CSS"
                @back="() => this.$router.push('/')"
            />
        </a-layout-header>
        <a-layout-content class="layout-content">
            <a-descriptions bordered title="CSS 特点">
                <a-descriptions-item label="丰富的样式定义">
                    CSS提供了丰富的文档样式外观，以及设置文本和背景属性的能力；允许为任何元素创建边框，<br>
                    以及元素边框与其他元素间的距离，以及元素边框与元素内容间的距离；<br>
                    允许随意改变文本的大小写方式、修饰方式以及其他页面效果。
                </a-descriptions-item>
                <a-descriptions-item label="易于使用和修改">
                    CSS可以将样式定义在HTML元素的style属性中，也可以将其定义在HTML文档的header部分，<br>
                    也可以将样式声明在一个专门的CSS文件中，以供HTML页面引用。总之，<br>
                    CSS样式表可以将所有的样式声明统一存放，进行统一管理。
                </a-descriptions-item>
                <a-descriptions-item label="多页面应用">
                    CSS样式表可以单独存放在一个CSS文件中，这样我们就可以在多个页面中使用同一个CSS样式表。<br>
                    CSS样式表理论上不属于任何页面文件，在任何页面文件中都可以将其引用。<br>
                    这样就可以实现多个页面风格的统一。
                </a-descriptions-item>
                <a-descriptions-item label="层叠">
                    简单的说，层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。<br>
                    例如对一个站点中的多个页面使用了同一套CSS样式表，而某些页面中的某些元素想使用其他样式，<br>
                    就可以针对这些样式单独定义一个样式表应用到页面中。这些后来定义的样式将对前面的样式设置进行重写，<br>
                    在浏览器中看到的将是最后面设置的样式效果。
                </a-descriptions-item>
                <a-descriptions-item label="页面压缩">
                    在使用HTML定义页面效果的网站中，往往需要大量或重复的表格和font元素形成各种规格的文字样式，<br>
                    这样做的后果就是会产生大量的HTML标签，从而使页面文件的大小增加。而将样式的声明单独放到CSS样式表中，<br>
                    可以大大的减小页面的体积，这样在加载页面时使用的时间也会大大的减少。<br>
                    另外，CSS样式表的复用更大程度的缩减了页面的体积，减少下载的时间。
                </a-descriptions-item>
            </a-descriptions>
        </a-layout-content>
    </a-layout>
    `
});
