import { useContext } from "react";
import { UserInfoActionsContext, UserInfoContext } from "./UserInfoContexts";
import { AuthToken, FakeData, User } from "tweeter-shared";
import { useMessageActions } from "../toaster/MessageHooks";
import { useNavigate } from "react-router-dom";

interface UserInfoActions {
  updateUserInfo: (
    currentUser: User,
    displayedUser: User | null,
    authToken: AuthToken,
    remember: boolean
  ) => void;
  clearUserInfo: () => void;
  setDisplayedUser: (user: User) => void;
}

interface UserNavigation {
  navigateToUser: (event: React.MouseEvent, url: string) => Promise<void>;
}

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

export const useUserInfoActions = (): UserInfoActions => {
  return useContext(UserInfoActionsContext);
};

export const useUserNavigation = (): UserNavigation => {
  const { displayErrorMessage } = useMessageActions();
  const { displayedUser, authToken } = useUserInfo();
  const { setDisplayedUser } = useUserInfoActions();
  const navigate = useNavigate();

  const navigateToUser = async (
    event: React.MouseEvent,
    url: string
  ): Promise<void> => {
    event.preventDefault();

    try {
      const alias = extractAlias(event.target.toString());

      const toUser = await getUser(authToken!, alias);

      if (toUser) {
        if (!toUser.equals(displayedUser!)) {
          setDisplayedUser(toUser);
          navigate(`${url}/${toUser.alias}`);
        }
      }
    } catch (error) {
      displayErrorMessage(`Failed to get user because of exception: ${error}`);
    }
  };

  const extractAlias = (value: string): string => {
    const index = value.indexOf("@");
    return value.substring(index);
  };

  const getUser = async (
    authToken: AuthToken,
    alias: string
  ): Promise<User | null> => {
    // TODO: Replace with the result of calling server
    return FakeData.instance.findUserByAlias(alias);
  };

  return { navigateToUser };
};