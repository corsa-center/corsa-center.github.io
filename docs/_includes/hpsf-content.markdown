2 October 2024

# 1. Introduction

This document, written as part of the work of the [Center for Open-Source Research Software Stewardship and Advancement (CORSA)](https://corsa.center/), describes the information 
that a particular software project needs to collect/have in order to apply to and then join the [High Performance Software Foundation (HPSF)](https://hpsf.io). 
Much of the content in this document comes from HPSF documents on the website.

HPSF is a 501(c)(6) organization and is a sub-foundation of the [Linux Foundation](https://www.linuxfoundation.org/). It is an open-source, vendor-neutral hub 
for high performance software projects, working groups, events, and training. It aims to build, promote, and advance a portable software stack for high 
performance computing (HPC) by increasing adoption, lowering barriers to contribution, and supporting development efforts. Its focus is on providing 
projects with the resources and connections they need to bring their projects to maturity and to increase usage across HPC, AI, scientific software, 
security, and other communities.

The Linux Foundation announced the intention to form the HPSF on November 13, 2023. From January to May, 2024, HPSF founding members and projects met to establish 
a founding charter and an initial directed fund. HPSF launched at ISC-HPC 2024.

The goals of HPSF are
1. Serve as a neutral home for key projects in the high performance software ecosystem
2. Promote use of HPSF projects in many open source communities and organizations
3. Provide a transparent governance model that allows stakeholders from government, industry, and academia to steward the ecosystem together
4. Provide a clear path to incubate and onboard promising new projects
5. Ensure that HPC software is accessible and reliable by providing CI and turnkey builds
6. Ensure that HPC software is secure and ready for cloud through collaborations with CNCF and OpenSSF
7. Sponsor events and training to grow a diverse, skilled workforce for software in the HPSF ecosystem

Project benefits from joining HPSF are that it will: 
- Facilitate project meetings
- Facilitate developing training materials
- Provide CI & engagement with facilities (e.g., HPC centers, etc.)
- Provide budget for project support. The specific budget will partially be based on levels, and partially be based on the project's needs.
- The HPSF technical advisory committee (TAC) will provide recommendations, while the HPSF governing board (GB) will make decisions. (See [Section 4]() below for more details of HPSF's organization.)

Some additional benefits from joining a foundation are discussed in Section 5 of [Watson, et al., 2023](https://doi.org/10.48550/arXiv.2308.14953) and in a [CORSA webpage](https://corsa.center/foundations/benefits.html).

# 2. Relationships with HPSF, the Linux Foundation, and basic requirements
To join HPSF, a project needs to meet the criteria to be a [Linux Foundation project](https://www.linuxfoundation.org/projects). Becoming a Linux Foundation project happens concurrently with 
becoming an HPSF project.  The core requirements to be a Linux Foundation project are: 
1. Open Governance: Project decision making has a model of open, transparent governance.
2. Community Assets: Any trademark, domains, or community assets are required to be transferred to be owned neutrally by the foundation entity. Co-ownership of the git repo account is required by the foundation entity.
3. Open Source: The intellectual property model should follow open source best practices and be documented — whether it’s open source software, hardware, standards, data, or other collaboration. If open source software, an OSI-approved open source license is required.

# 3. Application process
To join HPSF, a project will need to follow the project induction process established by the HPSF Technical Advisory Council.  
Each technical project in HPSF and the parent LInux Foundation has its own technical governance which is always separate from ecosystem development 
work of HPSF which is governed by the HPSF governing board.   Each technical project has its own technical charter, which the LF can support to create 
for the particular needs of the technical project, to codify the open, transparent governance, and do-acracy model for the technical project.

A first step should be securing support from the HPSF TAC. Currently projects are encouraged to reach out to Todd Gamblin <tgamblin@llnl.gov> and 
Christian Trott <crtrott@sandia.gov> to initiate the process. 

The process is described in [High Performance Software Foundation Project Lifecycle Policies](https://github.com/hpsfoundation/tac/blob/main/lifecycle_policy.md), 
which contains a [number of elements](https://github.com/hpsfoundation/tac/blob/main/lifecycle_policy.md#project-proposal-requirements) that must be in a proposal to join, which happens via GitHub. These currently include (note that the link above contains the 
up-to-date required elements):
- name of project
- project description (what it does, why it is valuable, origin and history)
- statement on alignment with the High Performance Software Foundation mission as expressed in the [HPSF Roles and Values](https://hpsf.io/#goals)
- link to current Code of Conduct (if one is adopted already)
- project license
- source control (e.g., GitHub, Gitlab)
- issue tracker (e.g., GitHub, Gitlab)
- external dependencies (including licenses)
- release methodology and mechanics
- brief description of current leadership team and decision-making process
- list of the project members with access to commit to the mainline of the project
- link to any documented governance practices
- list of project's official communication channels (e.g., slack, irc, mailing lists)
- link to project's website
- links to social media accounts
- brief description of current user community
- brief description of current contributor community
- existing financial sponsorship and funding institutions
- existing legal entity, if any
- sponsor from the TAC, if identified (a sponsor helps mentor projects)
- preferred project lifecycle stage to enter HPSF (see [list and description of stages](https://github.com/hpsfoundation/tac/blob/main/lifecycle_policy.md#iii-stages---definitions--expectations))
- infrastructure needs or requests (there will be opportunities to change this after joining HPSF).

Once an application is made, [projects are required to present their proposal at a TAC meeting](https://github.com/hpsfoundation/tac/blob/main/lifecycle_policy.md#project-acceptance-process):
- The TAC may ask for changes to bring the project into better alignment with the High Performance Software Foundation (adding a governance document to a repository or adopting a Code of Conduct, for example). The project will need to make these changes in order to progress further.
- Projects are accepted by a 2/3 majority of the TAC.
- Vote majorities will be calculated as a percentage of the votes received
- The TAC will determine the appropriate initial stage for the project. The project can apply for a different stage via the Periodic Review Process.

# 4. The project as part of HPSF

HPSF is run by a governing board (GB), which is advised by a technical advisory committee (TAC). 

![HPSF Structure](/assets/img/hpsf-structure.png)

The TAC manages working groups tackling a variety of HPC topics, and follows a governance model based on the Cloud Native Computing Foundation (CNCF).

Initial working groups include:

- Continuous Integration resources tailored for HPC projects
- Continuously built, turnkey software stacks
- Architecture support
- Performance regression testing and benchmarking

Working groups are cross cutting activities, bringing projects, members, and other technical contributors together around activities that benefit the ecosystem.

The TAC also supports HPSF projects, which are in one of four stages, and ideally will progress through the first three stages. These stages are currently:
1. Sandbox - projects which the TAC believes are, or have the potential to be, important to the ecosystem of Technical Projects or the High Performance Software Foundation ecosystem as a whole. Sandbox projects will receive minimal support from the Foundation. 
2. Established - projects that are major components of the High Performance Computing software ecosystem. Established projects have a higher level of access to foundation resources.
3. Graduate - projects that are on a sustaining cycle of development, maintenance, and long-term support, used commonly in production environments and with large, well-established project communities. Core projects have a higher level of access to foundation resources.
4. Emeritus - projects which the maintainers feel have reached or are nearing end-of-life

All projects may attend TAC meetings and contribute work regardless of their stage.

Projects must be reviewed no less frequently than every 24 months. Projects may also request review at any time to present a case to move to a new stage.
