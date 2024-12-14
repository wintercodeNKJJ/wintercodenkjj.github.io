/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import PageContent from "./pageContent";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "data", "services.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const services = JSON.parse(jsonData);

  return services.map((service: { id: any }) => ({
    id: service.id,
  }));
}

export default function ServicePage({ params }: any) {
  const { id } = React.use<any>(params);
  return <PageContent id={id} />;
}
