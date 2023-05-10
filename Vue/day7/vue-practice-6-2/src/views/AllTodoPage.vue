<template>
  <div>
    <h1>모든 할 일</h1>
    <hr>
    <ul :v-for="todo in todolist">
        <li>{{todo.content}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

// const todos = 'todos'

export default {
    name: 'AllTodopage',
    data() {
        return {
            // todolist : '',
        }
    },
    computed:mapState({
        todolist: state => state.todos.todolist
        }),
    methods: {
        },
}
</script>

<style>

</style>