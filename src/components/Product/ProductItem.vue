<template>
    <div :class="$style.product">
        <div :class="$style.box">
            <div :class="$style['product_cover']">
                <i :class="$style.block"></i>
                <img :class="$style.cover" :src="cover" />
                <div 
                    v-if="!canBuy"
                    :class="$style.can_buy"
                >已售罄</div>
            </div>
            <div :class="$style['product_info']">
                <p :class="[ $style['product_title'], $style.ellipsis ]">{{ title }}</p>
                <p :class="[ $style['product_desc'], $style.ellipsis ]">{{ desc }}</p>
                <div :class="$style.bot">
                    <span :class="$style.price">{{ price }}</span>
                    <span
                        v-if="tag"
                        :class="$style.tag"
                    >{{ tag }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cover: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        price: {
            type: String,
            default: ''
        },
        tag: {
            type: String,
            default: ''
        },
        canBuy: {
            type: Boolean,
            default: true
        }
    },
}
</script>

<style lang="less" module>
    @title_color: #3e3a39;
    @desc_color: #ababac;
    @price_color: #dd1944;
    @product-prefix: product_;
    @can_buy_bg: hsla(0,0%,85%,.8);

    .ellipsis {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .product {
        width: 50%;
        float: left;
        box-sizing: border-box;

        .box {
            margin: 0 5px 15px 11px;
        }

        .@{product-prefix}cover {
            width: 100%;
            background-color: #ccc;
            position: relative;

            .block {
                width: 0;
                margin-top: 100%;
                display: inline-block;
            }

            .cover {
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }

            .can_buy {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 26px;
                font-size: 13px;
                line-height: 26px;
                color: #fff;
                background-color: @can_buy_bg;
                text-align: center;
            }
        }

        .@{product-prefix}info {
            .@{product-prefix}title {
                color: @title_color;
                font-size: 15px;
                line-height: 21px;
                padding-top: 8px;
            }

            .@{product-prefix}desc {
                font-size: 13px;
                line-height: 18px;
                color: @desc_color;
                margin-bottom: 2px;
                min-height: 18px;
            }

            .bot {
                color: @price_color;
                font-size: 15px;
                font-family: PingFang SC;

                .price {
                    margin-right: 6px;
                    display: inline-block;
                    vertical-align: middle;

                    &::before {
                        content: '\A5';
                        display: inline-block;
                        margin-right: 2px;
                    }
                }

                .tag {
                    font-size: 12px;
                    background-color: #dd1944;
                    line-height: 19px;
                    margin-right: 6px;
                    color: #fff;
                    padding: 0 3px;
                    transform: scale(.8);
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }
    }
</style>