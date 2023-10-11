import FormBuilder from "@/components/FormBuilder";
import React from "react";

async function BuilderPage({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const { name } = params;
  
  return <FormBuilder name={name} />;
}

export default BuilderPage;
