import { ProviderType } from "../types/appTypes";
import { CreateHeaderProvider } from "./HeaderProvider";

export const AppProviders = ({ children }: ProviderType) => {
  return <CreateHeaderProvider>{children}</CreateHeaderProvider>;
};
