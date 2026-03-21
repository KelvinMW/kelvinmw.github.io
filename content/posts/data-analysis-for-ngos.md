---
title: "Data Analysis for NGOs: Turning Field Data into Actionable Reports"
date: 2025-05-14
draft: false
description: "NGOs collect enormous amounts of data but often struggle to turn it into reports that drive decisions. Here's a practical workflow I've developed over multiple international projects."
tags: ["data analysis", "NGO", "visualization", "Excel", "reporting"]
categories: ["Data"]
author: "Kelvin Maina Wangari"
showToc: true
TocOpen: false
cover:
  image: "/img/notion/white/concern.png"
  alt: "Data Analysis for NGOs"
  caption: "Turning humanitarian field data into insight"
  relative: false
---

## The NGO Data Problem

International NGOs collect vast amounts of data: beneficiary registrations, distributions, survey responses, monitoring visits, financial disbursements. Much of it ends up in spreadsheets passed around by email, or in ODK forms that nobody has time to aggregate.

The gap between "we have the data" and "we can make decisions from the data" is where I've spent a significant part of my consulting work — with Concern Worldwide, Save the Children, and Oxfam.

## Step 1: Understand the Decision, Not the Data

The most common mistake I see is starting with the dataset. The right starting point is the question the programme team actually needs to answer:

- *Are we reaching the most food-insecure households?*
- *Which district has the lowest vaccination coverage?*
- *Did beneficiaries in Cohort B improve their income more than Cohort A?*

Once you have a clear question, the data analysis becomes straightforward. Without it, you're producing tables that nobody acts on.

## Step 2: Audit the Data Before Touching It

Before any analysis, I do a structured audit:

```
- Row count vs. expected records
- Missing values per column (flag anything > 5%)
- Outliers (automated flag: values > 3 SD from mean)
- Duplicate IDs
- Date format consistency
- Lookup field consistency (e.g., "Hargeisa" vs "hargeisa" vs "HARGEYSA")
```

This sounds tedious, but skipping it has burned me before. A distribution report for a donor that included duplicate registrations nearly caused a serious credibility problem.

## Step 3: Choose the Right Tool for the Output

I don't have a single favourite tool. I choose based on the audience and the update frequency:

| Output needed | Tool |
|---|---|
| One-time donor report | Excel / Google Sheets + charts |
| Monthly dashboard, internal team | Google Looker Studio |
| Interactive public-facing map | Mapbox or Google Maps API |
| Complex statistical analysis | Python (pandas, matplotlib) |
| Repeatable pipeline | Python script + scheduled job |

For most NGO contexts, **Excel and Looker Studio cover 80% of real needs**. The people who will maintain the dashboard after you leave are more likely to know Excel than Python.

## Step 4: Design for the Non-Technical Reader

Programme managers and country directors are not data analysts. Effective NGO reports:

- **Lead with the key number**, not the methodology. "72% of registered beneficiaries received distributions in Q2" goes at the top.
- **Use colour sparingly but deliberately.** Red for below-target, green for on-track. Don't use six colours for six districts — use a map.
- **Include a "what this means" sentence.** Don't leave interpretation to the reader.
- **Keep raw data separate from the summary.** Give analysts a data tab; give managers a dashboard tab.

## A Real Example: Concern Worldwide Dashboard

For Concern Worldwide, I built a dashboard that consolidated data from five field offices into a single view updated weekly. The key design decision was to make the primary screen a single-page summary: one number per programme indicator, RAG (Red/Amber/Green) status, and a trend sparkline.

Field coordinators could drill down to district-level breakdowns, but the senior management view never required more than one scroll.

The result: monthly reporting meetings shortened from two hours to forty minutes because the pre-reading was actually readable.

## Common Pitfalls

1. **Over-engineering the pipeline.** If the data source is a manually updated spreadsheet, a complex automated pipeline will break every time someone renames a column.
2. **Ignoring offline contexts.** In Somaliland, internet connectivity is inconsistent. A dashboard that requires a live connection fails at the worst times. I always export a static PDF version on a schedule.
3. **Building for yourself, not the maintainer.** Ask: "Can the M&E Officer update this in six months without calling me?"

## Conclusion

Good data analysis for NGOs isn't about using the most sophisticated tools. It's about asking the right question, cleaning the data honestly, and presenting findings in a way that busy programme staff can act on.

The best report is the one that changes a decision.
