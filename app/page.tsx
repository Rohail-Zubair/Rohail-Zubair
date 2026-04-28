import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import MetricsBar from "@/components/home/MetricsBar";
import FeaturedCaseStudies from "@/components/home/FeaturedCaseStudies";
import TechStack from "@/components/home/TechStack";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Rohail Zubair — DevOps Engineer | Multi-Cloud Infrastructure & CI/CD",
  description:
    "DevOps Engineer specializing in GCP/Azure multi-cloud infrastructure, CI/CD automation, and enterprise security compliance. 99.99% uptime, 40% faster deployments, 30% cost reduction.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <FeaturedCaseStudies />
      <TechStack />
      <CTASection />
    </>
  );
}
