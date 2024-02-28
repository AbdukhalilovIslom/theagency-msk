"use client";
import { useState, Dispatch, SetStateAction } from "react";
import SidebarContext from "@/context/sidebar.context";
import { Onest } from "next/font/google";
import { PageLoadingAnimation } from "@/Components/common/pageLoader/pageLoader";

interface ProvidersProps {
  children: React.ReactNode;
}

export const onest = Onest({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--onest-font",
});

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <PageLoadingAnimation />
      {children}
    </>
  );
}
