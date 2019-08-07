<template>
    <div :class="$style.type">
        {{ text }}
        <span></span>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" module>
    @border_color: #eee;
    @icon_color: #ccc;
    @font_color: #42bd56;

    .type {
        color: @font_color;
        line-height: 2.64rem;
        border-top: solid 1px @border_color;
        border-right: solid 1px @border_color;
        font-size: .9rem;
        padding-right: 1.12rem;
        width: 50%;
        box-sizing: border-box;
        float: left;

        &:nth-child(even) {
            padding-left: 1.12rem;
        }

        &:nth-last-child(1) {
            border-bottom: solid 1px @border_color;
        }

        &:nth-last-child(2) {
            border-bottom: solid 1px @border_color;
        }

        >span {
            border-right: solid 1px @icon_color;
            border-bottom: solid 1px @icon_color;
            width: .5rem;
            height: .5rem;
            display: inline-block;
            transform: rotate(-45deg);
            float: right;
            margin-top: 1rem;
        }
    }
</style>