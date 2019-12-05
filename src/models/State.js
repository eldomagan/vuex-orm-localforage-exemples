import { Model } from '@vuex-orm/core'

export default class State extends Model {
  static entity = 'states'

  static fields () {
    return {
      id: this.attr(),
      name: this.string(''),
      todo_id: this.attr()
    }
  }
}
