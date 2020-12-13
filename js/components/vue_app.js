Vue.component('app', {
    template: `
    <a-layout id="components-layout-demo-custom-trigger" class="content">
        <main-header></main-header>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-page-header
                    style="border: 1px solid rgb(235, 237, 240)"
                    title="Title"
                    sub-title="This is a subtitle"
                    @back="() => null"
                />
            </a-layout-header>
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
    `
});
