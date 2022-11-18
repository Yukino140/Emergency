import { Service } from "./service";

export class Remorquere extends Service{
    
    constructor(public override id:string ,public nom: string,public adresse: string){
        super(id)
    }
}
