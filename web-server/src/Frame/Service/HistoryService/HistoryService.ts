import { Service, IService } from "Frame/Service";
import { PageContext } from "Frame/Page";

export interface IHistoryState {
    id: string;
    url?: string;
    data: { [key: string]: string }
}

export interface IHistoryService extends IService {
    getState(): IHistoryState;
    pushState(state: IHistoryState): void;
    replaceState(state: IHistoryState): void;
}

class HistoryService extends Service implements IHistoryService {
    public getState() {
        return window.history.state as IHistoryState;
    }

    public pushState(state: IHistoryState) {
        window.history.pushState(state, state.id, state.url || window.location.href);
    }

    public replaceState(state: IHistoryState) {
        window.history.replaceState(state, state.id, state.url || window.location.href);
    }
}

export const HistoryServiceName: string = "IHistoryService";
PageContext.registerService(new HistoryService(), HistoryServiceName);