abstract class TaskManger{
    protected tasks: string[] = [];

    addTask(task: string): void {}

    listTasks(): string[] {
        return this.tasks;
    }

    protected taskExists(task: string): boolean {
        return this.tasks.includes(task);
    }
}

class Project extends TaskManger{
    addTask(task: string): void {
        if (!this.taskExists(task)) {
            this.tasks.push(task);
        } else {
            console.log(`O projeto "${task}" já existe!.`);
        }
    }

    listTasks(): string[] {
       return this.tasks
    }
}

class DailyTasks extends TaskManger{
    addTask(task: string): void {
        if (!this.taskExists(task)) {
            this.tasks.push(task);
        } else {
            console.log(`A tarefa "${task}" já existe!.`);
        }
    }
    listTasks(): string[] {
        return this.tasks
     }

}

const projeto1 = new Project();
projeto1.addTask("fazer produto novo")
projeto1.addTask("sistemas de tarefas")
projeto1.addTask("site de jogos")
projeto1.addTask("sistemas de tarefas")
console.log(projeto1.listTasks());

console.log("separação");

const tarefa1 = new Project();
tarefa1.addTask("jogar futebol")
tarefa1.addTask("ir na academia")
tarefa1.addTask("assistir anime")
tarefa1.addTask("ir na academia")
console.log(tarefa1.listTasks());

