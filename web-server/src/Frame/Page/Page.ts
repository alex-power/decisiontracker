import { IPageData } from "./PageData";
import { IDataProvider } from "Frame/DataProviders";
import { IService } from "Frame/Service";

class PageContextImpl implements IPageData {
    private dataProviders: { [name: string]: IDataProvider<any> } = {};
    private services: { [name: string]: IService } = {};

    public getDataProvider<DataType>(name: string): IDataProvider<DataType> {
        if (this.dataProviders[name]) {
            // TODO: Safety check on DataType
            return this.dataProviders[name] as IDataProvider<DataType>;
        } else {
            throw new Error(`Could not find data provider with name ${name}`);
        }
    }

    public registerDataProvider<DataType>(dataProvider: IDataProvider<DataType>, name: string): void {
        if (!this.dataProviders[name]) {
            this.dataProviders[name] = dataProvider;
        } else {
            throw new Error(`Attempted re-registration of data provider with name ${name}`);
        }
    }

    public getService<ServiceType extends IService>(name: string): ServiceType {
        if(this.services[name]) {
            const service = this.services[name] as ServiceType;
            service.isInitialized() === false && service.initialize();
            return service;
        } else {
            throw new Error(`Could not find service with name ${name}`);
        }
    }

    public registerService(service: IService, name: string, initializeImmediately: boolean = false): void {
        if(!this.services[name]) {
            this.services[name] = service;

            if(initializeImmediately) {
                service.initialize();
            }
        } else {
            throw new Error(`Attempted re-registration of service with name ${name}`);
        }
    }
}

export const PageContext: IPageData = new PageContextImpl();
