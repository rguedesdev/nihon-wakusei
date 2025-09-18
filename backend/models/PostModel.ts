import nihonwakuseiDB from "../db/nihonwakuseiconn.ts";
import { Schema } from "mongoose";

interface IPost {
  // mainImagePost: string;
  postLabel: string;
  postCategory: string;
  postTitle: string;
  newsText: string;
  // newsImages: [];
  authorID: string;
  // authorPicture: string;
  authorName: string;
  authorDescription: string;
  //   postComments: object;
}

const postSchema = new Schema<IPost>(
  {
    postLabel: {
      type: String,
    },
    postCategory: {
      type: String,
    },
    postTitle: {
      type: String,
    },
    newsText: {
      type: String,
    },
    // newsImages: {
    //   type: [],
    // },
    authorID: {
      type: String,
    },
    // authorPicture: {
    //   type: String,
    // },
    authorName: {
      type: String,
    },
    authorDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

const PostModel = nihonwakuseiDB.model<IPost>("Posts", postSchema);

export { PostModel };
