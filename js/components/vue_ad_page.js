Vue.component('ad-page', {
    template: `
    <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="广告"
                sub-title="本页面主要是阿里云的广告"
                @back="() => this.$router.push('/')"
            />
        </a-layout-header>
        <a-layout-content class="layout-content">
            <a-carousel autoplay>
                <div><img src="img/1.jpg" /></div>
                <div><img src="img/2.jpg" /></div>
                <div><img src="img/3.jpg" /></div>
                <div><img src="img/4.jpg" /></div>
            </a-carousel>
        </a-layout-content>
    </a-layout>
    `
});
