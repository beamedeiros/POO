export default class Armazem<T> {
    private objetos: Array<T> = []
    public obterObjetos() {
        return this.objetos
    }
}