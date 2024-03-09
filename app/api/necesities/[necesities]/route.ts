import { prices } from "@/data";
import { NextResponse } from "next/server";
export async function GET(req,{params: {necesities}}) {
    console.log({req})
    return NextResponse.json(prices[necesities])
    
  }