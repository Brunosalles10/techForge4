class UserManager {
    protected usuarios: string[] = [];
    users(novo: string): void {

        this.usuarios.push(novo)
        const mensagem = `novo usuario adicionado: ${novo}`
        console.log(mensagem);


       this.emailNotification(novo);
    }

    emailNotification(usuario: string){
        const email = `${usuario}@exemplo.com`;
        console.log(`Notificação enviada para: ${email}`);
    }


}

class EmailNotification {
    envio(usuario: string): void {
        const email = `${usuario}@exemplo.com`; 
        console.log(`Notificação enviada para: ${email}`); 
    }
}


class UserManagerrff {
    protected usuarios: string[] = []; 
    private emailNotification: EmailNotification; 

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification; 
    }

   
    users(novo: string): void {
        this.usuarios.push(novo); 
        const mensagem = `Novo usuário adicionado: ${novo}`; 
        console.log(mensagem); 

        
        this.emailNotification.envio(novo);
    }
}


const emailNotificacao2 = new EmailNotification();


const us2 = new UserManagerrff(emailNotificacao2);
us2.users("bruno salles");

const us1 = new UserManager();
us1.users("bruno salles")

