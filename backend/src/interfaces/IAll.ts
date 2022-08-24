import IComment from "./IComment";
import IUser from "./IUser";
import IFollow from "./IFollow";
import IPost from "./IPost";

export default interface IAll extends IFollow, IUser, IPost, IComment {
  userAll: IUser[];
  postAll: IPost[];
  followAll: IFollow[];
  commentAll: IComment[];
}
