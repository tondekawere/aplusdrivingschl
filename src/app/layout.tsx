

import type { Metadata } from "next";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Plus Driving School",
  description: "A Plus Driving School",
  icons: {
    icon: "favicon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (



    <html lang="en">
      <body >
        {children}

        </body>
    </html>



  );
}
