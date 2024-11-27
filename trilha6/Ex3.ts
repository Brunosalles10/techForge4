class EmailSender{
    protected contatos: string [] = [];

    envioContatos(contato: string):void{
        if(!this.contatos || this.contatos.includes(contato)){
            console.log("favor informar um email");
            
        }
        else{
            this.contatos.push(contato)
            console.log(`contado adicionado ${contato}`);
            this.emailNotification(contato)
            
        }
    }

    emailNotification(usuario: string){
        const email = `${usuario}@exemplo.com`;
        console.log(`Notificação enviada para: ${email}`);
    }
}

class  ContactValidator extends EmailSender{
    validar(contato: string):void{
        if(!this.contatos || this.contatos.includes(contato)){
            console.log("favor informar um email");
            
        }
        else{
            this.contatos.push(contato)
            console.log(`contado adicionado ${contato}`);
            this.emailNotification(contato)
            
        }
}
}

const us3 = new EmailSender();
us3.envioContatos("bruno salles");
us3.envioContatos("jaoa");
us3.envioContatos("naruto");
us3.envioContatos("bruno salles");