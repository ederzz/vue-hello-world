<template>
    <div :class="$style['novel-container']">
        <section :class="$style['search-panel']">
            <category-bar 
                @switch="handleSwitch"
                :cates='cates' 
            />
        </section>
        <div :class="$style['book-list']">
            <book-item 
                v-for="item in bookList"
                :key="item.id"
                :detail="item" 
            />
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

export default {
    name: 'novel',
    components: {
        CategoryBar,
        BookItem
    },
    data() {
        return {
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
            pageNo: 1
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
            this.searchBooks({
                cate,
                pageNo: this.pageNo
            })
        }
    },
    created() {
        this.searchBooks({
            cate: '',
            pageNo: this.pageNo
        })
    }
}
</script>

<style lang='less' module>
    .novel-container {
        .search-panel {
            padding: 20px 0;
        }

        .book-list {
            padding: 0 15px;
        }
    }

</style>