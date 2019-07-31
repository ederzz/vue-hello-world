<template>
    <router-link :style="style" class="nav" :to="to">
        <strong
            :style="titleStyle"
            class="title"
        >{{ title }}</strong>
        <span class="content">{{ content }}</span>
    </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '/',
    },
    titleColor: {
      type: String,
      default: '',
    },
    style: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    titleStyle() {
      return {
        color: this.titleColor,
      };
    },
  },
};
</script>

<style lang="less" scoped>
    @content_color: #818181;
    @title_font_size: 23px;
    @content_font_size: 13px;
    @border_color: rgba(236,236,236,0.5);

    .nav {
        width: 50%;
        float: left;
        padding: 27px;
        text-decoration: none;
        box-sizing: border-box;
        // border: .5px solid @border_color;

        .title,
        .content {
            display: block;
            text-align: center;

            &.title {
                font-size: @title_font_size;
            }

            &.content {
                color: @content_color;
                font-size: @content_font_size;
            }
        }
    }
</style>
