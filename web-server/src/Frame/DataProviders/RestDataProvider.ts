import { IDataProvider } from "./IDataProvider";
import axios, { AxiosResponse } from "axios";

export class RestDataProvider<DataType, QueryArgs = {}> implements IDataProvider<DataType, QueryArgs> {
    constructor(private endpointName: string) {}

    public fetch(params?: {}): Promise<DataType[]> {
        return axios.get<DataType[]>(`http://localhost:3001/${this.endpointName}`).then(this.translateRestResponse);
    }

    public getAll(): Promise<DataType[]> {
        return this.fetch();
    }

    private translateRestResponse = (response: AxiosResponse<DataType[]>) => {
        if (response.status !== 200) {
            console.error(`Unable to fetch from /${this.endpointName} - Response: ${response.status} - ${response.statusText}`);
            return [];
        } else {
            return response.data;
        }
    };
}
