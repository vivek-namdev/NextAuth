import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = getDataFromToken(request);

        const user = await User.findById(userId).select("-password");

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "User Found",
            data: user,
        });
        
    } catch (error) {
        // Ensure error is typed properly
        if (error instanceof Error) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        } else {
            return NextResponse.json(
                { error: "An unknown error occurred" },
                { status: 400 }
            );
        }
    }
}