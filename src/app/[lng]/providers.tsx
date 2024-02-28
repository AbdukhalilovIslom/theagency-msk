"use client";
import { useState, Dispatch, SetStateAction } from "react";
import SidebarContext from "@/context/sidebar.context";
import { Onest } from "next/font/google";
import { PageLoadingAnimation } from "@/Components/common/pageLoader/pageLoader";

interface ProvidersProps {
  children: React.ReactNode;
}

interface SidebarValue {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const onest = Onest({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--onest-font",
});

export default function Providers({ children }: ProvidersProps) {
  const [open, setOpen] = useState(false);
  const sidebarValue: SidebarValue = { open, setOpen };

  return (
    <>
      <SidebarContext.Provider value={sidebarValue}>
        <PageLoadingAnimation />
        {children}
      </SidebarContext.Provider>
    </>
  );
}
