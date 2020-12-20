Vue.component('main-sider', {
    data: function () {
        return {
            pathItem: [
                {path: '/', icon: 'user', name: '主页'},
                {path: '/page1', icon: 'html5', name: 'HTML5'},
                {path: '/page2', icon: 'block', name: '元素概念'},
                {path: '/page3', icon: 'copy', name: 'CSS'},
                {path: '/page4', icon: 'code', name: 'JavaScript'},
                {path: '/form', icon: 'form', name: '表单测试'},
                {path: '/ad', icon: 'aliyun', name: '广告推广'},
            ]
        }
    },
    template: `
    <a-layout-sider :trigger="null" collapsible>
        <div class="logo">
            脚本课程大作业
        </div>
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
