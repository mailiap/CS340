import { AuthToken, User } from "tweeter-shared";
import { PagedItemPresenter, PagedItemView } from "./PagedItemPresenter";
import { FollowService } from "../model.service/FollowService";

export abstract class UserItemPresenter extends PagedItemPresenter<
  User,
  FollowService
> {
  protected serviceFactory(): FollowService {
    return new FollowService();
  }
}