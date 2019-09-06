import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatTime', (val) => moment(val).format('YYYY-MM-DD HH:mm:ss'))
Vue.filter('formatDate', (val) => moment(val).format('YYYY-MM-DD'))