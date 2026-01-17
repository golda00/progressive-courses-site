export const courseData = {
  "COURSES": [
    {
  "id": "userc1",
  "title": "Cyber Defense & Ethical Hacking Mastery",
  "duration": "50 hours",
  "level": "Advanced",
  "tags": ["Security","Ethical Hacking","Forensics"],
  "oneliner": "Learn to identify, exploit, and defend against real-world cyber threats — develop skills to protect digital infrastructures and pursue roles like Penetration Tester or SOC Analyst.",
  "capstone": "Capstone: Corporate Network Defense and Penetration Simulation — Red vs Blue team exercise with a final executive summary and remediation plan.",
  "modules": [
    {
      "title": "Foundations of Cybersecurity & Ethical Hacking",
      "hours": 6,
      "description": "Build a solid understanding of the cybersecurity ecosystem, ethics, and the threat landscape.",
      "topics": [
        "Introduction to Information Security and Cyber Threats",
        "CIA Triad: Confidentiality, Integrity, Availability",
        "Attack Vectors, Threat Actors, Exploit Techniques",
        "Ethical Hacking Methodology & Legal Considerations",
        "Risk Management Frameworks (NIST, ISO 27001)",
        "Cyber Kill Chain & MITRE ATT&CK overview"
      ],
      "handsOn": "Set up a virtual lab (VirtualBox + Kali Linux + Metasploitable2)."
    },
    {
      "title": "Networking, Systems, and Linux for Security Operations",
      "hours": 8,
      "description": "Networking and OS fundamentals required for penetration testing and defensive operations.",
      "topics": [
        "TCP/IP, OSI Model, Ports & Protocols",
        "Packet analysis with Wireshark",
        "Firewalls, IDS/IPS, VPNs, Proxy Servers",
        "Network scanning and enumeration",
        "Linux basics for security, shell scripting",
        "System hardening principles"
      ],
      "handsOn": "Network traffic analysis, firewall configuration, Nmap scanning labs."
    },
    {
      "title": "Footprinting, Scanning & Vulnerability Assessment",
      "hours": 8,
      "description": "Reconnaissance and vulnerability mapping techniques used by ethical hackers.",
      "topics": [
        "Passive information gathering: WHOIS, DNS, OSINT",
        "Active footprinting: theHarvester, Recon-ng, Maltego",
        "Scanning with Nmap, Netcat, Nessus",
        "OS/service fingerprinting",
        "Identifying vulnerabilities and false positives",
        "Vulnerability report writing"
      ],
      "handsOn": "Run vulnerability assessments using Nessus/OpenVAS and produce a professional report."
    },
    {
      "title": "System Hacking & Post-Exploitation Techniques",
      "hours": 8,
      "description": "Ethical exploitation workflows and post-compromise techniques for privilege escalation and persistence.",
      "topics": [
        "Password cracking: Hydra, John the Ripper, Hashcat",
        "Privilege escalation on Windows & Linux",
        "Keyloggers, spyware basics, and detection",
        "Malware behavior, obfuscation, and anti-analysis",
        "Steganography and rootkit basics",
        "Post-exploitation: persistence & covering tracks"
      ],
      "handsOn": "Exploit a vulnerable host with Metasploit and execute controlled post-exploitation tasks."
    },
    {
      "title": "Web Application, Wireless & Cloud Security",
      "hours": 10,
      "description": "Web, wireless, and cloud security fundamentals with hands-on testing techniques.",
      "topics": [
        "Web app security fundamentals and architecture",
        "OWASP Top 10: SQLi, XSS, CSRF, RCE, etc.",
        "Web testing tools: Burp Suite, OWASP ZAP",
        "Wireless attacks: WPA/WPA2 cracking, Evil Twin",
        "Cloud security basics (AWS/Azure), Shared Responsibility Model",
        "Identity and access management in cloud"
      ],
      "handsOn": "Perform web app penetration testing on a demo site and apply fixes; demo wireless attack and defense."
    },
    {
      "title": "Security Monitoring, Incident Response & Forensics",
      "hours": 6,
      "description": "SOC-level monitoring, incident handling, and basic digital forensics.",
      "topics": [
        "SIEM fundamentals, log aggregation & parsing (Splunk / Wazuh / ELK)",
        "Threat detection, correlation rules and alerts",
        "Disk, network, and memory forensics overview",
        "Incident response lifecycle and investigations",
        "Mitigation, recovery and reporting",
        "Compliance basics: GDPR, HIPAA, PCI-DSS"
      ],
      "handsOn": "Set up Wazuh/SIEM to monitor logs and detect simulated incidents."
    },
    {
      "title": "Capstone Project — Red vs Blue Team Simulation",
      "hours": 4,
      "description": "A practical, time-boxed simulation where teams attack and defend a corporate environment.",
      "topics": [
        "Red Team: reconnaissance, scanning, exploitation",
        "Blue Team: detection, containment, incident response",
        "Reporting: threat intel report & remediation plan",
        "Executive presentation and lessons learned"
      ],
      "handsOn": "Red team conducts attacks on a virtual network while blue team uses SIEM and monitoring tools to detect and mitigate. Deliverables include a report and executive presentation."
    }
  ]
   
    },
    {
  "id": "userc2",
  "title": "Generative AI Engineering & Applications",
  "duration": "50 hours",
  "level": "Advanced",
  "tags": ["AI", "Generative", "LLM"],
  "oneliner": "Dive into the world of LLMs, diffusion models, and prompt engineering to build cutting-edge generative systems powering text, image, and video innovation.",
  "outcome": "Build & fine-tune LLMs, design safe chatbots, generate visuals with diffusion models, implement RAG systems, deploy generative apps, and complete a portfolio project for placements.",
  "tools": ["Hugging Face", "Transformers", "FAISS/Chroma", "Stable Diffusion", "ComfyUI", "Gradio/Streamlit"],
  "modules": [
    {
      "title": "Generative AI Foundations & Prompt Engineering",
      "hours": 10,
      "description": "Foundations of LLMs, tokenization, prompt design and output control strategies.",
      "topics": [
        "Evolution of Generative AI: GPT, LLaMA, Mixtral, SDXL ecosystem",
        "Transformer architecture overview",
        "Tokenization & embeddings (BPE, WordPiece, SentencePiece)",
        "Prompt engineering: zero-shot, few-shot, role-based prompting",
        "Chain-of-thought, self-reflection prompts",
        "Controlling output: temperature, top-k, top-p, repetition penalty",
        "Prompt dataset creation for training"
      ],
      "handsOn": "Use multi-provider playgrounds (HuggingFace, Groq, Together.ai); token usage visualization; build a Prompt-AI Chat Explorer app."
    },
    {
      "title": "Fine-Tuning Large Language Models",
      "hours": 10,
      "description": "Select open-source models and apply PEFT/LoRA techniques with proper dataset preparation and evaluation.",
      "topics": [
        "Selecting open-source LLMs (LLaMA-3, Mistral-7B, Gemma, Phi-3)",
        "Model loading & inference (Transformers, HF Pipeline, TGI/Ollama)",
        "Dataset cleaning, labeling, safety filtering",
        "Fine-tuning: PEFT, LoRA / Q-LoRA",
        "Optimization: AdamW, LR schedules, gradient clipping",
        "Evaluation metrics: BLEU, ROUGE, perplexity",
        "Hallucination reduction: reranking, search fallback, confidence scoring"
      ],
      "handsOn": "Fine-tune a small LLM on a custom domain (FAQ/brochure); build a domain-expert chatbot with hallucination alerts."
    },
    {
      "title": "Generating Visual Media with Diffusion Models",
      "hours": 10,
      "description": "Understand diffusion pipelines, control models and ethical image/video generation workflows.",
      "topics": [
        "Diffusion model pipeline: noise schedule, latent reconstruction",
        "Generation parameters: CFG scale, samplers, seeds",
        "Control models: ControlNet, IP-Adapter",
        "Safe & ethical image generation practices",
        "Video generation basics (AnimateDiff)"
      ],
      "handsOn": "Local/cloud image generation with Stable Diffusion WebUI or ComfyUI; style-transfer and sketch-to-image workflows; build an AI creative asset portfolio."
    },
    {
      "title": "RAG Systems & Multimodal Search",
      "hours": 8,
      "description": "Build retrieval-augmented architectures and vector search with citation and confidence tracing.",
      "topics": [
        "Limitations of standard LLMs and need for retrieval",
        "RAG architecture and flow",
        "Chunking & embedding strategies (recursive, semantic, page-aware)",
        "Vector DBs: FAISS, Chroma",
        "Citation tracing & confidence scoring",
        "CLIP-based multimodal retrieval (text + image)"
      ],
      "handsOn": "Upload PDFs → create vector index → implement chat-with-sources; build a research assistant with reference citations."
    },
    {
      "title": "AI Agents & Deployment Essentials",
      "hours": 8,
      "description": "Agent design, memory patterns, basic deployment options and governance considerations.",
      "topics": [
        "Tool-using agents: planning and execution loops",
        "Memory types: buffer, summary, vectorstore memory",
        "Task routing, retries and logging",
        "Deployment basics: Streamlit / Gradio, HuggingFace Spaces",
        "Activity logging, API token limits",
        "Governance: prompt filtering, safety scoring, metadata tracking"
      ],
      "handsOn": "Build a task-capable AI agent (search, translation, calculator) and deploy it to a local/cloud endpoint."
    },
    {
      "title": "Capstone — Unified GenAI Product (integrated)",
      "hours": 4,
      "description": "Deliver a focused, portfolio-ready GenAI integration demonstrating RAG, LLM fine-tuning and a deployed interface.",
      "topics": [
        "Design & scope a unified GenAI product",
        "Integrate LLM + retrieval + multimodal assets",
        "Deploy a minimal UI (Gradio/Streamlit) and document the system",
        "Prepare project deliverables and short demo"
      ],
      "handsOn": "Integrate components into a minimal product; deliver a demo, short report, and code repository."
    }
  ],
  "capstone": "Unified GenAI Product — focused portfolio project integrating fine-tuned LLM, RAG, and a deployed UI. Deliverables: demo, short technical report, and code repo.",
  "notes": "Course Outcomes: Build & fine-tune LLMs; design safe chatbots; generate visuals with diffusion models; implement RAG; deploy generative applications; create portfolio-ready projects."
},{
  "id": "userc3",
  "title": "Agentic AI Systems & Autonomous Workflow",
  "duration": "50 hours",
  "level": "Advanced",
  "tags": ["AgenticAI","Automation","RAG","Multi-Agent"],
  "oneliner": "Design, deploy and orchestrate autonomous AI workflows that reason, act and integrate tools for real-world automation.",
  "outcome": "Build agentic systems with memory and RAG, design multi-agent workflows, deploy safe autonomy with monitoring and governance, and deliver a portfolio-ready autonomous product.",
  "tools": ["LangChain","LangGraph","CrewAI","Ollama","HuggingFace","FAISS/Chroma","Streamlit","Gradio","Python"],
  "modules": [
    {
      "title": "Foundations of LLMs & Agentic Systems",
      "hours": 8,
      "description": "Core principles of generative models and the agent lifecycle: perception, reasoning, memory and action.",
      "topics": [
        "Generative AI vs traditional ML",
        "Tokenization, embeddings and attention flow",
        "Agents vs chatbots: capabilities and limits",
        "Agent lifecycle and autonomy loops",
        "Prompt optimization and safety risks",
        "Agent use-cases in industry"
      ],
      "handsOn": "Run local inference with Ollama; build structured prompts for task-oriented agent responses; apply safety filters to prompts."
    },
    {
      "title": "Python for Agent Development & Data Handling",
      "hours": 10,
      "description": "Programming foundations for building agents: data handling, embeddings, and local RAG pipelines.",
      "topics": [
        "Python scripting: control flow, functions, modules",
        "Working with text, token counts and embeddings",
        "Vector DB basics: FAISS and Chroma",
        "File system and API integration patterns",
        "Intro to RAG: chunking, embedding, retrieval"
      ],
      "handsOn": "Build a document-aware Q&A system using a local LLM + vector store; implement chunking and similarity search; produce sample query reports."
    },
    {
      "title": "Building Autonomous Agents with LangChain",
      "hours": 10,
      "description": "Design tool-using and reasoning agents, implement memory, and orchestrate multi-step plans.",
      "topics": [
        "Agent classes: tool-use, RAG, reasoning agents",
        "Memory strategies: conversational & persistent",
        "Task planning and chain-of-thought patterns",
        "Integrating search, file ops and DBs",
        "Evaluation: action scoring and retry policies"
      ],
      "handsOn": "Create a File-Management Agent with LangChain that autonomously retrieves, analyses and summarizes documents; log decisions and retries."
    },
    {
      "title": "Multi-Agent Collaboration Systems",
      "hours": 12,
      "description": "Build coordinated multi-agent systems with role specialization, negotiation, and fault recovery.",
      "topics": [
        "Multi-agent architectures and workflow graphs",
        "Role specialization: Researcher, Planner, Executor",
        "Inter-agent communication and negotiation",
        "Task decomposition and orchestration patterns",
        "Debugging and failure recovery strategies"
      ],
      "handsOn": "Implement a 3-agent Research Assistant (gatherer → critic → synthesizer) using LangGraph/CrewAI; implement consensus & confidence scoring."
    },
    {
      "title": "Deployment, Monitoring & Governance",
      "hours": 4,
      "description": "Operationalize agents with deployment, observability, and governance controls for safe automation.",
      "topics": [
        "Local deployment strategies and container basics",
        "Audit logs, observability and behavior tracing",
        "Hallucination mitigation and model fallbacks",
        "Access control, sandboxing and human-override"
      ],
      "handsOn": "Deploy an agent UI with Streamlit/Gradio; add audit logging, permission gates and a simple governance rule set."
    },
    {
      "title": "Capstone — Autonomous Task Execution System",
      "hours": 6,
      "description": "Deliver an integrated multi-agent system that executes a real-world workflow with governance and monitoring.",
      "topics": [
        "Project scoping and architecture mapping",
        "Integrating LLM + RAG + tools + multi-agent flow",
        "Deployment & safety validation",
        "Demo preparation and reporting"
      ],
      "handsOn": "Build and demo a working multi-agent automation (one chosen track), submit architecture doc, governance report, and a short demo video."
    }
  ],
  "capstone": "Autonomous Task Execution System — integrated multi-agent product with architecture, governance, demo and deliverables.",
  "notes": "Students will produce a portfolio-ready autonomous agent demonstrating planning, retrieval, tool integration, monitoring and governance."
}

,

    {
      "id": "userc4",
      "title": "Full Stack Web Development Accelerator (MERN Focus)",
      "duration": "50 hours",
      "level": "Intermediate",
  
  "tags": ["FullStack","MERN","Cloud","Deployment"],
  "oneliner": "Build, deploy and scale modern web applications end-to-end using the MERN stack with cloud integrations and CI basics.",
  "outcome": "Design and implement production-ready MERN applications, integrate cloud databases, secure APIs, deploy to cloud platforms, and demonstrate a portfolio-ready full-stack project.",
  "tools": ["VS Code","Node.js","React","Express","MongoDB Atlas","Postman","Vite","GitHub","Render","Railway","Vercel","Firebase Auth"],
  "modules": [
    {
      "title": "Modern Web Development & JavaScript Essentials",
      "hours": 8,
      "description": "Foundational web concepts and modern JavaScript for building responsive frontends and client-server interaction.",
      "topics": [
        "Client-server architecture and REST principles",
        "HTML5 & CSS3 responsive UI fundamentals",
        "Modern JavaScript (ES6+): arrow functions, modules, promises, async/await",
        "DOM manipulation, event handling",
        "API consumption from frontend"
      ],
      "handsOn": "Build a responsive product listing page that fetches data from a public API using fetch/async patterns. Deliverable: interactive UI with pagination/filtering."
    },
    {
      "title": "Backend Engineering with Node.js & Express.js",
      "hours": 10,
      "description": "Server-side application development, secure REST APIs, middleware, authentication and file handling.",
      "topics": [
        "Node.js fundamentals and npm",
        "Building REST APIs with Express.js",
        "Middleware, routing, validation (Joi/Zod)",
        "Error handling patterns and security headers",
        "JWT-based authentication & authorization",
        "File uploads and static asset handling"
      ],
      "handsOn": "Develop a secure CRUD API for users and products with protected routes, validation, and JWT auth. Deliverable: Postman collection demonstrating endpoints and auth flows."
    },
    {
      "title": "MongoDB Atlas & Data Modeling",
      "hours": 8,
      "description": "Database modelling, Mongoose integration and cloud database best practices for scalable apps.",
      "topics": [
        "NoSQL vs SQL concepts",
        "MongoDB Atlas setup and connection",
        "Schema design & indexing strategies",
        "CRUD with Mongoose ODM",
        "Aggregation pipelines and performance",
        "Database security: env vars, roles"
      ],
      "handsOn": "Integrate backend with MongoDB Atlas, implement schema, aggregation queries, and filtered search/sort. Deliverable: sample queries and performance notes."
    },
    {
      "title": "Frontend Development with React.js",
      "hours": 10,
      "description": "Component-driven UI, routing, secure state handling and integration with backend APIs.",
      "topics": [
        "React components, props, state and hooks",
        "React Router for multi-page apps",
        "Form handling and input validation",
        "Global state using Context API",
        "API consumption and dynamic rendering",
        "Component optimization and memoization"
      ],
      "handsOn": "Build a user dashboard with login, protected routes, forms and dynamic data rendering from the API. Deliverable: functional SPA with auth flows and error handling."
    },
    {
      "title": "Application Deployment & Cloud-Ready Architecture",
      "hours": 6,
      "description": "Prepare production builds, configure environment separation, and deploy frontend and backend to cloud services with basic CI.",
      "topics": [
        "Production build optimization (Vite)",
        "Environment variables & config separation",
        "Deploy backend on Railway/Render and frontend on Vercel",
        "Securely connecting components and DB",
        "Intro to CI with GitHub Actions",
        "Real-time logs and basic monitoring"
      ],
      "handsOn": "Deploy the full MERN app: backend (Railway/Render), frontend (Vercel), connect MongoDB Atlas, and add a simple GitHub Actions workflow. Deliverable: public URL and deployment docs."
    },
    {
      "title": "Capstone — Full-Stack Productivity App (MERN + Cloud)",
      "hours": 8,
      "description": "End-to-end project integrating authentication, CRUD APIs, realtime updates and cloud deployment.",
      "topics": [
        "Project scoping and architecture decisions",
        "Auth flows, data modeling and UI/UX choices",
        "Realtime updates (polling or lightweight sync)",
        "Deployment and monitoring strategy",
        "Security & performance considerations"
      ],
      "handsOn": "Build and deploy a Smart Task & Collaboration Manager with JWT auth, CRUD, basic real-time updates, and cloud DB integration. Deliverable: GitHub repo, deployed URL, architectural report and demo presentation."
    }
  ],
  "capstone": "Smart Task & Collaboration Manager — deployable MERN app with authentication, real-time features and cloud DB integration; includes architecture document and public demo.",
  "notes": "Deliverables include GitHub repo with branching strategy, deployed public URL, technical architecture report and a final demo presentation."
},{
  "id": "userc5",
  "title": "Data Science & Business Intelligence with Power BI & Tableau",
  "duration": "50 hours",
  "level": "Intermediate",
  "tags": ["DataScience","PowerBI","Tableau","BI","ML"],
  "oneliner": "Transform data into actionable intelligence using Python, SQL, machine learning and enterprise-grade BI dashboards in Power BI & Tableau.",
  "outcome": "Prepare end-to-end analytics solutions: data cleaning, modeling, ML, and publishable BI dashboards; ready for Data Analyst / BI roles.",
  "tools": ["Python","pandas","NumPy","scikit-learn","Jupyter","Power BI","Tableau","MySQL/Azure Data Studio","SQL"],
  "modules": [
    {
      "title": "Data Science Foundations",
      "hours": 6,
      "description": "Core analytics thinking, data lifecycle and EDA basics for business metrics.",
      "topics": [
        "Role of Data Science in enterprises",
        "Data lifecycle: collection → engineering → modeling → deployment",
        "Exploratory Data Analysis (EDA) concepts",
        "Dataset formats, metadata & data quality issues",
        "Business metrics and KPIs"
      ],
      "handsOn": "Set up Jupyter/Anaconda environment; import a real dataset, perform cleaning, basic EDA and visualizations with matplotlib/pandas. Deliverable: EDA notebook and summary report."
    },
    {
      "title": "Python for Data Analytics",
      "hours": 8,
      "description": "Python operations tailored for data transformation, feature engineering and preprocessing pipelines.",
      "topics": [
        "Python essentials for analytics",
        "Data structures, functions and file handling",
        "pandas: merging, slicing, reshaping, groupby",
        "NumPy for numerical ops",
        "Feature extraction & handling missing/categorical data"
      ],
      "handsOn": "Build a reusable data preprocessing pipeline (cleaning, imputation, encoding, feature creation) in Python. Deliverable: preprocessing module + example transformed dataset."
    },
    {
      "title": "SQL for Data Analysis",
      "hours": 6,
      "description": "Relational querying and analytical SQL patterns for business reporting.",
      "topics": [
        "SELECT, WHERE, GROUP BY fundamentals",
        "Joins, subqueries and views",
        "Window functions for analytics",
        "Connecting Power BI/Tableau to SQL sources",
        "Basic data modeling principles"
      ],
      "handsOn": "Load a sales/HR dataset into MySQL or Azure Data Studio; create analytical queries, views and a report. Deliverable: SQL query workbook and exported result sets."
    },
    {
      "title": "Machine Learning Essentials",
      "hours": 10,
      "description": "Supervised and unsupervised model workflows: feature engineering, training and evaluation.",
      "topics": [
        "ML pipeline and evaluation metrics",
        "Feature engineering & selection",
        "Classification: logistic regression, decision trees",
        "Regression models and R² evaluation",
        "Clustering with K-Means",
        "Train-test split and cross-validation"
      ],
      "handsOn": "Build and evaluate ML models in scikit-learn (classification/regression); produce performance reports and sample predictions. Deliverable: Jupyter notebook with models, metrics and notebooks for reproducibility."
    },
    {
      "title": "Business Intelligence with Power BI",
      "hours": 10,
      "description": "Design interactive dashboards, DAX measures, time-intelligence and enterprise publish workflows.",
      "topics": [
        "Data import, cleaning and modeling in Power BI",
        "DAX fundamentals: measures & calculated columns",
        "Time-intelligence metrics",
        "Designing KPI-aligned reports",
        "Row-level security (RLS)",
        "Publishing and sharing dashboards"
      ],
      "handsOn": "Create an end-to-end Sales Performance dashboard in Power BI: data model, DAX measures, visuals, and publish to Power BI Service. Deliverable: .pbix file and published dashboard link (or screenshots + docs)."
    },
    {
      "title": "Business Intelligence with Tableau",
      "hours": 6,
      "description": "Advanced visual analytics and interaction design with Tableau.",
      "topics": [
        "Data blending, relationships and extracts",
        "Visualization best practices: heatmaps, tree maps, maps",
        "Filters, parameters and interactive controls",
        "Calculated fields and quick analytics",
        "Dashboard layout and performance tuning"
      ],
      "handsOn": "Build a Customer Insights dashboard in Tableau covering segmentation, KPIs and map visualizations. Deliverable: packaged workbook / public worksheet and storytelling notes."
    },
    {
      "title": "Capstone Project – Data-Driven Business Strategy",
      "hours": 4,
      "description": "End-to-end analytics solution with predictive modeling and BI storytelling for a retail or FinTech scenario.",
      "topics": [
        "Data ingestion and cleanup pipeline (Python + SQL)",
        "Predictive ML model for demand or churn",
        "BI dashboards in Power BI & Tableau",
        "Executive insight report and recommendations"
      ],
      "handsOn": "Deliver a complete analytics project: data pipeline, ML model, dual dashboards (Power BI & Tableau) and an executive insight report. Deliverable: GitHub repo, dashboards and a short presentation."
    }
  ],
  "capstone": "End-to-End Analytics Solution — predictive model + Power BI & Tableau dashboards with executive insights and repo.",
  "notes": "Evaluation focuses on analytical accuracy, visualization effectiveness and business relevance. Portfolio-ready deliverables expected."
}
,{
  "id": "userc6",
  "title": "Cloud Computing & Infrastructure Engineering (AWS/Azure)",
  "duration": "50 hours",
  "level": "Intermediate",
  "tags": ["Cloud", "AWS", "Azure", "DevOps", "Infrastructure"],
  "oneliner": "Design, deploy, secure, and scale enterprise-grade cloud infrastructure across AWS and Azure.",
  "outcome": "Hands-on expertise in deploying compute, networking, storage, security, serverless, automation, and multi-cloud applications — aligned with AWS & Azure industry certifications.",
  "tools": [
    "AWS Console", "Azure Portal", "IAM", "EC2", "Azure VM",
    "S3", "Blob Storage", "VPC", "VNets", "CloudWatch", "Azure Monitor",
    "Terraform (intro)", "Serverless Functions", "Load Balancers", "CDN"
  ],
  "modules": [
    {
      "title": "Cloud Computing Foundations & Architecture Principles",
      "hours": 6,
      "description": "Fundamentals of cloud models, architectures, global infrastructure and operational principles.",
      "topics": [
        "IaaS, PaaS, SaaS",
        "Public / Private / Hybrid cloud",
        "Vendor lock-in & multi-cloud",
        "Regions, AZs, Edge locations",
        "HA, FT, Scalability principles",
        "Shared Responsibility Model"
      ],
      "handsOn": "Set up AWS & Azure free-tier accounts, explore dashboards, launch first services. Deliverable: comparison report of services & pricing."
    },
    {
      "title": "Compute, Networking & Identity Management",
      "hours": 10,
      "description": "Secure compute provisioning + cloud networking and IAM access control strategies.",
      "topics": [
        "AWS EC2 & Azure VMs",
        "Auto Scaling & VMSS",
        "Elastic IPs, Load Balancers",
        "VPC/Subnets/Route Tables",
        "Azure VNets & NSGs",
        "IAM, RBAC & MFA"
      ],
      "handsOn": "Launch Linux & Windows VMs, configure VPC/VNet networking, IAM policy restrictions. Deliverable: network architecture map + IAM role config docs."
    },
    {
      "title": "Storage, Databases & Content Delivery",
      "hours": 8,
      "description": "Data persistence, distribution, backup and high-availability fundamentals for cloud apps.",
      "topics": [
        "S3 & Blob Storage",
        "Lifecycle policies, replication, versioning",
        "RDS vs Azure SQL",
        "DynamoDB vs CosmosDB",
        "CloudFront vs Azure CDN",
        "Backup / DR"
      ],
      "handsOn": "Host static website on S3/Blob Storage + CDN, configure DB backup policies. Deliverable: public URL + DR document."
    },
    {
      "title": "Security, Monitoring & Compliance",
      "hours": 10,
      "description": "Cloud security, encryption, monitoring, incident response and compliance governance.",
      "topics": [
        "Encryption (Transit/At-Rest)",
        "Federation & MFA",
        "Security Groups, NACLs, WAF",
        "KMS vs Key Vault",
        "CloudWatch / Azure Monitor",
        "Governance Frameworks"
      ],
      "handsOn": "Configure WAF rules, IAM audits, alert dashboards. Deliverable: security hardening checklist + monitoring dashboard screenshots."
    },
    {
      "title": "Serverless, Automation & Cloud Deployment Pipelines",
      "hours": 10,
      "description": "Cloud-native architectures, CI/CD, containers, and Infrastructure as Code introduction.",
      "topics": [
        "AWS Lambda / Azure Functions",
        "Event-driven compute",
        "Containers basics (ECS/ECR/ACI)",
        "Terraform fundamentals",
        "CI/CD overview (CodePipeline/Azure DevOps)",
        "Cost optimization strategies"
      ],
      "handsOn": "Deploy a CRUD serverless app + CI/CD for automated deployment + Terraform infra provisioning template. Deliverable: repo, pipeline logs & function endpoints."
    },
    {
      "title": "Capstone – Multi-Cloud Application Deployment",
      "hours": 6,
      "description": "Enterprise web application across AWS & Azure demonstrating reliability, security and cost-efficiency.",
      "topics": [
        "Multi-cloud backend deployment",
        "Managed database integration",
        "Observability & incident readiness",
        "CDN and backup integration",
        "Architecture documentation"
      ],
      "handsOn": "Deploy full working multi-cloud application with monitoring, IAM, CDN and DR policies. Deliverable: architecture diagram, deployed URLs, security reports & presentation."
    }
  ],
  "capstone": "Deploy a multi-cloud enterprise app across AWS & Azure with monitoring, security, CDN, and documentation.",
  "notes": "Targets roles including Cloud Engineer, DevOps Associate, SRE; supports AWS Cloud Practitioner & Microsoft AZ-900 certification paths."
},
{
  "id": "userc7",
  "title": "AI-Driven Cloud Integration (MLOps on AWS/Azure)",
  "duration": "50 hours",
  "level": "Advanced",
  "tags": ["MLOps","Cloud","SageMaker","AzureML","CI/CD"],
  "oneliner": "Design, deploy, automate and monitor ML applications on cloud using MLOps pipelines and industry-standard tools.",
  "outcome": "Build reproducible ML pipelines, containerize models, automate CI/CD deployments to cloud endpoints, and monitor & respond to production model drift.",
  "tools": ["Python","GitHub","Docker","AWS SageMaker","AWS Lambda","S3","ECR","CloudWatch","Azure ML","MLflow","DVC","Kubernetes","FastAPI","Flask","GitHub Actions"],
  "modules": [
    {
      "title": "Cloud & MLOps Foundations",
      "hours": 6,
      "description": "Fundamentals of cloud models, MLOps lifecycle and cloud ML service comparison (AWS vs Azure).",
      "topics": [
        "SaaS, PaaS, IaaS overview",
        "MLOps lifecycle: Data → Model → Deploy → Monitor",
        "Common ML workflow challenges solved by MLOps",
        "Cloud ML services: AWS vs Azure comparison"
      ],
      "handsOn": "Deploy a sample ML model locally to understand the end-to-end workflow and deployment lifecycle."
    },
    {
      "title": "Versioning & Reproducibility",
      "hours": 8,
      "description": "Practices for version control, dataset tracking, experiment logging and model packaging.",
      "topics": [
        "Git & GitHub workflows for ML",
        "Dataset versioning with DVC / Git-LFS",
        "Experiment tracking with MLflow",
        "Model packaging formats: pickle, ONNX"
      ],
      "handsOn": "Set up a model registry and experiment tracking flow with MLflow/DVC; register a sample model and record experiments."
    },
    {
      "title": "Cloud ML Development",
      "hours": 10,
      "description": "Hands-on use of managed cloud ML services for training, hosting and retraining triggers.",
      "topics": [
        "AWS SageMaker: training jobs, notebooks, hosting",
        "Azure ML: pipelines, endpoints",
        "AutoML pipelines and job orchestration",
        "Model evaluation best practices and retraining triggers"
      ],
      "handsOn": "Train a classification model in SageMaker or Azure ML and deploy it as a cloud endpoint; validate predictions and capture metrics."
    },
    {
      "title": "MLOps Pipeline Automation — CI/CD for ML",
      "hours": 12,
      "description": "Automate build, test, containerize and deploy workflows for ML models using CI/CD pipelines.",
      "topics": [
        "GitHub Actions for ML CI pipelines (test, build, validate)",
        "Dockerization of models and images",
        "Container registries: AWS ECR / Azure Container Registry",
        "Continuous deployment to SageMaker / Azure ML endpoints",
        "Drift detection & rollback strategies"
      ],
      "handsOn": "Create a GitHub Actions pipeline that builds, tests, containerizes and deploys a model to the cloud upon push."
    },
    {
      "title": "Scalable Serving & Monitoring",
      "hours": 10,
      "description": "Build scalable, observable model serving layers with autoscaling, monitoring and experiment comparison.",
      "topics": [
        "API deployment with FastAPI / Flask",
        "Auto-scaling & cost optimization strategies",
        "Monitoring with CloudWatch / Application Insights",
        "A/B testing, Blue-Green deployments for models",
        "Logging, alerting and failure recovery"
      ],
      "handsOn": "Deploy model-serving APIs, configure monitoring dashboards and alerts, and run an A/B test with traffic routing."
    },
    {
      "title": "Capstone — Automated MLOps Pipeline with Self-Updating Model",
      "hours": 4,
      "description": "End-to-end automated pipeline that tracks experiments, containerizes models, deploys to cloud, and suggests retraining on drift.",
      "topics": [
        "Experiment tracking + DVC/MLflow integration",
        "CI/CD trigger for cloud deployment",
        "Monitoring-driven retraining suggestion workflow",
        "Documentation and final presentation"
      ],
      "handsOn": "Deliver a working CI/CD-driven MLOps pipeline: experiment tracking, container build, cloud deployment, monitoring and a demo of auto-retraining suggestion."
    }
  ],
  "capstone": "Automated MLOps Pipeline with Self-Updating Model — includes experiment tracking, containerization, CI/CD deployment and monitoring-driven retraining.",
  "notes": "Outcome: production-ready MLOps expertise—end-to-end pipeline, monitoring, scalability and reproducibility on AWS/Azure."
},
{
  "id": "userc8",
  "title": "DevOps & Continuous Integration Masterclass",
  "duration": "50 hours",
  "level": "Intermediate",
  "tags": ["DevOps","CI/CD","Kubernetes","Docker"],
  "oneliner": "Build, automate, deploy and monitor modern applications using Git, Docker, Jenkins, Kubernetes and CI/CD pipelines.",
  "outcome": "Design and operate CI/CD pipelines, containerize and orchestrate applications on Kubernetes, implement IaC basics, and monitor production systems with observability tools.",
  "tools": ["Git","GitHub","Docker","Docker Hub","Jenkins","GitHub Actions","Kubernetes (Minikube)","Terraform","Linux CLI","SonarQube","Prometheus","Grafana"],
  "modules": [
    {
      "title": "DevOps Foundations & Linux for Automation",
      "hours": 6,
      "description": "DevOps culture, CI/CD principles and Linux basics required for automation.",
      "topics": [
        "DevOps culture and CI/CD principles",
        "SDLC vs DevOps lifecycle",
        "Linux filesystem, users and permissions",
        "Shell scripting fundamentals for automation"
      ],
      "handsOn": "Write bash scripts to automate routine tasks (backups, log rotation, simple cron jobs). Deliverable: repo with scripts and run instructions."
    },
    {
      "title": "Version Control with Git & GitHub",
      "hours": 8,
      "description": "Source control workflows for collaborative development and release management.",
      "topics": [
        "Git basics: commits, branches, merges",
        "Git workflows: Git Flow, feature branching",
        "GitHub collaboration: PRs and code reviews",
        "Resolving merge conflicts and PR strategy"
      ],
      "handsOn": "Use GitHub to run a team workflow: branching, PR, review and merge; simulate and resolve merge conflicts. Deliverable: GitHub repo with documented workflow."
    },
    {
      "title": "Containerization with Docker",
      "hours": 10,
      "description": "Container concepts, image builds, multi-stage optimization and local multi-container orchestration.",
      "topics": [
        "Why containers — Docker vs VMs",
        "Dockerfile authoring and multi-stage builds",
        "Docker Compose for multi-container apps",
        "Image optimization and publishing to Docker Hub"
      ],
      "handsOn": "Containerize a Node/Python microservice, create docker-compose for local orchestration, and publish an optimized image to Docker Hub. Deliverable: image + compose files + README."
    },
    {
      "title": "CI/CD Pipeline Automation — Jenkins & GitHub Actions",
      "hours": 12,
      "description": "Implement automated build, test, quality gates and deployment pipelines using Jenkins and GitHub Actions.",
      "topics": [
        "Jenkins installation, jobs and pipelines",
        "Jenkins pipelines and Groovy basics",
        "GitHub Actions workflows for CI",
        "Quality gates with SonarQube",
        "Artifact storage and automated deployments"
      ],
      "handsOn": "Create a CI pipeline (build → test → quality scan → package) using Jenkins or GitHub Actions; integrate SonarQube quality gate. Deliverable: pipeline config + build records."
    },
    {
      "title": "Kubernetes Orchestration & Infrastructure Automation",
      "hours": 9,
      "description": "Cluster fundamentals, manifest configuration, rolling updates and an intro to Infrastructure as Code.",
      "topics": [
        "Kubernetes fundamentals: Pods, Services, Deployments",
        "ConfigMaps, Secrets and resource management",
        "Scaling, rolling updates and blue-green deployments",
        "YAML manifests and Helm basics",
        "Intro to IaC with Terraform"
      ],
      "handsOn": "Deploy an application to a local Minikube cluster, configure deployments, service exposure and perform rolling updates. Deliverable: manifests + deployment demo."
    },
    {
      "title": "Monitoring, Logging & Continuous Feedback",
      "hours": 3,
      "description": "Observability basics: metrics, logging, dashboards and alerts for production systems.",
      "topics": [
        "DevOps observability model",
        "Prometheus metrics collection",
        "Grafana dashboard creation",
        "Alert rules and continuous feedback"
      ],
      "handsOn": "Install Prometheus & Grafana for the deployed app; create dashboards and alert rules. Deliverable: dashboard screenshots + alert config."
    },
    {
      "title": "Capstone — End-to-End CI/CD Deployment",
      "hours": 2,
      "description": "Deliver a compact end-to-end DevOps workflow: containerize, pipeline, deploy and monitor a modern web app.",
      "topics": [
        "CI pipeline execution on commit",
        "Kubernetes deployment & monitoring",
        "DevOps documentation and presentation"
      ],
      "handsOn": "Containerize an app, configure CI to build/test/deploy to Minikube/Kubernetes, and enable monitoring. Deliverable: repo, CI logs, manifests and a brief presentation."
    }
  ],
  "capstone": "End-to-End CI/CD Deployment for a Modern Web Application — containerization, pipeline automation, Kubernetes deployment and monitoring.",
  "notes": "Complete course ideal for those pursuing DevOps, SRE or platform engineering roles."
},
{
  "id": "userc9",
  "title": "Advanced Excel & Automation for Data Professionals",
  "duration": "50 hours",
  "level": "Intermediate - Advanced",
  "tags": ["Excel", "Data Analytics", "Automation", "VBA"],
  "oneliner": "Master enterprise-grade data analytics, automation, and business reporting using Excel, Power Query, Power Pivot, and workflow automation tools.",
  "outcome": "Students will be able to build automated business dashboards, develop VBA/Office Scripts to eliminate repetitive tasks, and integrate Excel with enterprise workflows for live analytics.",
  "tools": [
    "Excel Advanced Functions",
    "Power Query",
    "Power Pivot",
    "DAX",
    "VBA Macros",
    "Office Scripts",
    "SQL Connectors",
    "Power Automate"
  ],
  "modules": [
    {
      "title": "Advanced Excel Functions & Data Manipulation",
      "hours": 10,
      "description": "Advanced formulas, dynamic arrays, lookups and error-proof data handling techniques.",
      "topics": [
        "XLOOKUP, INDEX-MATCH, FILTER, OFFSET",
        "Dynamic arrays: SORT, UNIQUE, SEQUENCE, LAMBDA",
        "IFS, SWITCH and optimized conditional workflows",
        "Text transformations: TEXTSPLIT, REGEX functions",
        "Error tracing and formula auditing"
      ],
      "handsOn": "Build dynamic formula-driven business KPI worksheets using real operational datasets."
    },
    {
      "title": "Data Modeling with Power Query & Power Pivot",
      "hours": 10,
      "description": "Relational data modeling and ETL automation inside Excel.",
      "topics": [
        "ETL with Power Query (merge, unpivot, transformations)",
        "Live connection to SQL, CSVs and Web APIs",
        "Data Model relationships and cardinality",
        "DAX basics: CALCULATE, FILTER and evaluation context"
      ],
      "handsOn": "Create a live-refreshing analytical data model combining multiple enterprise data sources."
    },
    {
      "title": "Dashboards, BI Reporting & Interactive Visuals",
      "hours": 10,
      "description": "Interactive business reporting and data storytelling with enterprise standards.",
      "topics": [
        "PivotTable & PivotChart mastery",
        "Slicers, timelines and dynamic KPIs",
        "Drill-down charts and scenario analysis",
        "Visualization best practices for executives",
        "Workbook access control and secure sharing"
      ],
      "handsOn": "Design a professional dashboard with role-based interactivity and update automation."
    },
    {
      "title": "Automation with VBA, Macros & Office Scripts",
      "hours": 12,
      "description": "Automate reporting pipelines using on-premise and cloud-based scripting.",
      "topics": [
        "Macro recording, editing, optimizing",
        "VBA logic: loops, objects, events",
        "User forms for guided data entry",
        "Error handling and execution performance",
        "Office Scripts automation for Excel Online",
        "Automated reminders, formatting and report distribution"
      ],
      "handsOn": "Build a One-Click Report Generator using VBA forms + validation + formatting automation."
    },
    {
      "title": "Workflow Integration & Data Governance",
      "hours": 4,
      "description": "Integrate Excel into enterprise workflows with proper governance and controls.",
      "topics": [
        "Excel + Power Automate cloud workflows",
        "SharePoint & OneDrive collaboration",
        "Data confidentiality and permissions",
        "Audit logs & approval tracking",
        "Data lifecycle compliance"
      ],
      "handsOn": "Create an automated review and approval system triggered on data refresh."
    },
    {
      "title": "Capstone Project — Automated Business Analytics System",
      "hours": 4,
      "description": "Implement end-to-end reporting automation with live data connectivity and executive dashboards.",
      "topics": [
        "Power Query live data model",
        "KPI-driven BI dashboard",
        "Auto-refresh and automated report distribution",
        "Performance analysis and stakeholder presentation"
      ],
      "handsOn": "Deliver a fully automated dashboard solution with VBA/Office-Scripts and business insights presentation."
    }
  ],
  "capstone": "A cloud-integrated automated analytics system with live business KPIs, scheduled reporting and a stakeholder-ready performance deck.",
  "notes": "Ideal for Data Analysts, MIS Executives, Business Analysts and automation-focused Excel professionals."
},
    {
  "id": "userc10",
  "title": "Blockchain & Decentralized Application Engineering",
  "duration": "50 hours",
  "level": "Advanced",
  "tags": ["Blockchain","Solidity","DApp","Web3"],
  "oneliner": "Master smart contracts, DApp development and decentralized architectures to build secure, transparent and production-ready blockchain systems.",
  "outcome": "Design and deploy smart contracts, build DApps with Web3 integrations, use decentralized storage, and implement secure development and deployment pipelines on testnets.",
  "tools": ["Ethereum","Solidity","MetaMask","Hardhat","Truffle","Ganache","Remix IDE","IPFS","Ethers.js","Web3.js","Polygon Testnet","Slither","MythX"],
  "modules": [
    {
      "title": "Blockchain Foundations & Cryptographic Security",
      "hours": 8,
      "description": "Core distributed ledger principles, cryptography basics and the role of decentralization.",
      "topics": [
        "Trust minimization, decentralization and immutability",
        "Distributed ledgers, consensus algorithms and P2P networking",
        "Hashing, Merkle Trees, public/private key cryptography",
        "Smart contract architecture and execution model",
        "Blockchain ecosystems: Ethereum, Hyperledger, Polygon"
      ],
      "handsOn": "Configure MetaMask, create testnet accounts and interact with testnet explorers; produce a short write-up comparing testnet transactions."
    },
    {
      "title": "Ethereum Architecture & Smart Contract Programming",
      "hours": 12,
      "description": "Solidity programming, contract patterns, EVM internals and secure development practices.",
      "topics": [
        "Solidity syntax, state variables, mappings and structs",
        "Events, logging, ABI and gas considerations",
        "EVM internals and gas optimization",
        "Secure patterns: access control, withdrawal, checks-effects-interactions",
        "Testing and debugging smart contracts"
      ],
      "handsOn": "Write, test and deploy an ERC-20 token contract using Remix and Hardhat; test with MetaMask and include unit tests via Hardhat."
    },
    {
      "title": "DApp Development Using Web3 Integration",
      "hours": 10,
      "description": "Frontend-backend integration with Ethers.js/Web3.js and secure wallet flows for user interaction.",
      "topics": [
        "Ethers.js / Web3.js for blockchain interaction",
        "Wallet connection flows and UX patterns",
        "Reading and writing contract state from frontend",
        "DApp architecture and security considerations",
        "Handling reentrancy and UX-based phishing risks"
      ],
      "handsOn": "Build a simple voting or token-transfer DApp (React optional) that interacts with a deployed smart contract on a testnet."
    },
    {
      "title": "Decentralized Storage, Identity & Scaling Solutions",
      "hours": 10,
      "description": "Integrate IPFS, DID concepts and layer-2 scaling to make DApps production-ready.",
      "topics": [
        "IPFS for decentralized file storage",
        "Decentralized Identity (DID) basics",
        "Smart contract upgrades & versioning patterns",
        "Layer-2 solutions: Polygon, Arbitrum",
        "Cross-chain & interoperability fundamentals"
      ],
      "handsOn": "Deploy contract assets to IPFS and build a DApp that stores/retrieves files from IPFS; test on a Polygon testnet."
    },
    {
      "title": "Blockchain Security, Testing & Deployment Pipelines",
      "hours": 6,
      "description": "Secure SDLC for blockchain: static analysis, vulnerability checks and CI/CD for contracts.",
      "topics": [
        "Common vulnerabilities: reentrancy, overflow, frontrunning",
        "Security tooling: Slither, MythX and unit testing",
        "Hardhat & Truffle automation workflows",
        "CI/CD for smart contracts and deployment best practices",
        "Governance and compliance considerations"
      ],
      "handsOn": "Run automated security scans and unit tests, perform a small security audit on a sample contract and document findings/remediations."
    },
    {
      "title": "Capstone — Real-World DApp: Tokenized Membership & Credential System",
      "hours": 4,
      "description": "End-to-end DApp integrating tokens, IPFS credential storage and testnet deployment.",
      "topics": [
        "Smart contract roles & access control",
        "Frontend integration and transaction flows",
        "IPFS storage for credentials",
        "Testnet deployment (Polygon) and documentation"
      ],
      "handsOn": "Deliver a secure tokenized membership DApp deployed to Polygon testnet with IPFS-backed credentials, technical docs and demo video."
    }
  ],
  "capstone": "Tokenized Membership & Credential Verification DApp — secure contract, IPFS integration and testnet deployment with full documentation.",
  "notes": "Suitable for Blockchain Developer, Smart Contract Engineer and Web3 Application Architect roles."
},
{
  "id": "userc11",
  "title": "AI Mastery Program: From Foundations to Agentic Intelligence",
  "duration": "200 hours",
  "level": "Beginner to Advanced",
  "tags": ["Python", "Machine Learning", "Deep Learning", "GenAI", "Agentic AI"],
  "oneliner": "A complete journey from Python fundamentals to building autonomous AI agents powered by GenAI and real-time decision systems.",
  "outcome": "Build production-grade ML, DL, Generative AI and multi-agent autonomous systems with strong theoretical grounding and ethical practices.",
  "modules": [
    {
      "title": "Python & Data Foundations for AI",
      "hours": 40,
      "description": "Programming fundamentals, EDA, math for ML and data processing workflows.",
      "topics": [
        "Python essentials: control flow, OOP",
        "Pandas & NumPy data processing",
        "Matplotlib & Plotly visualization",
        "Linear algebra for neural networks",
        "Probability & statistics",
        "EDA & documentation in Jupyter"
      ],
      "handsOn": "Data pipelines, feature engineering, real datasets (finance/retail/healthcare)."
    },
    {
      "title": "Machine Learning & Predictive Analytics",
      "hours": 50,
      "description": "Supervised/unsupervised ML, model optimization and evaluation best practices.",
      "topics": [
        "Regression, SVM, Decision Trees, Random Forests, XGBoost",
        "Clustering, PCA, anomaly detection",
        "Cross-validation, regularization",
        "Model interpretability (SHAP, LIME)",
        "Intro to model deployment"
      ],
      "handsOn": "Predictive pipelines, segmentation, recommendation basics; Mini Project: Sales forecasting & behavior analytics."
    },
    {
      "title": "Deep Learning & Neural Networks",
      "hours": 50,
      "description": "CNN, RNN, Transformers and optimization for real-world deployments.",
      "topics": [
        "Neural network math & backpropagation",
        "TensorFlow/PyTorch workflows",
        "CNNs: classification & detection",
        "RNN/LSTM for time-series & NLP",
        "Intro to Transformers",
        "Drift monitoring & performance tuning"
      ],
      "handsOn": "Medical imaging classifier, face recognition, sentiment analysis; Mini Project: Intelligent attendance system."
    },
    {
      "title": "Generative AI & Foundation Models",
      "hours": 40,
      "description": "LLMs, embeddings, RAG workflows, fine-tuning and ethical practices.",
      "topics": [
        "Transformer architecture",
        "Prompt engineering strategies",
        "Summarization & text generation",
        "Vector DBs: FAISS, ChromaDB",
        "Multi-modal GenAI",
        "LoRA / RLHF tuning",
        "Responsible AI"
      ],
      "handsOn": "Domain-expert chatbot with RAG; Mini Project: Custom knowledge assistant."
    },
    {
      "title": "Agentic AI & Autonomous Systems Engineering",
      "hours": 20,
      "description": "Multi-agent systems: reasoning, memory, tool execution and orchestration.",
      "topics": [
        "Agentic AI design: planning, memory",
        "LangChain / LangGraph agents",
        "CrewAI, AutoGen frameworks",
        "Function calling & action safety",
        "Multi-agent collaboration patterns"
      ],
      "handsOn": "Enterprise task automation; Mini Project: Business workflow multi-agent system."
    },
    {
      "title": "Capstone: Autonomous AI Product Development",
      "hours": 20,
      "description": "Full-stack intelligent system integrating ML + DL + GenAI + Agentic automation with deployable UI.",
      "topics": [
        "Real-time ML decision module",
        "Deep perception systems",
        "GenAI + agents orchestration",
        "Cloud-ready deployment"
      ],
      "handsOn": "Complete autonomous AI system with demo, documentation & Git repository."
    }
  ],
  "tools": [
    "Python", "Jupyter", "Pandas", "NumPy", "Matplotlib", "Plotly",
    "scikit-learn", "TensorFlow", "PyTorch",
    "FAISS", "ChromaDB",
    "LangChain", "LangGraph", "CrewAI", "AutoGen",
    "Docker", "Cloud Deploy"
  ],
  "careerPaths": [
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning Specialist",
    "GenAI Solutions Engineer",
    "Autonomous Systems Developer"
  ],
  "notes": "Highly project-driven — every module includes labs + mini-projects with enterprise datasets."
},{
  id: "cse-eng-addon",
  title: "CSE Engineering",
  subtitle: "24 Hours per Semester | Practical & Advanced Application Focus",
  description:
    "KTU-aligned, industry-focused 24-hour add-on courses designed to convert semester theory into advanced, hands-on and real-world AI, Data Science, and Full Stack skills.",
  semesters: [
    {
      semester: "Semester 2",
      title: "Advanced Python with Data Science",
      hours: "24 Hours",
      modules: [
        "Advanced Python for Data Applications: OOP patterns, comprehensions, generators, decorators",
        "Data Handling with NumPy & Pandas: joins, groupby, missing data handling",
        "Data Visualization & Storytelling using Matplotlib, Seaborn, Plotly",
        "API, JSON & Live Data Ingestion workflows",
        "Mini Capstone: End-to-end Exploratory Data Analysis project"
      ],
      outcome:
        "Students gain industry-level Python and data analysis skills without repeating basic syntax."
    },
    {
      semester: "Semester 3",
      title: "Modern Web & Backend Foundations",
      hours: "24 Hours",
      modules: [
        "Modern Frontend Essentials with responsive layouts",
        "JavaScript ES6+, DOM manipulation, async programming",
        "Databases: Advanced SQL and MongoDB schema design",
        "Backend API development using Flask or Node.js",
        "Mini Project: Full-stack web application"
      ],
      outcome:
        "DBMS and DSA concepts are transformed into functional web systems."
    },
    {
      semester: "Semester 4",
      title: "Machine Learning & Deep Learning",
      hours: "24 Hours",
      modules: [
        "Data preprocessing and advanced feature engineering",
        "Machine learning algorithms using Scikit-learn",
        "Neural networks with Keras/TensorFlow",
        "CNN or RNN focused implementation track",
        "Mini Capstone: ML/DL model development and evaluation"
      ],
      outcome:
        "Students build and evaluate ML models instead of focusing on mathematical derivations."
    },
    {
      semester: "Semester 5",
      title: "Applied AI & Deployment",
      hours: "24 Hours",
      modules: [
        "Data mining techniques: clustering and association rules",
        "Advanced ML models including Random Forest and XGBoost",
        "AI applications in NLP and Computer Vision",
        "Model deployment using Flask or FastAPI",
        "Mini Capstone: End-to-end AI web service"
      ],
      outcome:
        "Students learn to convert AI models into real, deployable products."
    },
    {
      semester: "Semester 6",
      title: "Full Stack Development (MERN)",
      hours: "24 Hours",
      modules: [
        "Advanced React with hooks, routing, and state management",
        "Node.js and Express backend development",
        "MongoDB with authentication and JWT",
        "Deployment and DevOps basics",
        "Mini Capstone: Complete MERN stack application"
      ],
      outcome:
        "Learners build a complete industry-grade full-stack application."
    },
    {
      semester: "Semester 7",
      title: "Generative AI & Applications",
      hours: "24 Hours",
      modules: [
        "Generative AI fundamentals and LLM concepts",
        "Text generation using GPT APIs and HuggingFace",
        "Image generation with Stable Diffusion and prompt engineering",
        "Multimodal AI including voice and vision-language models",
        "Mini Capstone: GenAI application using Streamlit or Gradio"
      ],
      outcome:
        "Students graduate with portfolio-ready Generative AI applications."
    }
  ]
}
,
 {
  id: "ai-eng-addon",
  title: "CSE Artificial Intelligence Engineering",
  subtitle: "24 Hours per Semester | Practical & Advanced Application Focus",
  description:
    "Practice-first add-on courses where university theory is executed, reinforced, and extended through hands-on implementation. Each course is optimized to 24 hours and aligned with KTU semester subjects.",
  teachingModel:
    "University explains concepts → Add-on executes and extends them through practice",
  semesters: [
    {
      semester: "Semester 2",
      title: "Python Programming & Computational Practice",
      alignedSubjects: [
        "Programming for Problem Solving",
        "Python Programming"
      ],
      hours: "24 Hours",
      modules: [
        "Python program execution using control structures and functions",
        "Data structures in practice: lists, dictionaries, and sets",
        "Program structuring using functions and modular design",
        "File handling with text, CSV, and structured data",
        "Debugging techniques and exception handling",
        "Problem modeling and logical step design"
      ],
      practicalEmphasis:
        "Regular coding drills, logic-building exercises, and small utility programs",
      outcome:
        "Students gain confidence in Python programming and computational thinking required for advanced coursework."
    },
    {
      semester: "Semester 3",
      title: "Data Structures & Database Implementation",
      alignedSubjects: [
        "Data Structures",
        "Database Management Systems"
      ],
      hours: "24 Hours",
      modules: [
        "Implementation of stacks, queues, and linked data structures",
        "Application of searching and sorting algorithms",
        "Relational database design and SQL querying",
        "Practical data normalization exercises",
        "Backend data handling using Python and databases"
      ],
      practicalEmphasis:
        "Coding labs, database exercises, and backend logic assignments",
      outcome:
        "Students understand how structured data is stored, accessed, and processed in real applications."
    },
    {
      semester: "Semester 4",
      title: "Web & Backend Systems Practice",
      alignedSubjects: [
        "Operating Systems",
        "Computer Networks",
        "Web Technologies"
      ],
      hours: "24 Hours",
      modules: [
        "Frontend development for client-side interaction",
        "REST API development and request handling",
        "Backend logic implementation using Node.js",
        "Database integration using MongoDB",
        "Authentication and authorization workflows",
        "API testing and debugging practices"
      ],
      practicalEmphasis:
        "End-to-end application development with system integration focus",
      outcome:
        "Students gain real-world experience in building and debugging web applications."
    },
    {
      semester: "Semester 5",
      title: "Data Science & Business Intelligence Practice",
      alignedSubjects: [
        "Probability & Statistics",
        "Machine Learning"
      ],
      hours: "24 Hours",
      modules: [
        "Data cleaning and preparation techniques",
        "Exploratory Data Analysis on real datasets",
        "Applied statistical analysis for decision making",
        "Data visualization for insight communication",
        "Dashboard creation using BI tools",
        "Business insight interpretation and reporting"
      ],
      practicalEmphasis:
        "Hands-on dataset analysis and dashboard-based projects",
      outcome:
        "Students learn to convert raw data into actionable business insights."
    },
    {
      semester: "Semester 6",
      title: "Cloud Computing & DevOps Practice",
      alignedSubjects: [
        "Cloud Computing",
        "Software Engineering"
      ],
      hours: "24 Hours",
      modules: [
        "Application deployment on cloud platforms",
        "Linux command-line operations for cloud servers",
        "Containerization using Docker",
        "CI/CD pipeline execution",
        "Infrastructure automation using scripts",
        "Monitoring and troubleshooting deployed systems"
      ],
      practicalEmphasis:
        "Live cloud labs and deployment-oriented exercises",
      outcome:
        "Students understand how software systems operate in real production environments."
    },
    {
      semester: "Semester 7",
      title: "Applied AI, Generative AI & Agentic Systems",
      alignedSubjects: [
        "Artificial Intelligence",
        "Machine Learning"
      ],
      hours: "24 Hours",
      modules: [
        "Machine learning workflow execution",
        "Generative AI usage through prompt-based systems",
        "Design of simple agentic workflows",
        "Introduction to MLOps concepts",
        "Awareness of AI deployment in applications"
      ],
      practicalEmphasis:
        "AI labs, agent simulations, and intelligent application exercises",
      outcome:
        "Students gain practical exposure to real-world AI systems and modern AI workflows."
    }
  ]
}

,
{
  id: "ds-eng-addon",
  title: "CSE Data Science Engineering",
  subtitle: "24 Hours per Semester | Practical & Advanced Application Focus",
  pedagogy:
    "Lab-centric, outcome-oriented, curriculum-synchronized",
  purpose:
    "Reinforce university theory through applied and advanced hands-on learning",
  semesters: [
    {
      semester: "Semester 2",
      title: "Programming Foundations & Computational Thinking",
      courseTitle: "Applied Python Programming & Logical Thinking",
      duration: "24 Hours",
      objective:
        "To reinforce Python fundamentals taught in the core curriculum by focusing on structured coding, logical reasoning, and applied problem-solving rather than syntax memorization.",
      topics: [
        "Structured Python programming with control flow and functions",
        "Modular programming and code organization practices",
        "Effective use of Python data structures for real problems",
        "Logical problem decomposition and step-wise solution design",
        "File handling techniques for data persistence",
        "Exception handling for robust program execution"
      ],
      practicalEmphasis: [
        "Translating problem statements into working Python logic",
        "Writing clean, reusable, and readable Python code",
        "Developing small-scale applications such as data processors and record managers"
      ],
      outcome:
        "Students gain confidence in applying Python logically and efficiently, forming a strong base for data structures, AI, and backend programming in later semesters."
    },
    {
      semester: "Semester 3",
      title: "Data Structures, Databases & Backend Logic",
      courseTitle: "Data Structures & Database Integration using Python",
      duration: "24 Hours",
      objective:
        "To apply DSA and DBMS concepts taught in theory by implementing them programmatically and integrating databases with backend logic.",
      topics: [
        "Implementation of core data structures using Python",
        "Algorithmic thinking using searching and sorting techniques",
        "Performance understanding through complexity intuition",
        "SQL query execution and relational data modeling",
        "Database schema design aligned with real use cases",
        "Python-database connectivity and data operations"
      ],
      practicalEmphasis: [
        "Writing Python implementations of DSA concepts",
        "Designing and querying structured databases",
        "Backend logic development with database interaction"
      ],
      outcome:
        "Students understand how data structures and databases operate together in real software systems and applications."
    },
    {
      semester: "Semester 4",
      title: "Web & Backend Application Engineering",
      courseTitle: "Full Stack Application Development (MERN Foundations)",
      duration: "24 Hours",
      objective:
        "To apply OS, CN, and backend concepts by building end-to-end web applications using modern full-stack technologies.",
      topics: [
        "Frontend fundamentals for dynamic web interfaces",
        "Client-server communication models",
        "RESTful API design and data flow",
        "Backend development using Node.js and Express",
        "NoSQL database fundamentals using MongoDB",
        "Basic authentication and secure data handling"
      ],
      practicalEmphasis: [
        "Developing responsive user interfaces",
        "Creating and consuming REST APIs",
        "Building a functional full-stack CRUD application"
      ],
      outcome:
        "Students gain practical exposure to full-stack development workflows used in industry-grade web applications."
    },
    {
      semester: "Semester 5",
      title: "Data Science & Business Intelligence",
      courseTitle: "Applied Data Science & Business Intelligence",
      duration: "24 Hours",
      objective:
        "To convert statistical and data science theory into practical data analysis and business decision-making skills.",
      topics: [
        "Data cleaning and preprocessing techniques",
        "Exploratory data analysis for insight discovery",
        "Practical understanding of statistical measures",
        "Visualization techniques for analytical clarity",
        "Business dashboards using Power BI / Tableau",
        "Data storytelling for business communication"
      ],
      practicalEmphasis: [
        "Analyzing real-world datasets",
        "Building interactive BI dashboards",
        "Presenting insights for decision-making scenarios"
      ],
      outcome:
        "Students learn to interpret data meaningfully and communicate insights effectively using industry-standard BI tools."
    },
    {
      semester: "Semester 6",
      title: "Cloud Computing & DevOps Engineering",
      courseTitle: "Cloud Infrastructure & DevOps Practices",
      duration: "24 Hours",
      objective:
        "To apply cloud and DevOps concepts by working with real infrastructure, deployment models, and automation practices.",
      topics: [
        "Cloud computing models and architectures",
        "Core AWS / Azure services and use cases",
        "Linux essentials for cloud environments",
        "Containerization using Docker",
        "CI/CD concepts and workflow understanding",
        "Infrastructure automation overview"
      ],
      practicalEmphasis: [
        "Deploying applications on cloud platforms",
        "Containerizing applications for portability",
        "Simulating CI/CD pipelines"
      ],
      outcome:
        "Students understand how modern applications are deployed, managed, and scaled in cloud environments."
    },
    {
      semester: "Semester 7",
      title: "Applied AI, Generative AI & Agentic Systems",
      courseTitle: "Applied Artificial Intelligence & Intelligent Systems",
      duration: "24 Hours",
      objective:
        "To bridge academic AI learning with practical AI system design, focusing on modern generative and agent-based approaches.",
      topics: [
        "End-to-end machine learning workflow revision",
        "Generative AI concepts and applications",
        "Prompt engineering techniques",
        "Fundamentals of agent-based AI systems",
        "Introduction to MLOps concepts",
        "Deployment considerations for AI systems"
      ],
      practicalEmphasis: [
        "Implementing basic ML workflows",
        "Using generative AI tools effectively",
        "Simulating intelligent agent behaviors",
        "Building small AI-powered applications"
      ],
      outcome:
        "Students gain clarity on how AI systems are designed, deployed, and scaled in real-world environments."
    }
  ]
}

  ]
};
