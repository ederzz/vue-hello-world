<template>
    <div :class="$style['group-item']">
        <div :class="$style['group_meta']">
            <img :class="$style['group-icon']" :src="img" />
            <span :class="$style['group_title']">{{ title }}</span>
            <span :class="$style['group_member--count']">{{ memberCount }}</span>
        </div>
        <div :class="$style['group_topic']">{{ remark }}</div>
    </div>
</template>

<script>
export default {
    props: {
        remark: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        memberCount: {
            type: Number,
            default: 0
        },
    },
}
</script>

<style lang="less" module>
    @topic_color: #aaa;
    @count_color: #ccc;
    @title_color: #111;
    @border_color: #e8e8e8;

    .group-item {
        padding: 15px 18px 15px 0;

        &::after {
            content: '';
            display: block;
            height: 1px;
            background-color: @border_color;
        }

        .group_meta {
            display: flex;
            align-items: center;

            .group_icon {
                width: 40px;
                height: 40px;
                border: 1px solid #f1f1f1;
            }

            .group_title {
                color: @title_color;
                font-size: 18px;
                flex: 1;
                padding: 0 10px;
            }

            .group_member--count {
                font-size: 15px;
                color: @count_color;
            }
        }

        .group_topic {
            color: @topic_color;
            font-size: 15px;
            margin-top: 10px;
        }
    }
</style>