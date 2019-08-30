import { IDataProvider } from "Frame/DataProviders";
import { IService } from "Frame/Service";

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

    getService<ServiceType extends IService>(name: string): ServiceType;

    registerService(service: IService, name: string): void;
}
