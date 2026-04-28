import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rohail Zubair — DevOps Engineer",
  description:
    "DevOps Engineer specializing in multi-cloud architecture (GCP/Azure), CI/CD automation, Kubernetes, and enterprise security compliance. Available for freelance and consulting.",
  keywords: ["DevOps", "GCP", "Azure", "Kubernetes", "CI/CD", "Terraform", "Cloud Infrastructure"],
  authors: [{ name: "Rohail Zubair" }],
  openGraph: {
    title: "Rohail Zubair — DevOps Engineer",
    description: "Building infrastructure that never sleeps. Multi-cloud, CI/CD, and enterprise security at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: '#0A0E1A', color: '#E8F0FE', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
