import { IDataProvider } from "./IDataProvider";

export class CachingDataProvider<DataType, QueryArgs> implements IDataProvider<DataType, QueryArgs> {
    private cache: { [key: string]: DataType } = {};

    constructor(private childProvider: IDataProvider<DataType, QueryArgs>, private keyExtractor: (item: DataType) => string) {}

    public fetch(params: QueryArgs): Promise<DataType[]> {
        return this.childProvider.fetch(params).then(this.cacheValues);
    }

    public getAll(): Promise<DataType[]> {
        const returnVal: DataType[] = [];

        for (let key in this.cache) {
            returnVal.push(this.cache[key]);
        }

        return Promise.resolve(returnVal);
    }

    public getByKey(key: string): Promise<DataType> {
        return Promise.resolve(this.cache[key]);
    }

    private cacheValues = (values: DataType[]) => {
        for (let item of values) {
            this.cache[this.keyExtractor(item)] = item;
        }

        return values;
    };
}
