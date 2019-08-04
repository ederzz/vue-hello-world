<template>
    <div :class="$style['rank-item-title']">
        <img src="https://img1.doubanio.com/img/files/file-1543460329.png" />
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" module>
    .rank-item-title {
        width: 100px;
        height: 100px;
        background-color: rgb(50, 50, 59);

        >img {
            width: 100px;
            height: 100px;
        }
    }
</style>