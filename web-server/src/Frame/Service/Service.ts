export interface IService {
    isInitialized(): boolean;
    initialize(): void;
}

export abstract class Service implements IService {
    private init: boolean = false;

    public isInitialized() {
        return this.init;
    }

    public initialize() {
        this.init = true;
    }
}