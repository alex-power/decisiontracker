import { User } from "./UserDataProvider.Types";
import { IDataProvider } from "../IDataProvider";
import { PageContext } from "Frame/Page";
import { CachingDataProvider } from "../CachingDataProvider";
import { RestDataProvider } from "../RestDataProvider";

export interface IUserDataProvider extends IDataProvider<User> {}
export const UserDataProviderName = "IUserDataProvider";

const keyExtractor = (user: User) => {
    return `${user.id}`;
};

PageContext.registerDataProvider(new CachingDataProvider(new RestDataProvider("users"), keyExtractor), UserDataProviderName);
