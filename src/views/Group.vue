<template>
    <div>
        <section>
            <h2>热门小组</h2>
            <div>
                <!-- <group-item /> -->
            </div>
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

</style>
