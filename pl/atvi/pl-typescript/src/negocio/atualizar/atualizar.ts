export default abstract class Atualizar<T> {
    public abstract atualizar(id: number, objeto: T) : T | null;
}