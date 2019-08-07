<template>
    <div>
        <section :class="$style['books-section']">
            <header :class="$style.header">
                <h2 :class="$style['sub-title']">最受关注图书｜虚构类</h2>
            </header>
            <div :class="$style.content">
                <div :class="$style['books-wrapper']">
                    <book-item 
                        v-for="(item) in fictionalBooks" 
                        :key="item.id"
                        :cover="item.cover.url"
                        :title="item.title"
                        :rate="item.rating.value"
                    />
                </div>
            </div>
        </section>
        <section :class="$style['books-section']">
            <header :class="$style.header">
                <h2 :class="$style['sub-title']">最受关注图书｜非虚构类</h2>
            </header>
            <div :class="$style.content">
                <div :class="$style['books-wrapper']">
                    <book-item 
                        v-for="(item) in nonFictionalBooks" 
                        :key="item.id"
                        :cover="item.cover.url"
                        :title="item.title"
                        :rate="item.rating.value"
                    />
                </div>
            </div>
        </section>
        <section>
            <header>
                <h2 :class="$style['sub-title']">发现好书</h2>
            </header>
            <div :class="$style['interest-books-wrapper']">
                <div>
                    <interest-book
                        v-for="(item) in suggestedBooks1"
                        :key="item.text"
                        :text="item.text"
                        :color="item.color"
                    />
                    <div />
                    <interest-book
                        v-for="(item) in suggestedBooks2"
                        :key="item.text"
                        :text="item.text"
                        :color="item.color"
                    />
                </div>
            </div>
        </section>
        <section>
            <header>
                <h2 :class="$style['sub-title']">分类浏览</h2>
            </header>
            <div :class="$style['book-types-wrapper']">
                <book-type
                    v-for="item in types"
                    :key="item.text"
                    :text="item.text"
                />
            </div>
        </section>
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import BookItem from '@/components/Book/BookItem.vue'
import InterestBook from '@/components/Book/InterestBook.vue'
import BookType from '@/components/Book/BookType.vue'

export default {
    name: 'books',
    components: {
        BookItem,
        InterestBook,
        BookType
    },
    computed: {
        ...mapState('books', [
            'fictionalBooks',
            'nonFictionalBooks',
            'books',
            'suggestedBooks1',
            'suggestedBooks2',
            'types',
        ])
    },
    methods: {
        ...mapActions('books', [
            'fetchFictionalBooks',
            'fetchNonFictionalBooks',
            'fetchBooks'
        ])
    },
    created() {
        this.fetchFictionalBooks()
        this.fetchNonFictionalBooks()
        this.fetchBooks()
        console.log(this.suggestedBooks)
    }
}
</script>

<style lang="less" module>
    @title_color: #111;

    .sub-title {
        color: @title_color;
        font-size: 17px;
        padding: 0 18px;
        margin: 0;
    }

    .books-section {
        background-color: #fff;
        overflow: hidden;

        .header {
            margin: 10px 0 15px;
        }

        .content {
            margin-bottom: -20px;
        }

        .books-wrapper {
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 43px;
        }
    }

    .interest-books-wrapper {
        overflow: hidden;

        >div {
            overflow-x: auto;
            padding: 15px 15px 43px 15px;
            white-space: nowrap;
            margin-left: -5px;
            margin-bottom: -1.12rem;
        }
    }

    .book-types-wrapper {
        padding: 1.22rem 0 1.88rem;
        margin-left: .94rem;
        overflow: hidden;
    }
</style>
