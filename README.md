# SKELETON_CREW // ABOUTUS

> Architects of the digital trash. We build what others don't need.

![System Status](https://img.shields.io/badge/SYSTEM_STATUS-ONLINE-00ff41?style=for-the-badge&logo=probot&logoColor=00ff41)
![Platform](https://img.shields.io/badge/PLATFORM-LINUX%2FARM64-blue?style=for-the-badge&logo=arm&logoColor=white)
![Deployment](https://img.shields.io/badge/DEPLOYMENT-K8S-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white)

**[PROJECT_LINK](https://aboutus.misseddeadlines.dpdns.org)**

---

## 0x01 // OVERVIEW

`SKELETON_CREW` is the official portal for an elite team of operatives building experimental, highly questionable, and occasionally functional digital artifacts. This web interface serves as our terminal for showcasing active operations and personnel status.

The application features a high-fidelity **hacker aesthetic**, utilizing modern frontend technologies and a GitOps-driven deployment pipeline optimized for **ARM64** edge infrastructure (Orange Pi/Raspberry Pi).

## 0x02 // TECH_STACK

### COMMAND_LINE (Frontend)
- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

### INFRASTRUCTURE (DevOps)
- **Containerization:** Multi-stage Docker (ARM64/AARCH64 optimized)
- **Orchestration:** Kubernetes (K8s) via **Traefik Ingress**
- **CI/CD:** GitHub Actions with atomic SHA-based tagging
- **Registry:** GitHub Container Registry (GHCR.io)

## 0x03 // INTERFACE_FEATURES

- **DYNAMIC_PERSONNEL_SCAN:** Hover over team members to initiate a 2x magnification scan and reveal encrypted quotes.
- **OPERATIONAL_LOGS:** A categorized ledger of active projects (Live, In Development, or Classified).
- **MATRIX_OVERLAY:** Real-time CRT scanline effects and grid-based structural layout.
- **RESPONSIVE_TERMINAL:** Full liquid layout optimized for mobile operatives and desktop monitors alike.

## 0x04 // OPERATIONAL_MANUAL

### LOCAL_SETUP
```bash
# Clone the repository
git clone https://github.com/PiterPentester/aboutus.git
cd aboutus

# Install dependencies
npm install

# Start the development terminal
npm run dev
```

### BUILD_PROTOCOLS
We use a unified `Makefile` for deployment operations:
```bash
make build          # Local production build
make docker-build   # Build ARM64 image locally
make docker-run     # Run containerized instance (port 80)
make docker-push    # Push to GHCR (automated via GitHub Actions)
make deploy         # Apply K8s manifests
```

## 0x05 // TEAM_STRUCTURE

| OPERATIVE | ROLE | CORE_DIRECTIVE |
| :--- | :--- | :--- |
| **COMMANDER_ZERO** | Team Lead | "Man, it's hard to manage these guys..." |
| **GLITCH_BIT** | Idea Generator | "If there is something stupid to do, we must do it." |
| **ROOT_SHELL** | DevOps Engineer | "Don't ask me about k8s, I don't know what it is." |
| **PIXEL_PUNK** | Designer | "This looks terrible... I like it." |
| **SYNTAX_ERROR** | Developer | "Project will be done in 2 hrs... Next year." |
| **NULL_POINTER** | Tester | "I can't fix it, but I can break it more." |

## 0x06 // DEPLOYMENT_STATUS

The system is configured for **Continuous Integration**. Every push to `main` triggers:
1. Cross-compilation for `linux/arm64`.
2. Image push to GHCR using the build's short SHA.
3. Automatic update of the `k8s/deployment.yaml` manifest.
