"use client";
import React, { useState, useEffect } from "react";
import Loader from "@/components/ui/Loader";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Adjust time
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loader finishLoading={() => setIsLoading(false)} />
  ) : (
    children
  );
};

export default LayoutWrapper;
