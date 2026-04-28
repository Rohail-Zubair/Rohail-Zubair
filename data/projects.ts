export interface Project {
  name: string;
  desc: string;
  tags: string[];
  type: 'professional' | 'academic';
  year: string;
}

export const projects: Project[] = [
  {
    name: "CI/CD Pipeline Templates",
    desc: "Production-ready GitHub Actions, Jenkins, and Cloud Build pipeline configurations with multi-stage Docker builds, Poetry dependency caching, registry-based layer caching, and Slack deployment notifications. Used across 10+ production services at QLU.ai.",
    tags: ["GitHub Actions", "Jenkins", "Cloud Build", "Docker", "Poetry"],
    type: "professional",
    year: "2024",
  },
  {
    name: "Zero-Downtime DB Migration Runbook",
    desc: "Documented runbook and shell scripts for migrating PostgreSQL from GCE to Cloud SQL via Google Cloud Storage, with pgBouncer connection pooling setup, data integrity validation procedures, and rollback plan. Executed successfully across multiple production databases.",
    tags: ["PostgreSQL", "Cloud SQL", "pgBouncer", "Bash", "GCP"],
    type: "professional",
    year: "2024",
  },
  {
    name: "GCP Infrastructure Terraform Modules",
    desc: "Multi-environment GCP infrastructure (dev/staging/prod) using reusable Terraform modules for Cloud Run, Cloud SQL with HA, Secret Manager, Cloud Armor WAF, VPC networking, IAM roles, and Cloud Scheduler. Supports isolated environment promotion workflows.",
    tags: ["Terraform", "GCP", "Cloud Run", "Cloud SQL", "IaC"],
    type: "professional",
    year: "2024",
  },
  {
    name: "Elasticsearch Cluster Tuning Playbook",
    desc: "Operational playbook covering JVM heap sizing, G1GC configuration, shard strategy guidelines, ILM hot-warm-cold policies, index mapping optimisations, and load testing scripts using JMeter and K6. Based on production tuning that achieved 50% query performance improvement.",
    tags: ["Elasticsearch", "K6", "JMeter", "JVM", "GKE"],
    type: "professional",
    year: "2024",
  },
  {
    name: "GCP Cost Optimisation Toolkit",
    desc: "Terraform-based snapshot lifecycle automation, Cloud Logging exclusion filter templates, BigQuery billing export queries for per-product cost attribution, and Cloud Scheduler jobs for orphaned resource cleanup. Reduced monthly GCP spend by 30% at QLU.ai.",
    tags: ["Terraform", "BigQuery", "Cloud Scheduler", "FinOps", "Python"],
    type: "professional",
    year: "2024",
  },
  {
    name: "Doctor Appointment System",
    desc: "Dockerized microservices application with seamlessly integrated CI/CD pipelines and optimised Kubernetes Deployments and Services. Each service containerised independently, with GitHub Actions triggering automated builds and Kubernetes rolling updates on merge.",
    tags: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Microservices"],
    type: "academic",
    year: "2023",
  },
  {
    name: "Microservices & CI/CD Pipeline Builder",
    desc: "Converted a monolithic application to microservices on AWS, building a full CI/CD pipeline using CodeCommit, CodePipeline, CodeBuild, and CodeDeploy. Deployed on ECS Fargate with RDS, load balancing via ELB, VPC networking, IAM roles, and CloudWatch logging.",
    tags: ["AWS ECS", "CodePipeline", "RDS", "VPC", "CloudWatch"],
    type: "academic",
    year: "2023",
  },
];
