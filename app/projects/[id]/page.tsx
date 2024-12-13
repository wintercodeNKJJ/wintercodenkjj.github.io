/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import PageContent from "@/app/services/[id]/pageContent";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  // const projects = await fetch("/data/projects.json").then((res) => {
  //   return res.json();
  // });

  const filePath = path.join(process.cwd(), "public", "data", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects = JSON.parse(jsonData);

  return projects.map((project: { id: any }) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: any) {
  const { id } = React.use<any>(params);

  return <PageContent id={id} />;
}
