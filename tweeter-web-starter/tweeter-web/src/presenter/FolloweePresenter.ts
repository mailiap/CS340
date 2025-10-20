import { AuthToken, User } from "tweeter-shared";
import { FollowService } from "../model.service/FollowService";
import { UserItemPresenter } from "./UserItemPresenter";
import { PAGE_SIZE, PagedItemView } from "./PagedItemPresenter";

export class FolloweePresenter extends UserItemPresenter {
  protected itemDescription(): string {
    return "load followees";
  }

  protected getMoreItems(
    authToken: AuthToken,
    userAlias: string
  ): Promise<[User[], boolean]> {
    return this.service.loadMoreFollowees(
      authToken,
      userAlias,
      PAGE_SIZE,
      this.lastItem
    );
  }
}