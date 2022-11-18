import { Service } from "./service";

export class Police extends Service{
    constructor(public override id:string,public nomPoste:string){
        super(id)
    }
}
