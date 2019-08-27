import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMLocalForage from 'vuex-orm-localforage'
import database from '@/database'

Vue.use(Vuex)

VuexORM.use(VuexORMLocalForage, { database })

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
