class Agenda {

    private compromissos: string[];


    constructor(compromissos: string[]) {
        this.compromissos = compromissos;
        
    }

    public add(compromisso: string){
       return this.compromissos.push(compromisso);
        
        

    }

    public all(){
        return this.compromissos;
    }

    exibir(): void {
        for (const agenda of this.compromissos){
        console.log(`compromissos`,(agenda))
    };
        
        
    }
}

const com1 = new Agenda([]);
com1.add('joga bola');
com1.add('correr');
com1.exibir();