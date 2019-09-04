<template>
    <div :class="$style['category-bar-wrapper']">
        <div :class="$style['category-bar']">
            <div 
                @click="switchCategory"
                data-cate=""
                :class="{ [$style.category]: true, [$style.active]: selectCate === '' }">
                全部
            </div>
            <div 
                :class="{ [$style.category]: true, [$style.active]: selectCate === item }"
                @click="switchCategory"
                :data-cate="item"
                v-for="(item, i) in cates" 
                :key="i">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cates: {
            type: Array,
            default: () => []
        },
        selectCate: {
            type: String,
            default: ''
        }
    },
    methods: {
        switchCategory(e) {
            const {
                cate
            } = e.target.dataset
            this.$emit('switch', cate);
        }
    }
}
</script>

<style lang="less" module>
    @color: #777979;
    @cate_margin_r: 12px;
    @cate_bg: #fcede9;
    @active_color: #ee3e3e;

    .category-bar-wrapper {
        overflow: hidden;

        .category-bar {
            overflow: auto;
            white-space: nowrap;
            padding-bottom: 20px;
            margin-bottom: -20px;
            padding-left: 15px;

            .category {
                display: inline-block;
                color: @color;
                font-weight: 300;
                margin-right: @cate_margin_r;
                vertical-align: middle;
                padding: 4px 5px;
                border-radius: 2px;
                font-size: 12px;

                &.active {
                    background-color: @cate_bg;
                    color: @active_color;
                }
            }
        }
    }
</style>