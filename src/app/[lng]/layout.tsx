import NextTopLoader from "nextjs-toploader";
import { dir } from "i18next";
import { Onest } from "next/font/google";
import "../globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer/footer";
import Providers from "./providers";
import { languages } from "../i18n/settings";
import ThemeRegistry from "../themeRegistry";
import Head from "next/head";
import CallButton from "@/Components/common/callButton/CallButton";

export const metadata = {
  title: {
    default: "Mos Stal Kanat | MSK",
    template: "%s | MSK",
  },
  description: "Увеличиваем прибыль современными технологиями",
  keywords: [],
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

const onest = Onest({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--onest-font",
});

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)} className={onest.className}>
      <Head>
        <link rel="shortcut icon" href="/public/icons/favicon.ico" />
      </Head>
      <body>
        <NextTopLoader
          color="#fff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          // crawl={true}
          showSpinner={false}
          shadow="0 0 10px #fff,0 0 5px #fff"
        />
        <ThemeRegistry options={{ key: "mui" }}>
          <Providers>
            <div>
              <CallButton />
              <Navbar lng={lng} />
              {children}
              <Footer lng={lng} />
            </div>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
