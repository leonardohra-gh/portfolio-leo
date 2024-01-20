import { NextResponse } from "next/server";
import dataTabs from "@/public/data_json/data_tabs.json"

export const GET = async(req: Request, res: Response) =>
{
  return NextResponse.json(dataTabs);
}

