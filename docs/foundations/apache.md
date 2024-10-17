# Apache Foundation - How to Apply and Join

9 October 2024

## 1. Introduction

This document, written as part of the work of the [Center for Open-Source Research Software Stewardship and Advancement (CORSA)](https://corsa.center/), describes the information that a particular software project needs to collect/have in order to apply to and then join the [Apache Software Foundation (ASF)](https://www.apache.org). Much of the content in this document comes from ASF documents on the website, specifically including Apache's [Incubator Guide](https://incubator.apache.org) and [Community Guide](https://community.apache.org). The ASF provides some general background on its about page:

"The ASF was founded with a mission to provide software for the public good. For 25 years the foundation has delivered reliable software that fuels innovation and powers organizations of all sizes - from small businesses to the most advanced data-driven enterprises."

"From the flagship Apache HTTP project to more recent projects spanning AI/ML, big data, cloud computing, financial tech, geospatial, IoT, search, and more – ASF projects serve the public good with use cases such as fueling cancer research; aiding in clean energy research; and reducing food waste."

The Apache Software Foundation is a 501(c)(3) organization. Compared with other software foundations such as [NumFOCUS](https://numfocus.org/) or [HPSF](https://hpsf.io/), the ASF has a stronger focus on governance aspects, particularly on community inclusivity (e.g., [the Apache Way](https://theapacheway.com) also referred to as “Community over Code”), and has a stronger sense of projects making up a software stack, but less of a focus on scientific or research software. However, when there has been s a quorum of Scientific Software projects and developers who wants to champion a research software specific events or policies, the board has been very favorable. 

The Apache Software Foundation (ASF) provides software for the public good, as explained in its [vision statement](https://blogs.apache.org/foundation/entry/the-apache-software-foundation-2018) from 2018. ASF projects operate according to [the Apache Way](https://theapacheway.com), a set of principles and best practices. ASF puts a strong emphasis on Community Over Code, fierce independence from companies and organizations, and openness in all aspects of its work.

Joining the ASF for a project means giving up control of it and its trademarks, if any. The project is then run by its Project Management Committee (PMC). ASF helps a project take on a life of its own, with potentially a much broader reach, due to the ASF’s independence and emphasis on project sustainability.

The ASF intentionally does not have a technical strategy; the purpose of a software project is not a factor in it joining ASF. If a project that wants to join is very similar to an existing project, the ASF will probably ask the project to consider joining/merging with that existing project. 

Apache has two types of projects:
* Top Level Projects (TLPs) are projects with healthy communities and active development. The bulk of ASF projects are TLPs. To become a TLP, a project must first successfully graduate from the Apache Incubator.
* Incubating projects, also called “podlings”, have yet to build a sustainable community, but have active development and are moving towards graduating to become TLPs. An incubating project will have the word “Incubating” in its project name and/or on its project website; for example Apache Foo (Incubating).

To give "podlings" (incubating projects) the best chances of success, the ASF usually ask them to enter the Incubator with at least the start of a community built around an existing codebase.

The Apache Software Foundation (ASF) was formed in 1999 primarily to (see [https://www.apache.org/foundation/how-it-works/](https://www.apache.org/foundation/how-it-works/)):
1. Provide a foundation for open, collaborative software development projects by supplying hardware, communication, and business infrastructure
2. Create an independent legal entity to which companies and individuals can donate resources and be assured that those resources will be used for the public benefit
3. Provide a means for individual volunteers to be sheltered from legal suits directed at the Foundation's projects
4. Protect the 'Apache' brand, as applied to its software products, from being abused by other organizations

The principles of the ASF are (see [https://www.apache.org/foundation/](https://www.apache.org/foundation/)):
1. Enabling Strong Communities: The Foundation’s community practices are considered industry standards, including the widely adopted Apache License 2.0, the incubator program, and a consensus-driven decision model that enables projects to build strong communities and thrive.
2. Creating equity: Diversity and Inclusion project is dedicated to understanding and promoting the diversity and inclusion of ASF’s open source communities. It develops tools and frameworks to foster inclusion and increase diversity in all phases of Apache projects.
3. Institutionalizing Open Source: ASF is a U.S. 501(c)(3) charitable organization funded by individual donations and corporate sponsors, and is run almost exclusively by volunteers that provide support for hundreds of projects. Since 1999, it has provided an established framework for intellectual property and financial contributions that enables millions of people around the world to collaborate and deliver freely available software.
4. Servant leaders: The Foundation itself is a collaborative project of the ASF, which means its leadership is elected by Members and maintains its own governance. The leadership is composed entirely of volunteers who are committed to advancing ASF’s mission of providing software for the public good.

Project benefits from joining ASF are: 
* The Apache Software Foundation (ASF) ensures a project’s longevity, legal safety, and technical robustness while enhancing its visibility and credibility in the open-source community. 
* Its meritocratic governance model fosters balanced, democratic decision-making through community consensus. ASF emphasizes building and sustaining a vibrant, global community of developers and contributors, creating a collaborative and sustainable development environment.
* ASF handles all legal aspects, including intellectual property, trademarks, and licensing, and its projects use the widely accepted Apache License 2.0. 
* Being part of ASF adds trust and credibility, attracting users and contributors. It also provides scalable infrastructure support for code hosting, version control, CI/CD, and more, allowing developers to focus on innovation. 
* ASF’s structure promotes long-term sustainability by preventing dependency on any single entity and encourages collaboration across its network of open-source projects, sharing best practices and innovations.

Some additional benefits from joining a foundation are discussed in Section 5 of Watson, et al., 2023 and in CORSA's documentation.

## 2. Application process

The Apache Incubator (see the third subsection below) provides services to projects that want to enter the ASF. Read the Incubator Cookbook to understand whether ASF is a good fit for a project and to understand the steps required to become an ASF podling.

### 2.1. Steps to join the Incubator

The goal of incubation is to become an Apache Software Foundation (ASF) Top-Level Project (TLP).
See the [How the ASF works page](https://www.apache.org/foundation/how-it-works.html) for what this means and what the various roles (committers, PMC members etc.) mean.

To achieve this, an incoming project ("podling") goes through the following steps:

* Find a champion and incubation mentors and discuss and prepare an incubation proposal (see next subsection for details)
* Decide to incubate at the ASF
* Discuss the proposal with the Incubator PMC
* If needed, refine the list of initial committers and mentors in the proposal
* If needed, refine the proposal based on Incubator PMC feedback
* Let the Incubator PMC vote on the proposal
* If the vote is to accept the project, set up the podling’s infrastructure
* Start building a community around the podling’s code
* Invite new committers and PPMC members
* Make podling releases, and document and refine both the code and the release process
* When you feel ready to graduate, assess the podling’s readiness with the incubation mentors
* If applicable, prepare the transfer of existing trademarks to the ASF
* Discuss graduation with the Incubator PMC
* Start the graduation vote with the Incubator PMC, leading to an ASF Board resolution to establish the TLP

Described above is the "happy case". Things might happen in a slightly different order, but it gives an overview of the typical incubation process.

### 2.2. Proposal details

To submit, both a short abstract and a longer proposal are needed. The proposal must include the following (taken from the [Incubator wiki](https://cwiki.apache.org/confluence/display/INCUBATOR/New+Podling+Proposal)). The Incubator wiki also contains [past project proposals](https://cwiki.apache.org/confluence/display/INCUBATOR/Proposals).

<ol>
  <li>Background. Provides context for those unfamiliar with the problem space and the history of the project. Explain terms whose meanings may be misunderstood (for example, where there is not a single widely adopted definition).</li>
  <li>Rationale. Explains why this project needs to exist and why should it be adopted by Apache. This is the right place for discursive material.</li>
  <li>Initial Goals. A complex proposal (involving multiple existing code bases, for example) may cause concerns about its practicality. A good way to address these concerns is to create a plan that demonstrates the proposal is feasible and has been carefully thought through. Many projects will not need this section.</li>
  <li>Current Status. This section (and the contained topics) describes the candidate's current status and development practices. This should be an honest assessment balancing these against Apache's principles and development ideals.
  <ol>
    <li>Meritocracy. Apache is a meritocracy. Once a developer has submitted enough good patches, then it should be natural that they are elected to committer. It should be natural that active committers are elected to the project management committee (PMC). This process of renewal is vital to the long term health of Apache projects. This is the right place to demonstrate that this process is understood by the proposers.</li>
    <li>Community. Apache is interested only in communities. Candidates should start with a community and have the potential to grow and renew this community by attracting new users and developers.</li>
    <li>Core Developers. Apache is composed of individuals. It is useful to provide a brief introduction to the developers on the initial committers list. This is best done here (and not in that section). This section may be used to discuss the diversity of the core development team.</li>
    <li>Alignment. Describe why Apache is a good match for the proposal. An opportunity to highlight links with Apache projects and development philosophy.</li>
  </ol></li>
  <li>Known Risks. An exercise in self-knowledge. Risks don't mean that a project is unacceptable. If they are recognized and noted, then they can be addressed during incubation.
  <ol>
    <li>Project Name. Describe what has been done to check that the name of the project is suitable and if the project has legal permission to continue using its current name. Also indicate if the wide use of the name is likely to cause confusion about who owns the project or banding issues in the future.</li>
    <li>Orphaned Products. A public commitment to future development. Recruiting a diverse development community and a strong user base takes time. Apache needs to be confident that the proposers are committed.</li>
    <li>Inexperience with Open Source. If the proposal is based on an existing open source project with a history of open development, then highlight this here. If the list of initial committers contains developers with strong open source backgrounds, then highlight this here.</li>
    <li>Length of Incubation. This section describes how long the project is expected to be in incubation before its graduation as a top level project and the reasons for that. This shows the project has thought about the steps required to graduate and that there are not any unrealistic expectations.</li>
    <li>Homogenous Developers. Healthy projects need a mix of developers. Open development requires a commitment to encouraging a diverse mixture. This includes the art of working as part of a geographically scattered group in a distributed environment. Starting with a homogenous community does not prevent a project from entering incubation. But for those projects, a commitment to creating a diverse mix of developers is useful. Those projects who already have a mix should take this chance to highlight that they do.</li>
    <li>Reliance on Salaried Developers. A project dominated by salaried developers who are interested in the code only whilst they are employed to do so risks its long term health. Apache is about people, not corporations. It hopes that developers continue to be involved with Apache no matter who their current employer happens to be. This is the right place to indicate the initial balance between salaried developers and volunteers. It's also good to talk about the level of commitment of the developers.</li>
    <li>Relationships with Other Apache Products. Apache projects should be open to collaboration with other open source projects both within Apache and without. Candidates should be willing to reach outside their own little bubbles.</li>
    <li>An Excessive Fascination with the Apache Brand. Concerns have been raised in the past that some projects appear to have been proposed just to generate positive publicity for the proposers. This is the right place to convince everyone that is not the case.</li>
  </ol></li>
  <li>Documentation. References to further reading material.</li>
  <li>Initial Source. Describes the origin of the proposed code base. If the initial code arrives from more than one source, this is the right place to outline the different histories. If there is no initial source, note that here.</li>
  <li>Source and Intellectual Property Submission Plan. Complex proposals (typically involving multiple code bases) may find it useful to draw up an initial plan for the submission of the code here. Demonstrate that the proposal is practical.
  <ol>
    <li>External Dependencies. External dependencies for the initial source is important. Only some external dependencies are allowed by Apache policy. These restrictions are (to some extent) initially relaxed for projects under incubation. If the initial source has dependencies which would prevent graduation, then this is the right place to indicate how these issues will be resolved.</li>
   <li>Cryptography. If the proposal involves cryptographic code either directly or indirectly, Apache needs to know so that the relevant paperwork can be obtained.</li>
  </ol></li>
<li>Required Resources
  <ol>
    <li>Mailing lists. The minimum required lists are private@{podling}.incubator.apache.org (for confidential PPMC discussions) and dev@{podling}.incubator.apache.org.</li>
    <li>Subversion Directory. It is conventional to use all lower case, dash-separated (-) directory names. The directory should be within the incubator directory space ([http://svn.apache.org/repos/asf/incubator](http://svn.apache.org/repos/asf/incubator)).</li>
    <li>Git Repositories. It is conventional to use all lower case, dash-separated (-) repository names. The repository should be prefixed with incubator and later renamed assuming the project is promoted to a TLP.</li>
    <li>Issue Tracking. Apache runs JIRA and Bugzilla. Choose one. Indicate the name by which project should be known in the issue tracking system.</li>
    <li>Other Resources. Describe here any other special infrastructure requirements necessary for the proposal. Note that the infrastructure team usually requires a compelling argument before new services are allowed on core hardware.</li>
  </ol></li>
  <li>Initial Committers. List of committers (stating name and an email address) used to bootstrap the community. Mark each which has submitted a contributor license agreement (CLA). Existing committers should use their apache.org email address. Others should use the email address that is (or will be) on the CLA. That makes it easy to match CLAs with proposed committers to the project. It is a good idea to submit CLAs at the same time as the proposal.</li>
  <li>Sponsors. Committers at Apache are individuals and work here on their own behalf. They are judged on their merits, not their affiliations. However, in the spirit of full disclosure, it is useful for any current affiliations which may affect the perceived independence of the initial committers to be listed openly at the start. For example, those in salaried positions whose job is to work on the project should list their affiliation. Having this list helps to judge how much diversity exists in the initial list and so how much work there is to do. This is best done in a separate section away from the committers list. Only the affiliations of committers on the initial bootstrap list are relevant. These committers have not been added by the usual meritocratic process. It is strongly recommended that once a project is bootstrapped, developers are judged by their contributions and not by their background. This list should not be maintained after the bootstrap has been completed.</li>
  <li>Champion. The Champion is a person already associated with Apache who leads the proposal process. It is common - but not necessary - for the Champion to also be proposed as a Mentor. A Champion should be found while the proposal is still being formulated. Their role is to help formulate the proposal and work with you to resolve comments and questions put forth by the IPMC while reviewing the proposal.</li>
  <li>Nominated Mentors. Lists eligible (and willing) individuals nominated as Mentors [definition] for the candidate. Three Mentors gives a quorum and allows a Podling more autonomy from the Incubator PMC, so the current consensus is that three Mentors is a good number. Any experienced Apache community member can provide informal mentorship anyway, what's important is to make sure the podling has enough regularly available mentors to progress smoothly. There is no restriction on the number of mentors, formal or informal, that a Podling may have.</li>
  <li>Sponsoring Entity. The Sponsor is the organizational unit within Apache taking responsibility for this proposal. The sponsoring entity can be:
  <ul>
    <li>The Apache Board</li>
    <li>The Incubator</li>
    <li>Another Apache project The PMC for the appropriate project will decide whether to sponsor (by a vote). Unless there are strong links to an existing Apache project, it is recommended that the proposal asks that the Incubator for sponsorship.</li>
  </ul>
  Note that the final destination within the Apache organizational structure will be decided upon graduation.</li>

  </ol>

### 2.3. Role of the Incubator

Since the meritocratic rules operate across the ASF from bottom to top, it is vital for the long-term stability of this form of government that a project's initial set of committers has to understand very well the dynamics of such a system, and to share the same philosophical attitude toward collaboration and openness that the ASF expects from its projects.

The incubator is responsible for:
* filtering proposals about the creation of a new project or sub-project
* helping create the new project and the infrastructure that it needs to operate
* supervising and mentoring the incubated community to help it create an open, meritocratic environment
* evaluating the maturity of the incubated project, and deciding whether to promote it to official project / sub-project status or, in case of failure, to retire it.

The incubator (like the board) does not perform filtering on the basis of technical issues. The foundation respects and supports a variety of technical approaches. It doesn't fear innovation or even internal confrontation between projects which overlap in functionality.

The incubator filters projects on the basis of the likelihood of projects becoming successful meritocratic communities. The basic requirements for incubation are:
* a working codebase -- over the years and after several failures, the foundation came to understand that without an initial working codebase, it is generally hard to bootstrap a community. This is because merit is not well-recognized by developers without a working codebase. Also, the friction that can develop during the initial design stage is likely to fragment the community.
* the intention to assign sufficient intellectual property rights to the software to the ASF -- this allows the foundation to obtain an irrevocable and permanent right to redistribute and work on the code, without fearing lock-in for itself or for its users, while still allowing the original author to maintain their copyright.
* a sponsoring ASF member or officer -- this person acts as the main mentor, giving directions to the project, helping out in the day-to-day details and keeping contact with the incubator PMC.

The incubation period normally serves to estimate whether the project is able to increase the diversity of its committer base and play within the meritocratic rules of the foundation.

It might seem rather easy to achieve, but, in a volunteer and highly selective environment, attracting new committers is not automatic.

Diversity of committership is important for two main reasons:
* it gives long term stability to the project's development. In fact, with all the developers affiliated to the same entity, the chance of seeing all of them moving away from the project at the same time is much greater than with a community of individuals affiliated to unrelated entities.
* it gives a greater variety of technical visions, This guarantees a better adherence to the environment and users' needs, thus a higher chance of finding real-life use of the software.

## 3. The project as part of the ASF

The following entities govern the Apache Software Foundation (see [https://www.apache.org/foundation/governance/](https://www.apache.org/foundation/governance/)):
  * Board of Directors (board) governs the foundation and is composed of members.
    * The board is responsible for management and oversight of the business and affairs of the corporation in accordance with the foundation [Bylaws](https://www.apache.org/foundation/bylaws.html). This includes management of the corporate assets (funds, intellectual property, trademarks, and support equipment) and allocation of corporate resources to projects.
    * However, each Apache project's PMC has technical decision-making authority regarding the content and direction of the project.
    * The board is currently composed of nine individuals, elected by and from the members of the foundation. The bylaws don't specify the number of board members that the foundation should have, but this was the number of the first board and it has never changed. The board is elected every year.
    * The [board website](https://www.apache.org/foundation/governance/board.html) has more information, the list of the current directors, a schedule of meetings, and minutes of past meetings.
  * Project Management Committees (PMCs) govern the projects, and they are composed of committers. (Note that every PMC member is, by definition, also a committer.)
    * The Board establishes Project Management Committees (PMCs) to be responsible for the active management of one or more specific communities.
    * Each PMC includes at least one officer of the ASF, who shall be designated its chair, and may include one or more other members of the ASF.
    * The Board appoints the chair of the PMC, who also becomes an officer (Vice President) of the ASF. The chair has primary responsibility to the Board, and has the power to establish rules and procedures for the day to day management of the communities for which the PMC is responsible, including the composition of the PMC itself. See further discussion about the role of the PMC [chair](https://www.apache.org/dev/pmc.html#chair) and [why chairs are officers](https://www.apache.org/foundation/faq.html#why-are-PMC-chairs-officers).
    * The [ASF Bylaws](https://www.apache.org/foundation/bylaws.html) (section 6.3) define a PMC and the position of chair. Some emails help to clarify: [here](http://www.mail-archive.com/community@apache.org/msg03961.html) and [here](http://www.mail-archive.com/community@apache.org/msg04005.html).
    * The role of the PMC from a Foundation perspective is oversight. The main role of the PMC is not code and not coding, but to ensure that its community addresses all legal issues and follows stated procedures, and that each and every release is the product of the community as a whole. That is key to ASF's litigation-protection mechanisms.
    * The second role of the PMC is to further the long-term development and health of the community as a whole, and to ensure that balanced and wide scale peer review and collaboration takes place. The ASF worries about any community which centers around a few individuals who are working virtually without review. The ASF believes that this is detrimental to quality, stability, and robustness of both code and long-term social structures.
    * The ASF firmly believe in [hats](https://www.apache.org/foundation/how-it-works/#hats). A role at the ASF is one assigned to someone personally, and is bestowed on them by their peers. It is not tied to their job or current employer or company.
    * However those on the PMC are held to a higher standard. The PMC, and the chair in particular, are eyes and ears of the ASF Board, so the ASF relies on and needs to trust PMC members to provide legal oversight.
    * The board can vote to terminate a PMC at any time by resolution.
    * The [Apache Developer Information](https://www.apache.org/dev/) pages have more details of how PMCs work.
 * Various Officers of the corporation, appointed by the board, who set Foundation-wide policies in specific areas (legal, brand, fundraising, etc.)

For all the details, read ASF's [Governance overview](https://www.apache.org/foundation/governance/).
