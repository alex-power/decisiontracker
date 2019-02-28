import { IDataProvider } from "Frame/DataProviders";

export interface IPageData {
    /**
     * 
     * @param name 
     */
    getDataProvider<DataType>(name: string): IDataProvider<DataType>;

    /**
     * 
     * @param dataProvider 
     * @param name 
     */
    registerDataProvider(dataProvider: IDataProvider<any>, name: string): void;
}
