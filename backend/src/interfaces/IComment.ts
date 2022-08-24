export default interface IComment {
  id: number;
  comment: string;
  id_post: number;
  id_user: number;
  update_: Date;
  create_: Date;
  delete_: Date;
}