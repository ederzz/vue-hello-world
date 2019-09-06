<template>
    <div :class="$style.container">
        <header :class="$style.header">
            <div @click="toggleOrder" :class="$style['order-btn']">
                <img :class="$style['order-icon']" src="../../assets/order.svg" />
                {{ order === 'asc' ? '正序' : '倒叙' }}
            </div>
        </header>
        <chapter 
            v-for="item in chapters"
            :key="item.id"
            :info="item"
        />
        <novel-loading :show="runLoadMore" />
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import Chapter from '@/components/Novel/Chapter'
import NovelLoading from '@/components/NovelLoading'

export default {
    name: 'chapters',
    components: {
        Chapter,
        NovelLoading
    },
    data() {
        return {
            container: null,
            runLoadMore: false,
            pageNo: 1,
            order: 'asc'
        }
    },
    computed: {
        ...mapState('novel', [
            'chapters'
        ])
    },
    methods: {
        ...mapActions('novel', [
            'fetchChapters'
        ]),
        async loadData(type) {
            const ret = await this.fetchChapters({
                type,
                pageNo: this.pageNo,
                order: this.order,
                book_id: this.$route.query.book_id
            })
            if (type === 'refresh') {
                // TODO:第一次渲染不需要设置
                this.container.scrollTop = 0
            }
            this.runLoadMore = false
            if (ret.errno === 100) {
                this.unScroll()
            }
        },
        bindScroll() {
            console.log(this.container)
            if (this.container) {
                this.container.addEventListener('scroll', this.scrollPage)
            }
        },
        unScroll() {
            if (this.container) {
                this.container.removeEventListener('scroll', this.scrollPage)
            }
        },
        scrollPage() {
            // listener scroll event of container
            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = this.container
            // TODO: 将滚动监听设置为 指令，什么是指令
            // TODO: 去掉不满足一页情况
            // TODO: pageNo update time
            if (scrollHeight - scrollTop <= clientHeight + 30 
                && !this.runLoadMore) {
                this.runLoadMore = true
                this.pageNo += 1
                this.loadData('load')
            }
        },
        toggleOrder() {
            // switch chapter order
            this.pageNo = 1
            this.order = this.order === 'asc' ? 'desc' : 'asc'
            this.loadData('refresh')
        }
    },
    created() {
        this.loadData('refresh')
    },
    mounted() {
        this.container = this.$el
        this.bindScroll()
    },
    beforeDestroy() {
        this.unScroll()
    },
}
</script>

<style lang="less" module>
    .container {
        height: 100vh;
        overflow: auto;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        padding-top: 44px;

        .header {
            padding: 10px 15px;
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            background-color: #fff;
            z-index: 99;

            .order-btn {
                display: inline-flex;
                align-items: center;

                .order-icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 2px;
                }
            }
        }
    }
</style>