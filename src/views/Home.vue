<template>
    <div :class="$style.home">
        <div :class="$style.header">
            <search />
            <div :class="$style['nav-box']">
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
        <section :class="$style['rank-list']">
            <h2 :class="$style['sub-title']">豆瓣榜单</h2>
            <div>
                <rank-item 
                    v-for="(item, index) in bangDanList"
                    :key="index"
                    :img="item.img"
                    :movieImg="item.movieImg"
                    :list="item.movies"
                    :maskColor="bangDanMaskColor[ index ]"
                >
                    <Top250 v-if="index === 0" />
                    <WeekMovieRank v-if="index === 1" />
                    <WeekTvRank v-if="index === 2" />
                </rank-item>
            </div>
        </section>
        <section :class="$style['comments-list']">
            <h2 :class="$style['sub-title']">豆瓣热门评论</h2>
            <div>
                <topic-item 
                    v-for="topic in topicsList"
                    :key="topic.id"
                    :topic="topic"
                />
            </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HomeNav from '@/components/HomeNav.vue'
import Search from '@/components/Home/Search.vue'
import RankItem from '@/components/Home/RankItem.vue'
import WeekMovieRank from '@/components/Home/WeekMovieRank.vue'
import WeekTvRank from '@/components/Home/WeekTvRank.vue'
import Top250 from '@/components/Home/Top250.vue'
import TopicItem from '@/components/TopicItem.vue'

export default {
    name: 'home',
    components: {
        HomeNav,
        Search,
        RankItem,
        Top250,
        WeekMovieRank,
        WeekTvRank,
        TopicItem
    },
    data() {
        return {
            movieTitle: {
                color: '#2384E8',
            },
            navList: [
                {
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
            bangDanMaskColor: [
                'rgb(50, 50, 59)',
                'rgb(66, 76, 43)',
                'rgb(76, 60, 42)'
            ]
        };
    },
    computed: {
        ...mapState('home', [
            'bangDanList',
            'topicsList'
        ])
    },
    methods: {
        ...mapActions('home', [
            'bangDan',
            'topics'
        ])
    },
    created() {
        this.bangDan()
        this.topics()
    }
};
</script>

<style lang="less" module>
    @border_color: rgba(236, 236, 236, 0.5);
    @border: 1px solid @border_color;
    @sub_title_font_size: 21px;

    .home {
        padding-bottom: 100px;

        .sub-title {
            margin: 0 0 20px;
            font-size: @sub_title_font_size;
        }

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

        .rank-list {
            padding: 15px;
        }

        .comments-list {
            padding: 0 15px;
        }
    }
</style>
