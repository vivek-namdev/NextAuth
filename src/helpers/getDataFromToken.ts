import  jwt  from 'jsonwebtoken';
import { NextRequest } from "next/server";

interface DecodedToken  {
    id: string
}

export const getDataFromToken = (request: NextRequest):string => {
    try {
        const token = request.cookies.get("token")?.value || '';
        if(!token) {
            throw new Error("Token not found in cookies");
        }

        const decodeToken = jwt.verify(token, process.env.TOKEN_SECRET!) as DecodedToken;
        return decodeToken.id;

    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occured while verifying the token");
        }
    }
}