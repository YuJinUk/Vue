<template>
  <div>
    <input type="text" v-model.trim="todoTitle" @keyup.enter="createTodo">
  </div>
</template>

<script>
export default {
    name: 'TodoForm',
    components: {

    },
    data() {
        return {
            todoTitle: null,
        }
    },
    methods: {
        createTodo() {
            console.log(this.todoTitle)
            if (this.todoTitle){
            this.$store.dispatch('createTodo', this.todoTitle)
            }else{
                window.alert('할일이 그렇게 없나?')
            }
            this.todoTitle = null
        }
    },
}
</script>

<style>

</style>