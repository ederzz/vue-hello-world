<template>
    <div :class="$style['rank-item-title']">
        <div :class="$style.mark">WEEK</div>
        <div :class="$style.title">豆瓣周榜</div>
        <div :class="$style['sub-title']">华语口碑剧集</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" module>
    @title_color: rgba(255,255,255,.6);
    @mark_color: rgba(255,255,255,.9);

    .rank-item-title {
        width: 100px;
        height: 100px;
        background-color: rgb(76, 60, 42);
        color: #fff;
        font-size: 13px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .mark {
            position: absolute;
            top: 22px;
            opacity: .1;
            color: @mark_color;
            font-size: 30px;
            font-weight: 500;
            width: 100%;
            text-align: center;
        }

        .title {
            color: @title_color;
            text-align: center;
            margin-bottom: 4px;
        }

        .sub-title {
            font-size: 17px;
            text-align: center;
            margin-bottom: 2px;
            padding: 0 10px;
        }
    }
</style>