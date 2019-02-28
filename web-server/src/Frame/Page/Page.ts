import { IPageData } from "./PageData";
import { IDataProvider } from "Frame/DataProviders";

class PageData implements IPageData {
    private dataProviders: { [name: string]: IDataProvider<any> } = {};

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
}

export const Page: IPageData = new PageData();
