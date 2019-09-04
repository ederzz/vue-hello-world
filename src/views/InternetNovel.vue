<template>
    <div :class="$style['novel-container']">
        <section :class="$style['search-panel']">
            <category-bar 
                @switch="handleSwitch"
                :selectCate='selectCate'
                :cates='cates' 
            />
        </section>
        <div :class="$style['book-list']">
            <book-item 
                v-for="item in bookList"
                :key="item.id"
                :detail="item" 
            />
            <img :style="{ display: runLoadMore ? 'block' : 'none' }" :class="$style['load-img']" :src="loadBook" />
        </div>
    </div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'
import CategoryBar from '@/components/Novel/CategoryBar'
import BookItem from '@/components/Novel/BookItem'
import {
    loadBook
} from '@/core/icons'

export default {
    name: 'novel',
    components: {
        CategoryBar,
        BookItem
    },
    data() {
        return {
            loadBook,
            cates: [
                '玄幻',
                '奇幻',
                '武侠',
                '仙侠',
                '都市',
                '历史',
                '军事',
                '游戏',
                '科幻',
                '灵异',
                '古代言情',
                '青春'
            ],
            selectCate: '',
            pageNo: 1,
            runLoadMore: false,
            hasMore: true,
            container: null
        }
    },
    computed: {
        ...mapState('novel', [
            'bookList'
        ])
    },
    methods: {
        ...mapActions('novel', [
            'searchBooks'
        ]),
        handleSwitch(cate) {
            this.selectCate = cate
            this.search()
        },
        async search() {
            const ret = await this.searchBooks({
                cate: this.selectCate,
                pageNo: this.pageNo
            })
            if (ret.hasMore !== 1) { // 加载到底了
                this.unScroll()
            }
            this.runLoadMore = false
        },
        bindScroll() {
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
            const {
                scrollTop,
                scrollHeight,
                clientHeight
            } = this.container
            // TODO: pageNo update time
            if (scrollHeight - scrollTop <= clientHeight + 30 
                && !this.runLoadMore) {
                this.runLoadMore = true
                this.pageNo += 1
                this.search()
            }
        }
    },
    created() {
        this.search()
    },
    mounted() {
        this.container = this.$el
        this.bindScroll()
    },
    beforeDestroy() {
        this.unScroll()
    }
}
</script>

<style lang='less' module>
    .novel-container {
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        overflow: auto;

        .search-panel {
            padding: 20px 0;
        }

        .book-list {
            padding: 0 15px;

            .load-img {
                position: fixed;
                width: 30px;
                height: 30px;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

</style>