---
layout: page
title: LF AI & Data - How to Apply and Join
---

29 October 2024

Greg Watson

# 1. Introduction

This document, written as part of the work of the [Center for Open-Source Research Software Stewardship and Advancement (CORSA)](https://corsa.center), describes the information that a particular software project needs to collect/have in order to apply to and then join the [LF AI & Data Foundation](https://lfaidata.foundation/). Much of the content in this document comes from the [LF AI & Data Foundation Lifecycle Document](https://github.com/lfai/proposing-projects/blob/master/LFAI%26Data-Project%20LifecycleDocument.pdf), including the website.

The LF AI & Data Foundation is a is a global not for profit foundation that hosts critical components of the global AI & Data technology infrastructure. It brings together the world’s top developers, end users, and vendors to identify and contribute to the projects and initiatives that address industry challenges for the benefit of all participants.

Their mission is to build and support an open AI community, and drive open source innovation in the AI, ML, DL and Data domains by enabling collaboration, sharing best practices, supporting development efforts, and the creation of new opportunities for all the members of the community.

Benefits of hosting your project at LF AI & Data include:
* A neutral home that increases adoption and contributions.
* Deep engagement with the open source AI and data community to enable collaboration.
* Staff eager to help and support.
* Program and project management services.
* Creative services available to all hosted projects.
* Marketing services to support community and ecosystem engagement.
* Source code scanning service.
* Strong presence in China via a local office and support staff.
* Ability to keep your maintainers and define your own governance, as long as it’s neutral.
* A world-class events team (virtual until it’s safe to hold in-person events again), able to run events around the world from 12 to 12,000 attendees.

A detailed description of services available to hosted projects is available [here](https://lfaidata.foundation/projects/services/).
  
Some additional benefits from joining a foundation are discussed in Section 5 of [Watson, et al., 2023](https://doi.org/10.48550/arXiv.2308.14953).

# 2. Relationships with LF AI & Data and basic requirements

The LF AI & Data Foundation supports open source projects within artificial intelligence and the data space. Hosting a project with the Linux Foundation follows [open governance](https://github.com/opengovernance/opengovernance.dev), 
which means that there is no one company or individual in control of a project. When the maintainers of an open source project decide to host it at the Linux Foundation, 
they specifically transfer ownership of the trademark for their project to the Linux Foundation. They don’t transfer the copyright, however, since usage is already available to 
other users under the open source license. Note that LF AI & Data will only be hosting the upstream code.

# 3. Project Lifecycle

There are four stages of project hosting in LF AI & Data: Sandbox, Incubating, Graduating, and Emeritus. There are specific requirements for each stage and different benefits for projects in each of the stages.

A project transitions from one stage to another by meeting certain requirements. If a project's request to transition to a higher level stage is not approved, the project is eligible to re-apply after siz months of the first request.

The Technical Advisory Committee (TAC) votes on new projects joining LF AI & Data, as well as on promoting projects across incubation stages. The TAC undertakes an annual review of all projects.

## Sandbox

The Sandbox hosting stage is specific to projects that intend to join LF AI & Data Incubation in the future and wish to lay the foundations for that. Such projects for instance aim to 
extend one or more LF AI & Data projects with functionality or interoperability libraries, or they generally fit the LF AI & Data mission and provide the potential for a novel 
approach to existing functional areas (or are an attempt to meet an unfulfilled need).

Projects at the Sandbox stage must:
* Fit the scope and mission of LF AI & Data
* Have an OSI-approved license.
* Have a sponsor who is an existing LF AI & Data member. Alternatively, a new organization would join LF AI & Data and sponsor the project’s incubation application.
* Have an open and documented technical governance.  The LF team can help set this up.
* The project's founders adopt an open governance model documented in a Technical Charter for the project, and execute the Project Contribution Agreement transferring the project’s assets to the LF.

## Incubation

Projects in the Sandbox stage are generally expected to move to Incubation within 12 months from joining the Foundation following an evaluation by the TAC committee

Projects at the Incubation stage must:
* Have at least three organizations actively contributing to the project.
* Have a defined Technical Steering Committee (TSC) with a chairperson identified, with open and transparent communication.
* Have reached a minimum of 500 stars on GitHub.
* Have achieved and maintained an OpenSSF Best Practices Badge Program (Silver).

## Graduation

Projects in the Incubation stage are generally expected to move to Graduation within 12-18 months from joining the Foundation following an evaluation by the TAC committee.

Projects at the Graduation stage must:
* Have a healthy number of code contributions from at least five organizations.
* Have reached a minimum of 1000 stars on GitHub.
* Have achieved and maintained an OpenSSF Best Practices Badge Program (Gold).
* Have demonstrated a substantial ongoing flow of commits and merged contributions for the past 12 months*.
* Have completed at least one collaboration with another LF AI & Data hosted project

## Emeritus

# 4. Joining requirements

The requirements for applying for Sandbox stage are:

* Fit the scope and mission of LF AI & Data.
* Have an open and documented technical governance.
* Have an OSI-approved license.
* Have its own GitHub organization.
* Have achieved and maintained the [OpenSSF Best Practices Passing Badge](https://www.bestpractices.dev/en/criteria/0).
* Submit a completed Project Contribution Proposal via a [GitHub pull request](https://github.com/lfai/proposing-projects/tree/master/proposals).
* Identify who will be handling security vulnerabilities reporting.
* Project founders approve the Technical Charter and execute the Project Contribution Agreement.
* Receive the affirmative vote of the TAC.

To be accepted into the Incubation stage, a project must meet all the requirements of the Sandbox stage plus:

* Have at least two organizations actively contributing to the project.
* Have a defined Technical Steering Committee (TSC) with a chairperson identified.
* Have a sponsor who is an existing LF AI & Data member. Alternatively, a new organization would join LF AI & Data and sponsor the project’s incubation application.
* Have at least 300 stars on GitHub; this is an existing requirement for a project to be listed on the LF AI & Data landscape.
* Have achieved and maintained the [OpenSSF Best Practices Silver Badge​](https://www.bestpractices.dev/en/criteria/1).
* In addition to the affirmative vote of the TAC, incubation stage projects also require the affirmative vote of the Governing Board.

To be accepted into the Graduation stage, a project must meet the Incubation stage requirements plus:

* Have a healthy number of code contributions coming from at least five organizations.
* Have reached a minimum of 1000 stars on GitHub.
* Have achieved and maintained the [OpenSSF Best Practices Gold Badge](https://www.bestpractices.dev/en/criteria/2).
* Have demonstrated a substantial ongoing flow of commits and merged contributions for the past 12 months.
* Have completed at least one collaboration with another LF AI & Data hosted project
* Received the affirmative vote of two-thirds of the TAC and the affirmative vote of the Governing Board.
* Have a technical lead appointed for representation of the project on the LF AI & Data Technical Advisory Council.

Since these metrics can vary depending on the type, scope, and size of a project, the TAC has final judgment over the level of activity that is adequate to meet these criteria.

# 5. Proposing a project for hosting

1. Decide on a date to present to the TAC and request incubation
2. Ensure that your project implements these [recommendations](https://github.com/lfai/tac/blob/main/github-recommendations.md)
3. Submit a formal request to incubate the project via a [GitHub pull request](https://github.com/lfai/proposing-projects/tree/master/proposals)
4. Prepare deck and share with ED about 10 days prior to the presentation
5. Present to the TAC and get approval
6. Onboard the project with the LF AI & Data team and integrate the project with our service
7. Announce the project becoming hosted in LF AI & Data

Projects that have questions about foundations are welcome to contact [CORSA](https://corsa.center) by [emailing PI Greg Watson](mailto:watsongr@ornl.gov). And those with questions that are specific to [LF AI & Data](https://lfaidata.foundation) should use the contact link on its website.
