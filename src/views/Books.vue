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
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import BookItem from '@/components/Book/BookItem.vue'

export default {
    name: 'books',
    components: {
        BookItem
    },
    computed: {
        ...mapState('books', [
            'fictionalBooks',
            'nonFictionalBooks',
            'books'
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
    }
}
</script>

<style lang="less" module>
    @title_color: #111;

    .books-section {
        background-color: #fff;
        overflow: hidden;

        .header {
            margin: 10px 0 15px;

            .sub-title {
                color: @title_color;
                font-size: 17px;
                padding: 0 18px;
                margin: 0;
            }
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
</style>
