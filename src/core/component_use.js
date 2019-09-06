
import Vue from 'vue'
import {
    Skeleton,
    Swipe, 
    SwipeItem,
    Toast
} from 'vant'

Vue.use(Skeleton)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.prototype.$message = Toast