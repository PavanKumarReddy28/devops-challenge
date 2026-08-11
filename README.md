# DevOps Engineer Kubernetes CI/CD Challenge

## Overview

Node.js backend deployed on Kubernetes with PostgreSQL.

## Architecture

GitHub
→ GitHub Actions
→ Docker Hub
→ Kubernetes
→ Backend
→ PostgreSQL

## Technologies

- Node.js
- PostgreSQL
- Docker
- Kubernetes
- Minikube
- GitHub Actions
- Docker Hub

## Kubernetes

Explain:
- Namespace
- Deployment
- Service
- Secret
- ConfigMap
- PVC
- Readiness probe
- Liveness probe

## CI/CD

Explain:
1. Checkout
2. Install dependencies
3. Test
4. Docker build
5. Docker push
6. Kubernetes deployment

## Reliability Improvement

Readiness and liveness probes.

## Failure Simulation

Incorrect PostgreSQL service hostname.

## Root Cause

Incorrect DB_HOST configuration.

## Resolution

Changed DB_HOST to postgres-service.

## Future Improvements

- Monitoring
- Centralized logging
- HPA
- Ingress
- TLS
- HA database
- Backup strategy
