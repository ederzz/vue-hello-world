<template>
    <div>
        <section
            v-for="(item, index) in groupList"
            :key="index"
            :class="$style.chapter"
        >
            <h2 :class="$style['chapter-title']">{{ item.name }}</h2>
            <div>
                <group-item 
                    v-for="group in item.groups"
                    :key="group.id"
                    :remark="group.desc_abstract"
                    :img="group.avatar"
                    :title="group.name"
                    :memberCount="group.member_count"
                />
            </div>
            <div :class="$style['more-group']">更多相关小组</div>
        </section>
    </div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'

import GroupItem from '@/components/Group/GroupItem'

export default {
    components: {
        GroupItem
    },
    computed: {
        ...mapState('group', [
            'groupList'
        ])
    },
    methods: {
        ...mapActions('group', [
            'fetchGroups'
        ])
    },
    created() {
        this.fetchGroups()
    }
}
</script>

<style lang="less" module>
    @title_color: #111;
    @border_color: #e8e8e8;
    @more_group_color: #42bd56;

    .chapter {
        margin-left: 18px;

        &-title {
            color: @title_color;
            font-size: 18px;
        }

        .more-group {
            text-align: center;
            color: @more_group_color;
            font-size: 15px;
            padding: 12px 0;
            margin-bottom: 30px;
            border-bottom: 1px solid @border_color;
        }
    }
</style>
