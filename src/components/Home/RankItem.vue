<template>
    <div :class="$style['rank-item']">
        <slot></slot>
        <ul 
            :style="{ backgroundImage: 'url(' + (movieImg) + ')' }"
            :class="$style.movies"
        >
            <div 
                :style="{ backgroundColor: maskColor }"
                :class="$style.mask"
            ></div>
            <li :class="$style.list" v-for="(item, i) in list" :key="item.name">
                <span>{{ i + 1 }}.</span>
                <span>{{ item.name }}</span>
                <span :class="$style.rate">{{  item.rate }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: '',
        },
        movieImg: {
            type: String,
            default: '',
        },
        list: {
            type: Array,
            default: function () {
                return []
            }
        },
        maskColor: {
            type: String,
            default: ''
        }
    },
}
</script>

<style lang="less" module>
    @rate_color: #ffac2d;

    .rank-item {
        display: flex;
        height: 100px;
        align-items: center;
        border-radius: 4px;
        margin-bottom: 12px;
        overflow: hidden;

        .left-img {
            width: 100px;
            height: 100px;

            >img {
                width: 100px;
                height: 100px;
            }
        }

        .movies {
            color: #fff;
            padding: 20px 0 20px 16px;
            flex: 1;
            background-size: 100% 100%;
            background-position: 0 0;
            font-size: 13px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-sizing: border-box;
            height: 100%;
            position: relative;

            >li {
                position: relative;
            }

            .mask {
                opacity: .8;
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }

            .rate {
                color: @rate_color;
                font-size: 12px;
                margin-left: 6px;
            }
        }
    }
</style>