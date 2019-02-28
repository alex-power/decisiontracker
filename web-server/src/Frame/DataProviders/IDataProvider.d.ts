export interface IDataProvider<DataType, QueryParams = {}> {
    /**
     *
     * @param params
     */
    fetch(params?: QueryParams): Promise<DataType[]>;

    /**
     *
     */
    getAll(): Promise<DataType[]>;
}
