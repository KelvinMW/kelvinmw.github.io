---
title: "GCP vs AWS for Small-to-Medium Project Deployments: A Practical Comparison"
date: 2025-07-22
draft: false
description: "After deploying client projects on both Google Cloud and AWS over the past five years, here's my honest take on which platform wins for different workloads."
tags: ["cloud", "GCP", "AWS", "DevOps", "deployment"]
categories: ["Software Development"]
author: "Kelvin Maina Wangari"
showToc: true
TocOpen: false
cover:
  image: "/img/notion/white/gcp.png"
  alt: "Cloud Platforms"
  caption: "GCP vs AWS — choosing the right tool for the job"
  relative: false
---

## Background

Over the past five years at Kwality Consulting Solutions, I've deployed projects on AWS, GCP, Azure, and DigitalOcean. Most of our clients are NGOs, SMEs, and government-adjacent organisations — budget-conscious, but with real uptime requirements.

This isn't a comprehensive benchmark; it's a practitioner's notes from real deployments.

## When I Reach for GCP First

### 1. Data-Heavy Workloads

BigQuery is still in a class of its own for analytical queries over large datasets. For the data visualization work I did with Concern Worldwide and Save the Children, being able to query millions of rows in seconds without managing infrastructure was a genuine game-changer.

Google's Looker Studio (formerly Data Studio) also integrates natively, meaning stakeholders could view live dashboards without any custom frontend work on my end.

### 2. Projects with a Google Workspace Context

Many NGOs and schools already use Google Workspace. When the client's email, Drive, and Calendar are all Google, deploying on GCP keeps authentication simple (Google Identity Platform), reduces vendor sprawl, and makes it easier to hand over to internal IT teams who are already familiar with the ecosystem.

### 3. Kubernetes Workloads

GKE (Google Kubernetes Engine) has historically had the smoothest upgrade paths and the most transparent auto-repair behaviour in my experience. For the school management system that needed zero-downtime deployments, GKE made rollouts much less nerve-wracking than EKS.

## When I Reach for AWS First

### 1. Breadth of Managed Services

AWS simply has more managed services. If a project needs a message queue, a CDN, a serverless function, an ML model, and a relational database — all integrated — AWS is hard to beat. The ecosystem maturity means there's almost always a well-documented solution.

### 2. Client Teams Already on AWS

For the Salaam Security & Logistics operations portal, the client had existing AWS infrastructure and an IT team with AWS certifications. Deploying on the same platform meant easier handover, existing IAM policies, and no additional cloud spend negotiation.

### 3. Regions in Africa

AWS has the Cape Town region (af-south-1). For projects serving East African users, that latency difference matters. GCP's nearest region for most East African traffic is europe-west1 or asia-south1 depending on routing.

## The Honest Cost Comparison

For the types of projects I typically run (web app + database + background jobs, ~100–1000 daily active users), costs end up roughly similar on both platforms when you're careful about reserved instances or committed use discounts.

The hidden cost is **operational complexity**. GCP's IAM model is simpler for small teams. AWS IAM is more powerful but you can accidentally paint yourself into a policy corner that takes hours to unpick.

## My Defaults

| Scenario | My Pick |
|---|---|
| Data analytics / dashboards | GCP (BigQuery + Looker Studio) |
| Google Workspace-integrated apps | GCP |
| Complex microservices / many AWS services | AWS |
| Client already has AWS infrastructure | AWS |
| East Africa latency-sensitive | AWS (af-south-1) |
| Budget: smallest possible spend | DigitalOcean |

## Conclusion

The best cloud is the one your team (and your client's team) can operate confidently. I've seen technically "inferior" choices succeed because the deployment was well-understood and maintained, while optimal-on-paper architectures fail because nobody understood what was running.

Pick the platform that fits the people, not just the workload.
