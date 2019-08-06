<template>
    <div ::class="$style.product">
        <div :class="$style['product_cover']">
            <img />
        </div>
        <div :class="$style['product_info']">
            <p :class="$style['product_title']"></p>
            <p :class="$style['product_desc']"></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cover: '',
            title: '防水防晒，真正晴雨两用',
            desc: '防水翻晒',
            price: 138,
            tag: '当季热卖'
        }
    }
}
</script>

<style lang="less" module>
    @title_color: #3e3a39;
    @desc_color: #ababac;
    // TODO: 已售罄，less变量

    .product {
        width: 50%;
        float: left;

        .product_cover {
            width: 180px;
            height: 180px;
        }

        .product_info {
            .product_title {
                color: @title_color;
                font-size: 15px;
                line-height: 21px;
            }

            .product_desc {
                font-size: 13px;
                line-height: 18px;
                color: @desc_color;
            }
        }
    }
</style>