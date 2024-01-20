import { NextResponse } from "next/server";
import dataProjects from "@/public/data_json/data_projects.json"

export const GET = async(req: Request, res: Response) =>
{
  const id = req.url.split("projects/")[1]
  const filteredData = dataProjects.filter((item) => item.id === id)[0];
  return NextResponse.json(filteredData);
}

