import { Database } from '@vuex-orm/core'
import User from '@/models/User'
import Todo from '@/models/Todo'
import State from '@/models/State'

const database = new Database()

database.register(User)
database.register(Todo)
database.register(State)

export default database
