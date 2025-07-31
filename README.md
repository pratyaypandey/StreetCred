# 🔒 StreetCred – AI-Powered Credit Scoring for DeFi

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black.svg)](https://nextjs.org/)

## 🚀 Overview

StreetCred is a **secure, AI-driven credit scoring platform** designed to lower collateral requirements for DeFi lending. By combining **on-chain** and **off-chain** financial data, computed within a **Trusted Execution Environment (TEE)**, and secured through **Transport Layer Security (TLS)**, StreetCred provides a **verifiable and privacy-preserving credit score** that improves capital efficiency.

![StreetCred Landing Page](assets/landing_page.png)

## ✨ Key Features

- 🔐 **Privacy-Preserving**: All data processing happens in secure TEE enclaves
- 🤖 **AI-Powered Analysis**: Uses Google Gemini AI for intelligent financial data analysis
- 🔗 **Multi-Chain Support**: Analyzes on-chain activity across multiple blockchains
- 🏦 **Traditional Finance Integration**: Connects to bank accounts via Plaid API
- 📊 **Real-time Credit Scoring**: Provides instant credit scores based on comprehensive data
- 🛡️ **Enterprise Security**: TLS encryption and TEE protection throughout the pipeline

## 🏗️ Architecture

StreetCred consists of multiple interconnected components:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend UI   │    │   Backend API   │    │   TEE Enclave   │
│   (Next.js)     │◄──►│   (FastAPI)     │◄──►│   (Python)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Plaid API     │    │   Blockchain    │    │   Gemini AI     │
│   (Bank Data)   │    │   (On-chain)    │    │   (Analysis)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Technology Stack

### Backend (Python)
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) - Modern, fast web framework for building APIs
- **AI/ML**: [Google Gemini AI](https://ai.google.dev/) - Advanced AI model for financial data analysis
- **Blockchain**: [Web3.py](https://web3py.readthedocs.io/) - Ethereum and multi-chain integration
- **Security**: [Cryptography](https://cryptography.io/) - TLS encryption and secure communications
- **Data Validation**: [Pydantic](https://docs.pydantic.dev/) - Data validation using Python type annotations
- **HTTP Client**: [httpx](https://www.python-httpx.org/) - Modern async HTTP client
- **Logging**: [Structlog](https://www.structlog.org/) - Structured logging for better observability

### Frontend (Next.js)
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with SSR/SSG capabilities
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible, unstyled UI primitives
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **State Management**: [TanStack Query](https://tanstack.com/query) - Server state management
- **Blockchain Integration**: [Wagmi](https://wagmi.sh/) + [Viem](https://viem.sh/) - Ethereum hooks and utilities
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Form handling and validation
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - 3D visualizations

### Infrastructure & DevOps
- **Containerization**: [Docker](https://www.docker.com/) - Containerized deployment
- **Web Server**: [Nginx](https://nginx.org/) - Reverse proxy and load balancing
- **Process Management**: [Supervisord](http://supervisord.org/) - Process control system
- **Package Management**: [UV](https://docs.astral.sh/uv/) - Fast Python package installer
- **Code Quality**: [Ruff](https://docs.astral.sh/ruff/) - Fast Python linter and formatter
- **Type Checking**: [Pyright](https://microsoft.github.io/pyright/) - Static type checker for Python

### External Services
- **Banking Data**: [Plaid API](https://plaid.com/) - Secure bank account connectivity
- **AI Processing**: [Google Gemini AI](https://ai.google.dev/) - Advanced AI analysis
- **Blockchain**: [Flare Network](https://flare.network/) - Primary blockchain integration
- **Security**: [Google Cloud TEE](https://cloud.google.com/confidential-computing) - Trusted Execution Environment

## 🚀 Quick Start

### Prerequisites
- Python 3.12+
- Node.js 18+
- Docker (optional)
- Plaid API credentials
- Google Gemini API key

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/streetcred.git
   cd streetcred
   ```

2. **Install Python dependencies**
   ```bash
   # Using UV (recommended)
   uv sync
   
   # Or using pip
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   ```bash
   cp .env-example .env
   # Edit .env with your API keys and configuration
   ```

4. **Start the backend server**
   ```bash
   uv run python -m flare_ai_defai.main
   ```

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd streetcredui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📁 Project Structure

```
StreetCred/
├── src/flare_ai_defai/          # Python backend
│   ├── ai/                      # AI service integrations
│   ├── api/                     # FastAPI routes and middleware
│   ├── attestation/             # TEE attestation and validation
│   ├── blockchain/              # Blockchain integration
│   └── prompts/                 # AI prompt templates
├── streetcredui/                # Next.js frontend (main UI)
│   ├── app/                     # App router pages
│   ├── components/              # React components
│   └── lib/                     # Utility functions
├── frontend/                    # Legacy React frontend
├── chat-ui/                     # Chat interface
├── tests/                       # Python test suite
├── assets/                      # Documentation images
└── docs/                        # Additional documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env-example`:

```bash
# AI Configuration
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-pro

# Blockchain Configuration
WEB3_PROVIDER_URL=your_web3_provider_url
WEB3_EXPLORER_URL=your_explorer_url

# Plaid Configuration
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox
PLAID_PRODUCTS=transactions,accounts

# TEE Configuration (for production)
TEE_IMAGE_REFERENCE=your_tee_image
INSTANCE_NAME=your_instance_name
```

## 🧪 Testing

### Backend Tests
```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=flare_ai_defai

# Run specific test file
pytest tests/test_ai_service.py
```

### Frontend Tests
```bash
cd streetcredui
npm test
```

## 📚 API Documentation

Once the backend is running, visit:
- **Interactive API Docs**: http://localhost:8000/docs
- **ReDoc Documentation**: http://localhost:8000/redoc

## 🔒 Security Features

- **TEE Protection**: All sensitive data processing happens in secure enclaves
- **TLS Encryption**: End-to-end encryption for all communications
- **Privacy-Preserving**: No raw financial data is stored or transmitted
- **Attestation**: Verifiable proof of secure execution environment
- **Zero-Knowledge**: Credit scores without exposing underlying data

## 🎯 Roadmap

- [ ] Multi-chain support (Ethereum, Polygon, Arbitrum)
- [ ] Advanced AI models for risk assessment
- [ ] Mobile application
- [ ] DeFi protocol integrations
- [ ] Real-time credit score updates
- [ ] Institutional API access

## 🙏 Acknowledgments

- [Flare Network](https://flare.network/) for blockchain infrastructure
- [Plaid](https://plaid.com/) for banking data integration
- [Google AI](https://ai.google.dev/) for AI capabilities
- [Next.js](https://nextjs.org/) for the frontend framework

---

**StreetCred** - Building the future of DeFi credit scoring, one secure transaction at a time. 🚀
