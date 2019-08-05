<template>
    <div :class="$style['book-item']">
        <div :class="$style.cover">
            <img :src="cover" />
        </div>
        <div :class="$style.title">{{ title }}</div>
        <div :class="$style.rating">
            <span
                v-for="(n, index) in star" 
                :key="index"
                :class="[$style.active, $style.star]"
            >
                &#9733;
            </span>
            <span
                v-for="(n, index) in (5 - star)" 
                :key="index"
                :class="$style.star"
            >
                &#9733;
            </span>
            <span :class="$style.rate">{{ rate }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cover: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        rate: {
            type: Number,
            default: 0
        }
    },
    computed: {
        star() {
            const n = Math.round( this.rate / 2 )
            return n
        }
    }
}
</script>

<style lang="less" module>
    @title_color: #111;
    @rate_color: #aaa;

    .book-item {
        width: 100px;
        display: inline-block;
        margin-left: 8px;

        &:first-child {
            margin-left: 18px;
        }

        &:last-child {
            margin-right: 18px;
        }

        .cover {
            width: 100px;
            height: 142px;
            border: 1px solid red; // TODO:
        }

        .title {
            margin-top: 9.6px;
            color: @title_color;
            font-size: 15px;
            text-align: center;
            line-height: 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .rating {
            margin-top: 5px;
            color: @rate_color;
            font-size: 12px;
            color: #ffb710;
            display: flex;
            justify-content: center;
            align-items: center;

            >span {
                height: 15px;
            }

            .star {
                color: #e5e5e5;

                &.active {
                    color: #ffb710;
                }
            }

            .rate {
                margin-left: 4px;
            }
        }
    }
</style>