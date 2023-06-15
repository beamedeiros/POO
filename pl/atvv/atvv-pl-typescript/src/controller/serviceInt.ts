import Service from "../models/service"
import Servico from "../models/servico"

export default abstract class serviceInt{
    abstract create(nome:string,valor:Number):Service
    abstract index():Array<Service>
    abstract update(nome:string,valor:Number):Service
    abstract delete(nome:string):void
}