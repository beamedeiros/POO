import Service from "./service";

export default class compra {
    private service: Service
    private tipo: string
    private raca: string
    private qtd:Number

    constructor(service: Service, qtd: Number, tipo:string, raca:string){
        this.service = service
        this.qtd = qtd
        this.tipo = tipo
        this.raca = raca
    }

    public get getService():Service{
        return this.service   
    }

    public get getQtd():Number{
        return this.qtd
    }

    public get getTipo():string{
        return this.tipo
    }

    public get getRaca():string{
        return this.raca
    }

    public addQtd(qtd:Number):void{
        this.qtd = qtd.valueOf()+this.qtd.valueOf()
    }
}