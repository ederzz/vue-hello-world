<template>
    <router-link :class="$style.nav" :to="to">
        <strong
            :style="titleStyle"
            :class="$style.title"
        >{{ title }}</strong>
        <span :class="$style.content">{{ content }}</span>
    </router-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        content: {
            type: String,
            default: '',
        },
        to: {
            type: String,
            default: '/',
        },
        titleColor: {
            type: String,
            default: '',
        },
    },
    computed: {
        titleStyle() {
            return {
                color: this.titleColor,
            };
        },
    },
};
</script>

<style lang="less" module>
    @content_color: #818181;
    @title_font_size: 23px;
    @content_font_size: 13px;
    @border_color: rgba(236,236,236,0.5);

    .nav {
        width: 50%;
        float: left;
        padding: 27px;
        text-decoration: none;
        box-sizing: border-box;
        // border: .5px solid @border_color;

        .title,
        .content {
            display: block;
            text-align: center;

            &.title {
                font-size: @title_font_size;
            }

            &.content {
                color: @content_color;
                font-size: @content_font_size;
            }
        }
    }
</style>
