'use client';
import React from "react";
import { TextField } from "@radix-ui/themes";

function NewIssuePage() {
  return (
    <div className="max-w-xl">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
    </div>
  );
}

export default NewIssuePage;
