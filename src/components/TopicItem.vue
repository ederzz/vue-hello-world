<template>
    <a :class="$style['comment-item']">
        <div :class="$style.left">
            <div :class="$style.comment">{{ topic.title }}</div>
            <div :class="$style.tips">
                <span :class="$style.icon"></span>
                <span>{{ topic.comments_count }}回复 · </span>
                <span>6 小时前</span>
                <span> · 去App查看</span>
                <!-- TODO: -->
            </div>
        </div>
        <div :class="$style['img-wrapper']">
            <img :src="topic.cover_url" />
        </div>
    </a>
</template>

<script>
export default {
    props: {
        topic: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="less" module>
    @comment_color: #191919;
    @tip_color: rgba(0,0,0,.25);
    @border_color: #ededed;

    .comment-item {
        display: flex;
        padding: 15px 15px 15px 0;
        justify-content: space-between;
        margin-right: -15px;
        position: relative;

        &::after {
            content: '';
            display: flex;
            height: 1px;
            background-color: @border_color;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            transform: scale(.5); // TODO:
            transform-origin: left bottom; // TODO:
        }

        .left {
            flex-grow: 1;

            .comment {
                font-size: 17px;
                color: @comment_color;
                margin-bottom: 4px;
            }

            .tips {
                color: @tip_color;
                font-size: 11px;
                display: flex;
                align-items: center;

                .icon {
                    width: 20px;
                    height: 20px;
                    display: block;
                    background-image: url(../assets/comment-icon.png);
                    background-size: 100% 100%;
                }
            }
        }

        .img-wrapper {
            width: 80px;
            min-width: 80px;
            height: 54px;
            margin-left: 15px;
            border: .5px solid rgba(0,0,0,.05);
            border-radius: 4px;

            >img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>