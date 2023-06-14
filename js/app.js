const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputTask: "",
            tasks: [],
            error: "",
            showError: false,
        }
    },
    computed: {
        isReady() {
            return this.tasks.length > 1;
        }
    },
    methods: {
        addTaskToList() {
            const taskName = this.inputTask;

            if (this.validate(taskName)) {
                this.tasks.push(taskName);
                this.inputTask = '';
                this.showError = false;
                console.log(this.tasks);
            } else {
                this.showError = true;
            }
        },
        deleteTask (index){
            this.tasks.splice(index, 1)
        },
        validate(value) {
            this.error = '';
            if (value === "") {
                this.error = "Campo obrigatário"
                return false;
            }
            if (this.tasks.includes(value)) {
                this.error = "Tarefa já cadastrada";
                return false;
            }
            return true;
        }
    },

}).mount('#app')
