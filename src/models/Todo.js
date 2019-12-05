import uuidv4 from 'uuid/v4'
import { Model } from '@vuex-orm/core'
import User from './User'
import State from './State'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.uid(() => uuidv4()),
      user_id: this.attr(),
      title: this.string(''),
      done: this.boolean(false),
      state: this.hasOne(State, 'todo_id'),
      assignee: this.belongsTo(User, 'user_id')
    }
  }
}
