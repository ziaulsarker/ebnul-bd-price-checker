import { prices } from "@/data";
import { NextResponse } from "next/server";
export async function GET(req: any,{params: {necesities}}: any) {
    console.log({req})
    return NextResponse.json(prices[necesities])
    
  }