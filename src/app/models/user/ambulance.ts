import { Service } from "./service";

export class Ambulance extends Service {
    constructor(public override id:string,public nomAgence:string,public adresse:string){
        super(id)
    }
}
