<template>
    <div :class="$style['book']">
        <div :class="$style.cover">
            <img 
                :class="$style['cover-img']" 
                :src="detail.cover" 
            />
        </div>
        <div :class="$style['content']">
            <span :class="$style.title">{{ detail.title }}</span>
            <div :class="$style.info">{{ bookInfo }}</div>
            <p :class="$style.summary">
                {{ detail.des }}
            </p>
        </div>
    </div>
</template>
content
<script>
export default {
    props: {
        detail: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        bookInfo() {
            const {
                author,
                status,
                category
            } = this.detail
            const mainCate = category.split('_')[1]
            return `${ author } · ${ mainCate } · ${ status }`
        }
    }
}
</script>

<style lang="less" module>
    @title_color: #454648;
    @summary_color: #686d6b;
    @border_color: #ecebeb;

    .book {
        display: flex;
        padding: 15px 0;
        position: relative;
        align-items: center;

        &::before {
            content: '';
            display: block;
            height: 1px;
            background-color: @border_color;
            left: 0;
            top: 0;
            position: absolute;
            width: 100%;
            transform: scaleY(.5);
        }

        &:last-child {
            &::after {
                content: '';
                display: block;
                height: 1px;
                background-color: @border_color;
                left: 0;
                bottom: 0;
                position: absolute;
                width: 100%;
                transform: scaleY(.5);
            }
        }

        .cover {
            margin-right: 10px;

            .cover-img {
                width: 70px;
                height: 95px;
            }
        }

        .content {
            font-size: 14px;

            .title {
                color: @title_color;
            }

            .info {
                color: #aaabac;
                margin: 4px 0;
                font-weight: 300;
            }

            .summary {
                font-weight: 300;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: @summary_color;
            }
        }
    }
</style>