<template>
    <div :class="$style.chapter">
        <div :class="$style.title">{{ info.chapter_title }}</div>
        <div :class="$style['public-time']">{{ +info.public_time * 1000 | formatTime }}</div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="less" module>
    @title_color: #8c8d8f;
    @time_color: #aaaaaa;
    @border_color: #ecebeb;

    .chapter {
        padding: 13px 0;
        position: relative;
        margin-left: 20px;

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

        .title {
            color: @title_color;
            margin-bottom: 10px;
        }

        .public-time {
            color: @time_color;
            font-size: 12px;
            font-weight: 300;
        }
    }
</style>