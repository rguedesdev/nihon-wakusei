import nihonwakuseiDB from "../db/nihonwakuseiconn.ts";
import mongoose, { Schema } from "mongoose";

interface IComment {
  userCommentID: mongoose.Types.ObjectId;
  commentText: string;
}

interface IPost {
  mainImagePost: string;
  postLabel: string;
  postCategory: string;
  postTitle: string;
  newsText: string;
  // newsImages: [];
  authorID: mongoose.Types.ObjectId;
  // authorPicture: string;
  authorName: string;
  authorDescription: string;
  postComments: IComment[];
}

const commentPostSchema = new Schema<IComment>(
  {
    userCommentID: {
      type: Schema.Types.ObjectId,
      ref: "Users", // <- isso deve ser exatamente o nome do modelo registrado
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const postSchema = new Schema<IPost>(
  {
    mainImagePost: {
      type: String,
      required: true,
    },
    postLabel: {
      type: String,
      required: true,
    },
    postCategory: {
      type: String,
      required: true,
    },
    postTitle: {
      type: String,
      required: true,
    },
    newsText: {
      type: String,
      required: true,
    },
    // newsImages: {
    //   type: [],
    // },
    authorID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    // authorPicture: {
    //   type: String,
    // },
    authorName: {
      type: String,
      required: true,
    },
    authorDescription: {
      type: String,
      required: true,
    },
    postComments: {
      type: [commentPostSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const PostModel = nihonwakuseiDB.model<IPost>("Posts", postSchema);

export { PostModel };
