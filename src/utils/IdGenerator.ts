export class IdGenerator {
    private static id = 0;

    static getId = () => IdGenerator.id++;
}