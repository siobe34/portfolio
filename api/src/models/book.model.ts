import mongoose from "mongoose";

export interface BookInput {
    title: string;
}
export interface BookDocument extends mongoose.Document {
    title: string;
}

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const BookModel = mongoose.model<BookDocument>("Book", bookSchema);

export default BookModel;
