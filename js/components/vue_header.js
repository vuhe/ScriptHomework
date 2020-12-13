Vue.component('main-header', {
    data: function () {
        return {
            pathItem: [
                {path: '/', icon: 'user', name: '主页'},
                {path: '/test1', icon: 'video-camera', name: '测试1'},
                {path: '/test2', icon: 'upload', name: '测试2'},
            ]
        }
    },
    template: `
    <a-layout-sider :trigger="null" collapsible>
        <div class="logo" />
        <a-menu
            theme="dark" mode="inline"
            :selected-keys="[this.$route.path]">
            <a-menu-item v-for="item in pathItem" :key="item.path">
                <router-link :to="item.path">
                    <a-icon :type="item.icon" />
                    <span>{{item.name}}</span>
                </router-link>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
    `
});
