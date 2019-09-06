<template>
    <div :class="$style.container">
        <div 
            v-if="status !== 4"
            :class="$style['wait-content']"
        >
            <p>{{ tips[status].text }}</p>
            <p>{{ tips[status].emoticon }}</p>
        </div>
        <div v-else :class="$style['load-success']">
            <h1 :class="$style.title">{{ chapterContent.title }}</h1>
            <div :class="$style.content">
                <p
                    v-for="(item, i) in chapterContent.content"
                    :key="i"
                >{{ item }}</p>
            </div>
        </div>
        <div :class="$style['links']">
            <div :class="{ [$style.disabled]: !this.pt.pre_cid }" @click="pre">上一章</div>
            <div @click="nav2chapters">目录</div>
            <div :class="{ [$style.disabled]: !this.pt.next_cid }" @click="next">下一章</div>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    name: 'chapter-content',
    data() {
        return {
            status: 1,
            tips: {
                1: {
                    text: '等待加载中',
                    emoticon: '♪(^∇^*)'
                },
                2: {
                    text: '抱歉页面出错了',
                    emoticon: 'X﹏X'
                },
                3: {
                    text: '加载失败',
                    emoticon: 'X﹏X'
                },
            }
        }
    },
    computed: {
        ...mapState('novel', [
            'chapterContent'
        ]),
        bookId() {
            return this.$route.query.book_id
        },
        pt() {
            return this.chapterContent.pt
        }
    },
    watch: {
        '$route'() {
            this.status = 1
            this.fetchData()
        }
    },
    methods: {
        ...mapActions('novel', [
            'fetchContent'
        ]),
        next() {
            // TODO: 修改标题
            // TODO: 不能push
            if (this.pt.next_cid) {
                this.$router.push(`/novel/content?book_id=${ this.bookId }&chapter_id=${ this.pt.next_cid }`)
            }
        },
        pre() {
            if (this.pt.pre_cid) {
                this.$router.push(`/novel/content?book_id=${ this.bookId }&chapter_id=${ this.pt.pre_cid }`)
            }
        },
        nav2chapters() {
            this.$router.go(-1)
        },
        async fetchData() {
            const {
                query: {
                    book_id,
                    chapter_id
                }
            } = this.$route
            const ret = await this.fetchContent({
                book_id,
                chapter_id
            })
            if (ret.success !== 0) {
                this.status = 3 // 加载失败
            } else {
                this.status = 4
            }
        }
    },
    created() {
        const {
            query: {
                book_id,
                chapter_id
            }
        } = this.$route
        if (!book_id || !chapter_id) {
            this.status = 2 // 页面出错
        } else {
            this.fetchData()
        }
    }
}
</script>

<style lang="less" module>
    @link_color: #dd5114;
    @content_color: #262626;
    @disabled_btn_color: #aaa;
    @tip_color: #5d5858;

    .container {
        padding: 0 15px;

        .wait-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 87vh;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 99;

            >p {
                font-size: 28px;
                color: @tip_color;
            }
        }

        .load-success {
            .title {
                text-align: left;
                color: #000;
                padding: 20px 0 40px;
                margin: 0;
                font-size: 26px;
            }

            .content {
                color: @content_color;
            }
        }

        .links {
            padding: 0 15px;
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            color: @link_color;

            div.disabled {
                color: @disabled_btn_color;
            }
        }
    }
</style>