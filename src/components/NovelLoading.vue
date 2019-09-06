<template>
    <img :class="$style['load-img']" v-show="show" src="../assets/load.svg" />
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" module>
    .load-img {
        position: fixed;
        width: 30px;
        height: 30px;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>