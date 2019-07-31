<template>
<div class="home">
    <div class="header">
        <div class="nav-box">
            <HomeNav
                v-for="item in navList"
                :key="item.to"
                :title-color="item.titleColor"
                :to="item.to"
                :title="item.title"
                :content="item.content"
            />
        </div>
    </div>
</div>
</template>

<script>
import HomeNav from '@/components/HomeNav.vue';

export default {
  name: 'home',
  components: {
    HomeNav,
  },
  data() {
    return {
      movieTitle: {
        color: '#2384E8',
      },
      navList: [{
        title: '电影',
        content: '找电影/影院热映',
        titleColor: '#2384E8',
        to: '/movie',
      },
      {
        title: '追剧',
        content: '正在热播',
        titleColor: '#7A6ADB',
        to: '/tv',
      },
      {
        title: '小组',
        content: '志趣相投',
        titleColor: '#2AB8CC',
        to: '/group',
      },
      {
        title: '图书',
        content: '畅销排行',
        titleColor: '#9F7860',
        to: '/book',
      },
      {
        title: '音乐',
        content: '新碟榜',
        titleColor: '#F48F2E',
        to: '/music',
      },
      {
        title: '豆品',
        content: '生活美学',
        titleColor: '#42BD56',
        to: '/life',
      },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@border_color: rgba(236, 236, 236, 0.5);
@border: 1px solid @border_color;

.header {
    padding: 15px 18px 0;

    .nav-box {
        overflow: hidden;
        border: @border;

        a:nth-child(1),
        a:nth-child(3) {
            border-right: @border;
            border-bottom: @border;
        }

        a:nth-child(2),
        a:nth-child(4) {
            border-bottom: @border;
        }

        a:nth-child(5) {
            border-right: @border;
        }
    }
}
</style>
