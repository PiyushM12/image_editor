"use client";
import React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react"; // ✅ Required imports
import Provider from "./provider";
const ConvexClientProvider = ({ children }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <ConvexProvider client={convex}>
      <Provider>
        {children}
      </Provider>
      {children}
      </ConvexProvider>
  )
};

export default ConvexClientProvider;
