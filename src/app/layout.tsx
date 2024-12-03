import type { Metadata } from "next";
import Script from "next/script"; // Import component Script

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { SETTINGS } from "@/utils/settings";
import TheHeader from "@/components/common/the-header/page";
import TheFooter from "@/components/common/the-footer/page";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: SETTINGS.GENERAL.NAME_PROJECT,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/assets/logo/favicon.svg" sizes="any" />
      <body>
        {/* Thêm Script vào đây */}
        <Script
          id="fingerprintjs-script"
          strategy="afterInteractive" // Chạy script sau khi DOM đã sẵn sàng
          dangerouslySetInnerHTML={{
            __html: `
              const fpPromise = import("https://openfpcdn.io/fingerprintjs/v4").then(
                (FingerprintJS) => FingerprintJS.load()
              );

              fpPromise
                .then((fp) => fp.get())
                .then((result) => {
                  const visitorId = result.visitorId;
                  console.log("deviceID", visitorId);
                });
            `,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TheHeader />
          <div className="pt-[45px] md:pt-14 lg:pt-16 xl:pt-[70px]">
            {children}
          </div>
          <TheFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
