Vue.component('home-page', {
    template: `
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="主页"
                sub-title="本页面主要介绍此网站的情况"
            />
        </a-layout-header>
        <a-layout-content class="layout-content">
            <h2>网站介绍</h2>
            <hr />
            <p>本网站介绍和CSS以及HTML相关的知识</p>
            <p>此外还有一个用于实验的form表单测试</p>
            <p>最后一个页面有插入的广告</p>
            <p>详细的可以看左边导航栏</p>
        </a-layout-content>
    </a-layout>
    `
});
