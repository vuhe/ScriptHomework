Vue.component('page-2', {
    template: `
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="元素概念"
                @back="() => this.$router.push('/')"
            />
        </a-layout-header>
        <a-layout-content class="layout-content">
            <a-list size="large" bordered>
                <a-list-item>
                    块级元素（inline）：<br>
                    它独占一行；它的宽高可以设置；默认时，宽度是100%；<br>
                    例如：&lt;div&gt;、&lt;h1-h6&gt;、&lt;ul&gt;、&lt;ol&gt; 、&lt;li&gt; 等。
                </a-list-item>
                <a-list-item>
                    行内元素（block）：<br>
                    它的宽度由内容决定，高度有内容字体大小决定；它不可以设置宽高；它可以和其他的行内元素位于同一行；<br>
                    例如：&lt;span&gt;、&lt;label&gt;、&lt;i&gt;、&lt;e&gt;等。　
                </a-list-item>
                <a-list-item>
                    替换元素：<br>
                    替换元素所显示的内容，浏览器根据元素的标签和属性，来决定元素的具体显示内容。<br>
                    （这种通过修改某个属性值，例如 &lt;img&gt; 的 “src” 属性， 的 “type” 属性，呈现的内容就可以被改变的元素称为替换元素 ）<br>
                    比如&lt;img&gt;元素，本身并没有什么内容，内容是有属性src决定的，而如果查看html代码，却看不到图片的实际内容，<br>
                    img元素的内容通常会被src属性指定的图像替换掉；
                </a-list-item>
                <a-list-item>
                    非替换元素：<br>
                    HTML 的大多数元素是不可替换元素，他们将内容直接告诉浏览器，将其显示出来。
                </a-list-item>
                <div slot="header">
                    解释概念：块级元素，行内元素，替换元素，非替换元素：
                </div>
            </a-list>
        </a-layout-content>
    </a-layout>
    `
});
