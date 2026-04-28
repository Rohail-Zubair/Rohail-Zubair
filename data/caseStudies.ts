export interface CaseStudyMetric {
  label: string;
  value: string;
  icon: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  client: string;
  duration: string;
  featured: boolean;
  heroMetric: string;
  metrics: CaseStudyMetric[];
  problem: string;
  solutionSteps: string[];
  architectureDiagram: string;
  results: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cicd-pipeline-optimization",
    title: "Cutting Deployment Time by 40% Across 10+ Production Services",
    category: "CI/CD",
    tags: ["GitHub Actions", "Jenkins", "Cloud Build", "Docker", "Poetry"],
    client: "QLU.ai",
    duration: "Ongoing",
    featured: true,
    heroMetric: "40% Faster Deployments",
    metrics: [
      { label: "Deployment Time Reduction", value: "40%", icon: "zap" },
      { label: "Production Services", value: "10+", icon: "server" },
      { label: "Pipeline Reliability", value: "99.9%", icon: "shield" },
      { label: "Build Cache Hit Rate", value: "85%", icon: "database" },
    ],
    problem: "At QLU.ai, the engineering team managed 10+ production-grade products across a hybrid CI/CD setup spanning Jenkins, GitHub Actions, and Google Cloud Build. Deployments averaged 18–25 minutes with no deterministic dependency resolution — pip would silently resolve different package versions across runs, causing intermittent failures that only surfaced in production. There was no build caching strategy, every push triggered a full rebuild regardless of what changed, and secrets were stored as plaintext environment variables across repositories. Developer productivity was being directly impacted: engineers routinely blocked release queues waiting on broken pipelines, and rollbacks required manual SSH intervention.",
    solutionSteps: [
      "Conducted a full pipeline audit across all 10+ repositories, cataloguing average build times, failure rates, and common failure modes per service",
      "Introduced multi-stage Docker builds with explicit layer separation — base image, dependency installation, and application code built as distinct stages to maximize layer cache reuse",
      "Migrated all Python services from pip to Poetry, enforcing lockfile-based dependency resolution to eliminate environment drift between local, CI, and production",
      "Configured registry-based Docker layer caching using Google Container Registry (GCR) as the cache source, cutting dependency installation time by over 60% on cache hits",
      "Implemented webhook-based path filtering in GitHub Actions — pushes to infrastructure directories trigger Cloud Build; pushes to application code trigger Actions, eliminating cross-triggering and redundant runs",
      "Migrated all secrets from plaintext environment variables to GCP Secret Manager with per-service IAM bindings, accessed at runtime via Workload Identity Federation",
      "Built a reusable Slack notification workflow step that posts deployment summaries — service name, commit SHA, deploy duration, and environment — to the engineering channel on both success and failure",
    ],
    architectureDiagram: `flowchart LR
    A[Git Push] -->|Webhook| B{Path Filter}
    B -->|src/ changed| C[GitHub Actions]
    B -->|infra/ changed| D[Cloud Build]
    C --> E[Stage 1: Base Image\nCached Layer]
    E --> F[Stage 2: Dependencies\nPoetry Lock Install]
    F --> G[Stage 3: App Code\nCopy & Compile]
    G --> H[Stage 4: Security Scan\nTrivy]
    H --> I{Tests Pass?}
    I -->|Yes| J[Push to GCR]
    I -->|No| K[Slack Alert: Failed]
    J --> L[Deploy to Cloud Run]
    L --> M[Health Check /healthz]
    M -->|200 OK| N[Slack Alert: Deployed]
    M -->|Fail| O[Auto Rollback\nPrevious Revision]`,
    results: "Average deployment time dropped from 22 minutes to 13 minutes across all services — a 40% improvement. Cache hit rates stabilised at 85%+ after the first two weeks, with some services seeing sub-8-minute build times. Dependency-related pipeline failures were completely eliminated after the Poetry migration. Smart webhook path filtering reduced unnecessary pipeline runs by 60%, directly cutting GCP compute costs. Zero-downtime deployments with automated rollback became the default behaviour across all 10+ production services.",
  },
  {
    slug: "zero-downtime-db-migration",
    title: "Zero-Downtime PostgreSQL Migration from GCE to Cloud SQL",
    category: "Database",
    tags: ["PostgreSQL", "Cloud SQL", "GCP", "pgBouncer", "Cloud Storage"],
    client: "QLU.ai",
    duration: "3 weeks",
    featured: true,
    heroMetric: "0 Minutes Downtime",
    metrics: [
      { label: "Production Downtime", value: "0 min", icon: "clock" },
      { label: "Databases Migrated", value: "Multiple", icon: "database" },
      { label: "Connection Pool Efficiency", value: "+60%", icon: "zap" },
      { label: "Query Latency Improvement", value: "25%", icon: "trending-down" },
    ],
    problem: "QLU.ai ran multiple production PostgreSQL databases on self-managed GCE VMs. While this worked during early-stage growth, it created significant operational overhead: manual backups with no point-in-time recovery, no automated failover, single-instance risk, and a growing list of manual DBA tasks consuming engineering time. A complete migration to Cloud SQL was needed — but these databases served real user traffic 24 hours a day with no acceptable maintenance window. An outage during migration would directly impact paying customers and break SLAs. The technical challenge was compounded by the fact that several services maintained persistent connection pools, making connection string changes disruptive.",
    solutionSteps: [
      "Profiled each database before migration: schema complexity, row counts, active connection counts, peak query patterns, and average transaction duration to assess risk and plan sequencing",
      "Designed a staged migration strategy — create Cloud SQL replica from export, validate data integrity, shift read traffic, cutover writes, then decommission the GCE instance",
      "Exported production databases via pg_dump to Google Cloud Storage buckets with server-side encryption; validated dump integrity with pg_restore --list before importing",
      "Provisioned Cloud SQL instances with High Availability enabled — primary in one zone, standby replica in another — matching the GCE instance's specs before gradually upsizing",
      "Deployed pgBouncer in transaction pooling mode on a dedicated GCE instance as a connection proxy between all application services and Cloud SQL, providing a stable connection endpoint",
      "Updated application services to connect via pgBouncer rather than directly to the database, decoupling the application layer from any future database endpoint changes",
      "Executed the final write cutover during the lowest-traffic window (Sunday 3–5am), with a tested rollback procedure ready: revert pgBouncer target to original GCE instance within 60 seconds if needed",
      "Post-migration: validated row counts, ran checksum comparisons on critical tables, and monitored Cloud SQL query insights for 72 hours to confirm performance parity",
    ],
    architectureDiagram: `flowchart TD
    subgraph BEFORE["Before — Self-Managed GCE"]
      A[App Services] -->|Direct Connection| B[(PostgreSQL\non GCE VM)]
    end
    subgraph MIGRATION["Migration Phase"]
      C[pg_dump] --> D[GCS Bucket\nEncrypted Export]
      D --> E[Cloud SQL Import]
      E --> F[(Cloud SQL\nReplica — Read Only)]
      F -->|Validate Integrity| G[Row Count & Checksum Check]
    end
    subgraph AFTER["After — Cloud SQL + pgBouncer"]
      H[App Services] --> I[pgBouncer\nTransaction Pool]
      I --> J[(Cloud SQL Primary\nHA Enabled)]
      J --> K[(Cloud SQL Standby\nAuto Failover)]
    end
    BEFORE -->|Export| MIGRATION
    MIGRATION -->|Write Cutover| AFTER`,
    results: "All PostgreSQL databases migrated to Cloud SQL with zero production downtime. The pgBouncer connection pooler reduced connection overhead by 60% under concurrency spikes, eliminating the connection exhaustion issues that had occasionally impacted the GCE-based setup. Cloud SQL's managed HA with automatic failover replaced a previously manual process. Post-migration query latency improved by 25% — attributed to Cloud SQL's optimised storage engine and the elimination of noisy-neighbour effects from the shared GCE environment. Automated daily backups with 7-day point-in-time recovery replaced the previous manual backup cron job.",
  },
  {
    slug: "elasticsearch-performance-tuning",
    title: "50% Query Performance Improvement on Production Elasticsearch Clusters",
    category: "Cloud Infra",
    tags: ["Elasticsearch", "JMeter", "K6", "GKE", "JVM Tuning"],
    client: "QLU.ai",
    duration: "6 weeks",
    featured: true,
    heroMetric: "50% Faster Queries",
    metrics: [
      { label: "Query Speed Improvement", value: "50%", icon: "zap" },
      { label: "JVM Heap Utilisation", value: "< 75%", icon: "cpu" },
      { label: "GC Pause Reduction", value: "70%", icon: "activity" },
      { label: "Peak Load Test RPS", value: "5,000+", icon: "trending-up" },
    ],
    problem: "QLU.ai's AI-powered search features relied on Elasticsearch clusters running on GKE. As data volumes grew and query complexity increased, the clusters began exhibiting symptoms of resource pressure: average search query latency had climbed to 480ms under normal load, frequent stop-the-world GC pauses were causing intermittent 2–3 second latency spikes visible to users, and some data nodes were becoming hot spots — receiving a disproportionate share of queries due to poor shard allocation. Under load testing designed to simulate anticipated traffic growth, the cluster failed to sustain acceptable response times above 1,500 RPS, well below the 5,000 RPS target.",
    solutionSteps: [
      "Used the Elasticsearch hot threads API and GC logs to profile where time was being spent — identified ConcMarkSweepGC as the primary source of latency spikes due to old-gen heap pressure",
      "Right-sized JVM heap allocation to exactly 50% of available node RAM (within Elasticsearch's 30GB ceiling), preventing the CMS collector from having to work against an oversized heap",
      "Migrated from ConcMarkSweepGC to G1GC and tuned InitiatingHeapOccupancyPercent to 75, reducing the frequency and duration of GC pauses across all data nodes",
      "Audited index template configurations: reduced primary shard count on smaller indices (over-sharded indices were creating unnecessary coordination overhead), and increased shard size on high-volume indices to align with the 10–50GB per shard guideline",
      "Implemented Index Lifecycle Management (ILM) policies — hot tier on NVMe SSDs for indices under 30 days, warm tier on standard storage for aged indices — distributing storage cost while maintaining query performance on recent data",
      "Optimised index mappings: set doc_values: false on fields never used for sorting/aggregation, changed full-text fields to keyword where only exact matching was required, and disabled _source on high-cardinality fields not needed in responses",
      "Ran comprehensive load tests using JMeter for API-level throughput benchmarking and K6 for scripted query scenario testing, iterating on configuration after each test run",
      "Deployed Kibana dashboards tracking JVM heap, GC pause duration, shard distribution balance, and query latency percentiles (p50, p95, p99) for ongoing visibility",
    ],
    architectureDiagram: `flowchart LR
    subgraph GKE["GKE Cluster — Elasticsearch"]
      M[Dedicated Master Nodes x3\nNo Data, Cluster State Only]
      subgraph HOT["Hot Tier — NVMe SSD"]
        H1[Data Node 1\nG1GC, 50% Heap]
        H2[Data Node 2\nG1GC, 50% Heap]
      end
      subgraph WARM["Warm Tier — Standard Storage"]
        W1[Data Node 3\nAged Indices via ILM]
      end
    end
    A[Application Layer] --> LB[Load Balancer]
    LB --> H1 & H2
    H1 <-->|Shard Replication| H2
    H1 & H2 -->|ILM: rollover 30d| W1
    subgraph OBS["Observability"]
      KB[Kibana\nCluster Health Dashboard]
      PD[PagerDuty\nGC Pause Alerts]
    end
    GKE --> OBS`,
    results: "Average search query latency dropped from 480ms to 240ms — a 50% improvement — measured across p50, p95, and p99 percentiles. GC pause frequency and duration reduced by 70% after the G1GC migration and heap tuning. The ILM-managed hot-warm architecture reduced Elasticsearch storage costs by 35% by moving aged data to cheaper storage without sacrificing query performance on recent data. In K6 load tests, the optimised cluster sustained 5,000+ RPS with p99 latency under 400ms, exceeding the original traffic growth target. Shard rebalancing eliminated the hot-node pattern entirely.",
  },
  {
    slug: "cloud-cost-optimization",
    title: "30% Cloud Cost Reduction Without Impacting Production Reliability",
    category: "Cost Optimization",
    tags: ["GCP", "BigQuery", "FinOps", "Cloud Monitoring", "Terraform"],
    client: "QLU.ai",
    duration: "2 months",
    featured: false,
    heroMetric: "30% Cost Reduction",
    metrics: [
      { label: "Monthly Cost Reduction", value: "30%", icon: "trending-down" },
      { label: "Log Ingestion Cost Cut", value: "45%", icon: "file-text" },
      { label: "Orphaned Resources Removed", value: "60+", icon: "trash-2" },
      { label: "Snapshot Storage Reclaimed", value: "2+ TB", icon: "hard-drive" },
    ],
    problem: "As QLU.ai scaled from a handful of services to 10+ production products, GCP billing grew faster than the underlying business activity justified. There was no cost attribution model — all products shared billing accounts with no per-product breakdown, making it impossible to identify which service was responsible for spending spikes. An audit triggered by a monthly bill that had doubled quarter-over-quarter revealed a range of issues: zombie GCE instances still running from abandoned experiments, unattached persistent disks accumulating charges silently, Cloud Logging ingesting verbose debug logs from all environments at full cost, and manual disk snapshots never deleted after migrations completed. Rightsizing had never been performed — initial VM sizes set at launch had never been revisited despite workload patterns becoming clear over time.",
    solutionSteps: [
      "Configured Cloud Billing export to BigQuery and built a Looker Studio dashboard with per-product, per-service, and per-resource cost attribution — the first time engineering had cost visibility at this granularity",
      "Audited all GCE instances using Cloud Monitoring CPU and memory utilisation data over a 30-day window; identified instances consistently running below 20% CPU as candidates for rightsizing",
      "Inventoried all persistent disks, snapshots, and static IP addresses; identified and deleted 60+ orphaned resources — unattached disks, snapshots from decommissioned VMs, and reserved IPs assigned to nothing",
      "Implemented Cloud Logging exclusion filters for verbose application debug logs in non-production environments, and added sampling rules for high-volume but low-signal log streams in production, reducing ingestion volume by 45%",
      "Deployed automated snapshot lifecycle policies via Terraform — production snapshots retained for 7 days, staging for 3 days, with automatic deletion enforced by Cloud Scheduler",
      "Evaluated workload patterns and migrated suitable stateless services from always-on GCE to Cloud Run, converting fixed monthly compute cost to per-request billing aligned with actual usage",
      "Purchased Committed Use Discounts (CUDs) for stable baseline compute workloads identified as running continuously at consistent utilisation levels, locking in 1-year discounts",
      "Created per-product budget alerts at 80% and 100% thresholds with Slack notifications to engineering leads, establishing ongoing cost accountability at the team level",
    ],
    architectureDiagram: `flowchart TD
    A[Cloud Billing Export] --> B[BigQuery Dataset\nPer-Product Attribution]
    B --> C[Looker Studio\nCost Dashboard]
    C --> D{Budget Threshold\nBreached?}
    D -->|80% or 100%| E[Slack Alert\nto Engineering Lead]
    D -->|Normal| F[Weekly Cost Report]
    subgraph ACTIONS["Cost Reduction Actions"]
      G[Rightsize VMs\nBased on 30d Utilisation]
      H[Delete Orphaned Resources\nDisks, Snapshots, IPs]
      I[Log Exclusion Filters\n45% Ingestion Reduction]
      J[Snapshot Lifecycle Policy\nTerraform-managed TTLs]
      K[CUD Reservations\nStable Baseline Workloads]
      L[GCE to Cloud Run\nStateless Services]
    end
    E --> ACTIONS`,
    results: "Monthly GCP spend reduced by 30% within 8 weeks without any degradation in service reliability or performance. Log ingestion costs dropped 45% through targeted exclusion filters — the single highest-impact change. Deletion of 60+ orphaned resources and 2+ TB of stale snapshots provided an immediate one-time saving. The BigQuery cost dashboard gave per-product spending visibility for the first time, enabling engineering leads to own their team's infrastructure costs. CUD reservations locked in further discounts on stable workloads, and the Cloud Run migration reduced compute costs for variable-traffic services by aligning billing with actual usage.",
  },
  {
    slug: "soc2-compliance-automation",
    title: "SOC 2 Type II Compliance & CASA Tier 2 Verification — 2 Clean Audits",
    category: "Security",
    tags: ["SOC 2 Type II", "Sprinto", "CASA Tier 2", "GCP IAM", "Compliance"],
    client: "QLU.ai",
    duration: "6 months",
    featured: false,
    heroMetric: "2 Clean Audits",
    metrics: [
      { label: "Successful SOC 2 Audits", value: "2", icon: "shield-check" },
      { label: "Trust Service Criteria", value: "5/5", icon: "check-circle" },
      { label: "Controls Implemented", value: "100+", icon: "list" },
      { label: "Evidence Collection Automated", value: "80%", icon: "zap" },
    ],
    problem: "QLU.ai was engaging with enterprise customers who required SOC 2 Type II certification as a prerequisite to signing contracts. The company had no existing compliance framework — no formal security policies, no evidence collection processes, no access review procedures, and no audit trail infrastructure. Mapping 100+ controls across all five Trust Service Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy) while simultaneously maintaining production infrastructure and shipping features was the core challenge. Additionally, QLU.ai's use of sensitive Google APIs required CASA Tier 2 verification — a separate, technically demanding assessment conducted by a Google-authorized testing lab.",
    solutionSteps: [
      "Selected Sprinto as the compliance automation platform after evaluating alternatives; configured native GCP integrations to pull IAM policy snapshots, audit logs, and Cloud SCC findings automatically",
      "Performed a gap analysis mapping QLU.ai's existing controls against SOC 2 Trust Service Criteria, producing a prioritised remediation backlog with estimated implementation effort per control",
      "Implemented missing access controls: enforced MFA across all GCP projects and internal tooling via SSO, established quarterly access review workflows, and documented role definitions with least-privilege principles",
      "Authored the core security policy library: Incident Response Plan, Vulnerability Management Policy, Vendor Risk Assessment Process, Business Continuity Plan, and Data Classification Policy",
      "Configured automated evidence collection in Sprinto — GCP Cloud Audit Logs mapped to availability and processing integrity controls, IAM Recommender reports for access review evidence, Security Command Center findings for vulnerability management",
      "Led the CASA Tier 2 assessment process: identified a Google-authorized testing lab, negotiated a cost-effective testing agreement, coordinated the technical testing engagement, and remediated all findings before resubmission",
      "Integrated SSO (Google Workspace) across all internal tools and validated cross-platform authentication flows including GCP OAuth 2.0 and Microsoft Partner domain federation",
      "Managed both external SOC 2 audit engagements end-to-end — evidence preparation, auditor communications, finding remediation, and final report review",
    ],
    architectureDiagram: `flowchart TD
    subgraph TSC["Trust Service Criteria"]
      A[Security\nIAM + MFA + SSO + WAF]
      B[Availability\n99.99% SLA + Monitoring + DR]
      C[Confidentiality\nTLS 1.3 + KMS + DLP]
      D[Processing Integrity\nAudit Logs + Change Mgmt]
      E[Privacy\nData Classification + Retention]
    end
    subgraph SPRINTO["Sprinto Automation Layer"]
      F[Automated Evidence\nCollection]
      G[Continuous Control\nMonitoring]
      H[Audit-Ready\nEvidence Package]
    end
    subgraph GCP_INT["GCP Evidence Sources"]
      I[Cloud Audit Logs]
      J[IAM Policy Snapshots]
      K[Security Command Center]
      L[Access Transparency Logs]
    end
    GCP_INT -->|Native Integration| SPRINTO
    TSC -->|Controls Mapped| SPRINTO
    SPRINTO --> M[Auditor Portal\nSOC 2 Evidence Review]
    M --> N[SOC 2 Type II Report\nClean Opinion — 2 Audits]`,
    results: "QLU.ai achieved SOC 2 Type II certification across two consecutive audit cycles, both returning clean opinions with no qualified exceptions. 80% of the 100+ required controls are now monitored and evidenced automatically via the Sprinto-GCP integration, reducing the ongoing compliance maintenance burden to a manageable weekly review. CASA Tier 2 verification was achieved on the first resubmission after remediation, securing continued access to sensitive Google APIs required for QLU.ai's core product features. The certification directly unblocked several enterprise deals that had been stalled pending security review.",
  },
  {
    slug: "zero-trust-security",
    title: "Zero-Trust Security Architecture Across Multi-Cloud Infrastructure",
    category: "Security",
    tags: ["Twingate", "Cloud Armor", "GCP IAM", "reCAPTCHA Enterprise", "SSL/TLS"],
    client: "QLU.ai",
    duration: "4 weeks",
    featured: false,
    heroMetric: "Zero Breach Incidents",
    metrics: [
      { label: "Unauthorized Access Incidents", value: "0", icon: "shield" },
      { label: "Services Behind Zero-Trust", value: "10+", icon: "lock" },
      { label: "Attack Surface Reduction", value: "90%", icon: "trending-down" },
      { label: "Layered Security Controls", value: "5+", icon: "layers" },
    ],
    problem: "QLU.ai's infrastructure had grown organically — services were protected by a mix of GCP firewall rules, VPN access for internal tooling, and varying levels of TLS enforcement. Several internal services were reachable via public IPs behind firewall rules, creating an implicit trust model that assumed network position equalled authorisation. Secrets were stored as environment variables in Cloud Run service configurations and GCE instance metadata, accessible to anyone with IAM project viewer permissions. There was no consistent WAF policy across public-facing endpoints, leaving the application layer exposed to OWASP Top 10 attack patterns. A credential leak or misconfigured firewall rule had the potential to expose the entire internal network.",
    solutionSteps: [
      "Replaced the VPN-based access model with Twingate ZTNA — all internal services removed from public internet exposure, access granted per-resource based on user identity and device trust, not network position",
      "Deployed Cloud Armor WAF policies on all external-facing load balancers with pre-configured rules covering SQL injection, XSS, LFI, RFI, and remote code execution patterns from the OWASP ModSecurity Core Rule Set",
      "Integrated reCAPTCHA Enterprise on all user-facing authentication endpoints and high-value API paths to prevent automated credential stuffing and bot-driven abuse",
      "Migrated all secrets from environment variables and instance metadata to GCP Secret Manager; updated services to fetch secrets at runtime using Workload Identity Federation with no static service account keys",
      "Audited all GCP service account permissions across every project; removed owner/editor roles and replaced with purpose-specific custom roles following the principle of least privilege",
      "Enforced role-based access control with Conditions in IAM policies — time-bounded access for vendor operations, resource-level permissions scoped to specific Cloud Run services or GCS buckets",
      "Provisioned GCP-managed SSL/TLS certificates on all load balancers; enforced HTTPS-only with HTTP-to-HTTPS redirect policies; configured HSTS headers with one-year max-age",
      "Enabled Security Command Center Standard tier for continuous asset discovery, vulnerability scanning, and misconfiguration detection across all GCP projects",
    ],
    architectureDiagram: `flowchart LR
    DEV[Developer / Admin] --> TW[Twingate Client\nIdentity + Device Verified]
    TW -->|Encrypted Tunnel| TC[Twingate Controller\nZero-Trust Policy Engine]
    TC -->|Resource Access Granted| PRIV[Private GCP Resources\nNo Public IP]

    EXT[Public Internet Traffic] --> CA[Cloud Armor WAF\nOWASP Rules + Rate Limits]
    CA --> RE[reCAPTCHA Enterprise\nBot Detection]
    RE --> LB[HTTPS Load Balancer\nManaged TLS Cert]
    LB --> SVC[Cloud Run Services\nLeast-Privilege SA]

    SVC --> SM[Secret Manager\nWorkload Identity Auth]
    SVC --> DB[(Cloud SQL\nPrivate IP Only)]
    SVC --> GCS[(Cloud Storage\nUniform Bucket ACL)]

    subgraph MONITORING["Continuous Security Monitoring"]
      SCC[Security Command Center\nVuln + Misconfiguration Scan]
      AUDIT[Cloud Audit Logs\nData + Admin Access Logs]
    end
    PRIV & SVC --> MONITORING`,
    results: "Zero unauthorized access incidents since the zero-trust architecture was implemented. The attack surface was reduced by 90% — all internal services are now unreachable from the public internet, accessible only through Twingate with verified identity. Cloud Armor blocked thousands of automated scanning requests and several targeted injection attempts in the first 30 days of operation. Secret rotation became operationally simple with Secret Manager — no more service restarts for credential updates. Security Command Center provides continuous misconfiguration detection, reducing the window between a configuration error and its remediation.",
  },
  {
    slug: "livekit-kubernetes-deployment",
    title: "Production LiveKit & AI Agent Deployment on GKE with Auto-Scaling",
    category: "Cloud Infra",
    tags: ["GKE", "LiveKit", "Kubernetes", "HPA", "Docker"],
    client: "QLU.ai",
    duration: "3 weeks",
    featured: false,
    heroMetric: "10x Auto-Scale Capacity",
    metrics: [
      { label: "Scale Factor on Demand", value: "10x", icon: "trending-up" },
      { label: "Pod Startup Time", value: "< 30s", icon: "clock" },
      { label: "Deployment Method", value: "GitOps", icon: "git-branch" },
      { label: "Availability", value: "99.9%+", icon: "shield" },
    ],
    problem: "QLU.ai's AI agent product relied on LiveKit for real-time audio/video session management. The initial deployment ran LiveKit Server and AI agent workers as Docker containers on GCE instances — a setup that had no auto-scaling, required manual SSH-based deployments, and managed configuration via hardcoded environment variables in Docker Compose files. Traffic patterns were highly unpredictable: the platform could go from near-idle to handling 50+ concurrent AI sessions within minutes in response to customer campaigns. The GCE-based setup had no mechanism to respond to these spikes — sessions would degrade or time out when the single instance was saturated. Configuration drift between environments was also a recurring operational issue.",
    solutionSteps: [
      "Migrated LiveKit Server from GCE Docker to GKE, deploying it as a Kubernetes Deployment with dedicated node pools to isolate its resource profile from other workloads",
      "Containerised AI agent workers and deployed them to a separate GKE namespace with resource requests and limits set based on empirical profiling of per-agent CPU and memory consumption",
      "Configured Horizontal Pod Autoscaler (HPA) for both LiveKit and AI agent Deployments — CPU utilisation at 60% triggers scale-up, with a minimum of 2 replicas and maximum of 20 for agents",
      "Centralised all non-sensitive configuration in ConfigMaps — TURN server addresses, LiveKit API keys scope, agent queue settings — enabling environment-specific config without image rebuilds",
      "Migrated all credentials and sensitive values to Kubernetes Secrets backed by GCP Secret Manager via External Secrets Operator, with automatic rotation synced from Secret Manager",
      "Implemented liveness probes (HTTP /health endpoint check every 15s) and readiness probes (HTTP /ready endpoint with 5s initial delay) to ensure traffic is only routed to fully initialised pods",
      "Configured PodDisruptionBudgets for both Deployments with minAvailable: 1, ensuring at least one replica remains available during node drains, cluster upgrades, or rolling deploys",
      "Established a GitOps workflow — all Kubernetes manifests stored in a dedicated infra repository, changes applied via reviewed pull requests with Cloud Build as the CD engine",
    ],
    architectureDiagram: `flowchart TD
    subgraph GKE["GKE Cluster — Production"]
      subgraph LK_NS["livekit namespace"]
        LKS[LiveKit Server\nDeployment — min 2 replicas]
        LK_HPA[HPA: CPU 60% threshold\nmax 10 replicas]
        LK_HPA -->|Scales| LKS
      end
      subgraph AGENT_NS["agents namespace"]
        AG1[AI Agent Pod 1]
        AG2[AI Agent Pod 2]
        AGN[AI Agent Pod N]
        AG_HPA[HPA: CPU 60% threshold\nmax 20 replicas]
        AG_HPA -->|Scales| AG1 & AG2 & AGN
      end
      CM[ConfigMaps\nNon-sensitive config] --> LKS & AG1
      SEC[Kubernetes Secrets\nSynced from Secret Manager] --> LKS & AG1
      PDB[PodDisruptionBudgets\nminAvailable: 1] --> LK_NS & AGENT_NS
    end
    EXT[Client Sessions] --> ING[GKE Ingress\n+ Cloud Armor WAF]
    ING --> LKS
    LKS -->|Session Dispatch| AG1 & AG2 & AGN
    GIT[Git Repository\nKubernetes Manifests] -->|CD: Cloud Build| GKE`,
    results: "LiveKit and AI agent infrastructure now auto-scales from 2 to 20+ pods within 30 seconds of a traffic spike, handling 10x baseline load without manual intervention. Zero-downtime rolling deployments via PodDisruptionBudgets replaced the previous SSH-based deployment process. The GitOps workflow provides a full audit trail of every infrastructure change, with pull request reviews as the gate for production modifications. Configuration drift between development, staging, and production was eliminated through shared ConfigMaps and environment-specific Kubernetes overlays. GKE Autopilot node auto-provisioning manages cluster capacity automatically, removing the operational overhead of node pool management.",
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.slug === slug);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter((cs) => cs.featured);
};
