import type { Metadata } from "next";
import { ReactNode } from "react"; // Import ReactNode



export const metadata: Metadata = {
  title: "A Plus Driving School",
  description: "A Plus Driving School",
  icons: {
    icon: "favicon.svg",
  },
};

interface RootLayoutProps {
  // Define interface for props
  children: ReactNode; // Define children prop type as ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Use defined interface
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
