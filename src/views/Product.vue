<template>
    <div>
        <section :class="$style['banner-wrapper']">
            <van-swipe :width="414" :height="207" :autoplay="3000" indicator-color="white">
                <van-swipe-item 
                    v-for="(item, index) in banner" 
                    :key="index"
                >
                    <img :class="$style.banner" :src="item.image" />
                </van-swipe-item>
            </van-swipe>
        </section>
        <section>
            <h2 :class="$style.header">新品首发</h2>
            <div :class="$style['products-wrapper']">
                <product-item 
                    v-for="item in products"
                    :key="item.id"
                    :cover="item.image"
                    :title="item.title"
                    :desc="item.desc"
                    :price="item.price_couple[0]"
                    :tag="item.tag"
                    :canBuy="item.can_buy"
                />
            </div>
        </section>
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import { Swipe, SwipeItem } from 'vant'
import ProductItem from '@/components/Product/ProductItem'

export default {
    components: {
        ProductItem,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
    },
    computed: {
        ...mapState('product', [
            'products',
            'banner',
        ])
    },
    methods: {
        ...mapActions('product', [
            'fetchProducts'
        ])
    },
    created() {
        this.fetchProducts()
        console.log(this.banner)
    }
}
</script>

<style lang="less" module>
    @header_color: #3e3a39;

    .banner-wrapper,
    .banner {
        width: 100%;
        height: 207px;
    }

    .header {
        margin: 0;
        font-size: 18px;
        color: @header_color;
        font-weight: 700;
        line-height: 1.4;
        padding: 22px 22px 15px;
    }
    .products-wrapper {
        margin: 0 11px;
        overflow: hidden;
    }
</style>
