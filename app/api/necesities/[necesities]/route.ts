import { prices } from "@/data";
import { NextResponse } from "next/server";
export async function GET(req: any,{params: {necesities}}: any) {
    console.log({req})
<<<<<<< HEAD
    return NextResponse.json(prices[necesities])
=======
    
    return NextResponse.json(prices[necesities] || {})
>>>>>>> f2d790cc3ac380787f1de7240abbe65d8a33cea5
    
  }