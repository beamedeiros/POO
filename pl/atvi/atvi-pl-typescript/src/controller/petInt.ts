import Pet from "../models/pet"

export default interface petInt {
    create(cpf:string,nome:string,tipo:string,raca:string,genero:string):Pet
    index():Array<Pet>
    update(cpf:string,nome:string,tipo:string,raca:string,genero:string):Pet
    delete(cpf:string, nome:string):void
}