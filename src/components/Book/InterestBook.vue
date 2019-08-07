<template>
    <div 
        :style="{ borderColor: color }"
        :class="$style['interest-book']"
    >
        <a 
            :style="{ color: color }"
            href=""
        >
            {{ text }}
        </a>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" module>
    .interest-book {
        border: 1px solid transparent;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 8px 8px;
        border-radius: .25rem;
        font-size: .94rem;

        >a {
            font-size: 15px;
            line-height: 50px;
            height: 50px;
            display: block;
            text-decoration: none;
            padding: 0 1.5rem;
        }
    }
</style>