import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from  './getters'
Vue.use(Vuex);

let  state={books:[]};

export default new Vuex.Store({
  state,mutations,getters,
  strict:true,
  plugins:[logger]
});
