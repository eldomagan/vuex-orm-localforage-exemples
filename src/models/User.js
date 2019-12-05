import uuidv4 from 'uuid/v4'
import { Model } from '@vuex-orm/core'
import Todo from './Todo'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.uid(() => uuidv4()),
      name: this.string(''),
      todos: this.hasMany(Todo, 'user_id')
    }
  }
}
