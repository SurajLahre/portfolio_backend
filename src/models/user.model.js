import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: trim,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: trim,

    },
    fullname: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: trim,
        index: true

    },
    avatar: {
        type: String,
        required: true

    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        requered: [true, 'password is requered']
    },
    refreshToken: {
        type: String
    }
},
    {
        timestamps: true
    }
)


export const User = mongoose.model("User", userSchema)