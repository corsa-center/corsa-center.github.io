14 May 2024

Daniel S. Katz, Leah Silen, Elaine M. Raybourn, Greg Watson, Addi Thakur Malviya, and the CORSA Team

# 1. Introduction

This document, written as part of the work of the [Center for Open-Source Research Software Stewardship and Advancement (CORSA)](https://corsa.center), describes the information that a particular software project needs to collect/have in order to apply to and then join [NumFOCUS](https://numfocus.org/). Much of the content in this document comes from NumFOCUS documents, including the website and the project application form, as well as the fiscal sponsorship agreement that was used for [Parsl: Parallel Scripting in Python](https://parsl-project.org/) to join NumFOCUS.

NumFOCUS is a 501(c)(3) public charity providing services and support to sustain project communities within the open source scientific ecosystem. Through its mission to provide foundational support, to empower, and to sustain the open source scientific computing ecosystem, NumFOCUS provides an independent, professional, and stable home for research software communities. NumFOCUS’s proven operational systems are adept at seeking, managing, and allocating funding from diverse sources, all while prioritizing project autonomy.

The NumFOCUS website's [projects page](https://numfocus.org/projects-overview) states, under Community, that "Project leaders benefit from participation in the NumFOCUS network, which includes leaders from a variety of scientifically oriented open source computing communities. NumFOCUS leverages our broad, international network to help build connections that support our projects. In addition to making strategic introductions, NumFOCUS creates opportunities for project leaders to connect with one another as a group, both in person and through digital forums." And under Promotion, it states that "NumFOCUS projects benefit from elevated visibility as a result of their association with the organization. We work to highlight all of our projects through various communications and marketing activities. We also find opportunities to showcase our projects with potential and current corporate sponsors."

Some additional benefits from joining a foundation are discussed in Section 5 of [Watson, et al., 2023](https://doi.org/10.48550/arXiv.2308.14953).


# 2. Relationships with NumFOCUS and basic requirements

NumFOCUS has two options for projects that want to join it:

1. Fiscally Sponsored Projects (project funding can go through NumFOCUS)
* Fiscally sponsored projects formally become part of the NumFOCUS legal entity. NumFOCUS provides a number of services for fiscally sponsored projects, including financial administration (accounts payable & receivable, grant administration, contractor agreements, credit cards, taxes, and reporting), operational support( virtual meeting solutions, liability insurance, communication platforms, and HR services), conference & event planning, legal support (licensing, trademark registration & ownership, contracts & agreements, legal consulting). Fiscally sponsored projects are also eligible to use NumFOCUS resources and infrastructure to help raise money for the project and to apply for funding through NumFOCUS’s internal grants program. These Small Development Grants are intended to support crucial project development and infrastructure needs. NumFOCUS has a [webpage](https://numfocus.org/projects-overview) that discusses this at a high level.

* Qualification for fiscal sponsorship requires meeting a higher bar than affiliation to ensure that NumFOCUS can legally represent the project.
2. Affiliated Projects (project funding can not go through NumFOCUS, it must go through another mechanism)
* Affiliated projects benefit from their association with NumFOCUS through community building, funding, and promotion. Affiliated projects remain separate legal entities; NumFOCUS does not assume any legal or fiduciary responsibility.  Affiliated projects benefit from access to NumFOCUS project community collaboration calls and funding through NumFOCUS’s Small Development Grants Program. These grant proposals are reviewed during three annual grant cycles.


All projects are required to

* Be scientifically oriented, i.e., contribute to the advancement of scientific research
* Be open, e.g., have publicly hosted code, a website or README to orient new potential contributors to project development, discussion forum(s) open to public participation (mailing list, Discourse, Slack team, etc.), an OSI-approved license, more than one contributor

Fiscally sponsored projects additionally are required to have

* A transparent, publicly visible governance model
* A publicly visible roadmap outlining high-priority work areas

In the rest of this document, we discuss both fiscally sponsored projects that we assume meet the basic requirements above, as well as affiliated projects.

In addition, there are two types of fiscal sponsorship, each of which might be appropriate for some software projects.

1. Comprehensive Model
* Fiscally sponsored projects under the Comprehensive Model formally become part of NumFOCUS — in other words, NumFOCUS maintains all legal and fiduciary responsibility for the project. Any work product of the Fiscally Sponsored Project is available to the public or to the charitable sector, and NumFOCUS assures funders that the purposes and any restrictions of all grants and/or contributions will be met. The Comprehensive Model of fiscal sponsorship helps protect individual contributors from legal liability and ensures project assets are owned by the project and not individual contributors.
2. Grantor-Grantee Model
* The Grantor-Grantee or Preapproved Grant Model is a “lightweight” fiscal sponsorship model where a project or entity seeks support for a specific grant or project that will advance or is aligned with, NumFOCUS’s mission or charitable goals.  As the sponsor, NumFOCUS receives and manages grant funding assuring that the project will use the funds to accomplish the proposed grant. In this model, if a project already has a tax ID or Employer Identification Number (EIN), the project remains a separate entity responsible for managing its own tax and liability issues. If not, NumFOCUS will include the project in its tax filing. NumFOCUS ensures that the project will use the grant funds received to accomplish the ends described in the grant proposal, in alignment with NumFOCUS’s purpose as a 501(c)(3) public charity in the United States. Note: ˙This can be an option for an early-stage project wanting to apply for a grant from a foundation or institution requiring they have a legal entity.    

We generally assume that projects will want to join under the comprehensive model, but some projects may already have their own legal structure or want to set one up, and then join under the grantor-grantee model. 


# 3. Application requirements

To apply for NumFOCUS fiscal or affiliate sponsorship (see [https://numfocus.org/projects-overview](https://numfocus.org/projects-overview)), the following questions must be answered. Questions that start with * are required to be answered. Since NumFOCUS's decision process is not transparent, we cannot say that all questions need positive answers, but that the balance of the answers is part of the decision process, and that these are generally good practices for most software projects (_as indicated in italics_ after each question). NumFOCUS currently requires that this information be entered into a form; it will likely be easier for a project to collect (and discuss) it elsewhere, then when it is complete, enter it into [the form](https://numfocus.org/projects-overview#apply).

Note that questions below in **bold** will be asked for both projects seeking fiscal or affiliate sponsorship, while questions that are not in bold will only be asked for project seeking fiscal sponsorship.


1. ***Does the project have a contributor Code of Conduct?**

    > All projects should have a Code of Conduct (CoC). One option for a project that doesn't yet have one is to use the NumFOCUS CoC, see question 22. Another popular starting point is from [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

2. ***Project name**

    > All projects should have a name. Note that the project can later change its name if needed.

3. ***URL of project's main repo**

    > The open source project should have a main repo that is public and has a URL

4. **Project's website (if applicable)**

    > The project should have a website, perhaps generated from a repo

5. ***A summary description of the project in a few sentences**

    > All projects should already have this in their README

6. ***Does the project have a logo?**

    > All projects should have a logo, but this question is answered no, the next question will not be asked.

7. **Upload a .svg file of the logo**
8. **The project's social media handles/URLs**

    > Projects should typically have some social media presence as a project, distinct from any one of the developers

9. ***Why does the project want to join NumFOCUS**

    > A project (i.e., the lead developers) should have at least one reason it wants to join

10. ***Is the project applying for Fiscal Sponsorship or Affiliation?**

    > As stated above, we assume fiscal sponsorship. If affiliation is selected, the questions below that are not in **bold** will not be asked.

11. *Is the project applying for the Comprehensive or the Grantor-Grantee fiscal sponsorship model?

    > This question, which only appears if you answered Fiscal Sponsorship for the previous question, allows three answers: the two choices and "unknown". As discussed above, the comprehensive model is likely the right choice for most projects. If this isn't clear, an "unsure" answer is an option.

12. Additional information
    1. The publicly visible location of the project's governance document

        > All projects should have a governance document (see guidance and examples in [https://github.com/corsa-center/oss-documents/](https://github.com/corsa-center/oss-documents/)). This might need to be aligned with a higher-level organization, such as a Software Stewardship Organization (SSO) in the case of the [Consortium for the Advancement of Scientific Software (CASS)](https://cass.community).

    2. The publicly visible location of the project's roadmap

        > All projects should have a roadmap document (see guidance and examples in [https://github.com/corsa-center/oss-documents/](https://github.com/corsa-center/oss-documents/)).

    3. The publicly visible location of the project's “how to get started as a contributor” documentation

        > All projects should have contributor documentation (see guidance and examples in [https://github.com/corsa-center/oss-documents/](https://github.com/corsa-center/oss-documents/)).

    4. *The names and email addresses of five people willing to act as signatories for the project

        > These are the people who will decide/vote on project decisions. Ideally, these people should demonstrate some diversity, at least in terms of their affiliations, which should include at least three organizations, as this will later be required in the Fiscal Sponsorship Agreement if the application is successful.


        > Note that if a project cannot meet this diversity criterion, it perhaps should continue as an affiliate member, rather than a fiscally-sponsored member.

    5. *The name of the project's leadership body (It cannot contain the word "board" other than that it can be whatever the project chooses)

        > This can just be something like "Project" Leadership. This will also later be required in the Fiscal Sponsorship Agreement if the application is successful.

    6. *A physical mailing address for the project (Nothing will be sent here and it wont be used for any other purpose)
    7. A short description of the project geared toward funders/grantors/non-expert audience (See example at the top of [https://numfocus.org/project/pandas](https://numfocus.org/project/pandas))

        > All projects should already have some text that can be mined for this from their README or website_

    8. A short project description for developers/users (See example under “Technical Details” tab at the bottom of [https://numfocus.org/project/pandas](https://numfocus.org/project/pandas))

        > All projects should already have some text that can be mined for this from their README or website_

    9. A few sentences describing the known applications of the project (See example under “Applications” tab at the bottom of [https://numfocus.org/project/pandas](https://numfocus.org/project/pandas))

        > All projects should already have some text that can be mined for this from their README or website

    10. Please provide project tags for Industry (what industries the project is mainly used in, e.g. Government, Higher Education, Finance, Business Applications), Languages (what languages the project uses, e.g.,  Python, C, Javascript, R, Julia) and Applications (some simple one or two-word applications for the project, e.g., Data Wrangling, Numeric Computing, Modeling, Visualization) (See example here: [https://numfocus.org/project/pandas](https://numfocus.org/project/pandas))
    11. Any upcoming or annual events held by the project, if applicable

        > Many projects will have some type of regular user and/or developer meeting, perhaps virtual

    12. Link to the project's blog or newsletter, if applicable

        > Many projects will have either a blog or newsletter

14. ***How does the project relate to or integrate with the existing ecosystem of NumFOCUS tools?**

    > Most projects will likely have some connection to existing NumFOCUS [fiscally sponsored projects](https://numfocus.org/sponsored-projects) and/or [affiliated projects](https://numfocus.org/sponsored-projects/affiliated-projects), such as dependencies

15. ***How does the project further the NumFOCUS mission (see [https://numfocus.org/community/mission](https://numfocus.org/community/mission))**

    > Because NumFOCUS is a 501(c)(3) public charity in the United States, all spending must be consistent with its mission, which is "to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs." All projects should be able to tie to some part of this mission.

16. *How many active contributors does the project currently have?

    > The project should be able to obtain this from its repository

17. Any comments the project would like to make on the number of active contributors

    > If the number is now small, perhaps a discussion of how this is sustainable, or how the project plans to increase it

18. ***Please list the project's maintainers (i.e., anyone with write access to the repository). Please include: 1) their username on the repository hosting service (e.g., Github, Gitlab, or Bitbucket); 2) their affiliations (e.g., UC Berkeley or Argonne National Labs); and 3) the date of their last commit to the codebase.**

    > The project should be able to obtain this from its repository, and perhaps from the maintainers themselves

19. ***Does the project have any significant contributors who are not maintainers? Please list up to 5, providing the same information as requested in the previous question**

    > This might include key people who are do not contribute to the repository, (perhaps such as a grant PI) and developers who are not maintainers (e.g., someone who contributes by pull requests (PRs) but who does not have the ability to merge PRs)  

20. ***What is the project doing to attract and/or mentor new contributors and maintainers?**

    > All sustainable projects should have an answer to this, as some contributors and maintainers will drop off over time and will need to be replaced

21. ***Where does the project host conversations about project development and governance (e.g. mailing lists, forums, etc.), and how many participants do you have?**

    > All projects should have some public (not secret) means of having these discussions.

22. ***What license(s) does the project currently use?**

    > All projects should, in theory, already have an OSI-approved license, but note that some national labs, e.g., LBNL, seem to default to a license that they consider open but that is not OSI-approved because it includes additional language. (See guidance and examples in [https://github.com/corsa-center/oss-documents/](https://github.com/corsa-center/oss-documents/).)

23. ***Projects must adopt the [NumFOCUS Code of Conduct](https://numfocus.org/code-of-conduct) or one similar in spirit. How does the project plan to meet this requirement?**

    > Many Codes of Conduct (CoCs) may already meet this requirement, or the project might want to simply use the NumFOCUS CoC. (See guidance and examples in [https://github.com/corsa-center/oss-documents/](https://github.com/corsa-center/oss-documents/).)

24. **Where is the project's Code of Conduct**

    > The CoC should be in a public place

25. **Name of submitting person**
26. **Email of submitting person**
27. **Questions or comments**

    > This is a final place to add any additional information or message to NumFOCUS


NumFOCUS currently reviews applications quarterly (see [https://numfocus.org/projects-overview#dates](https://numfocus.org/projects-overview#dates) for specific dates), so decisions should be made within 3-6 months, and the review process might lead to questions for the submitting person, or a simple yes or no decision. If there are no questions from NumFOCUS, the applying project won't hear anything until there is a decision.


# 4. Joining requirements

**Affiliated projects**

If a project that has applied to be an affiliated project and is accepted, there is a simple onboarding process that includes a call with NumFOCUS explaining the Small Development Grants Program, and then NumFOCUS gets the project's logo files and description for its website (from the application), and adds contact details to NumFOCUS project lists, groups, and mailing lists.

**Fiscally-sponsored projects**

If a project's application to be a fiscally-sponsored project is successful, the next/final step will be to sign a fiscal sponsorship agreement (FSA). This agreement is between NumFOCUS and the five project signatories on behalf of the project (initially assumed to be the same as the people listed in question 12d of the application.

This agreement basically makes NumFOCUS the legal owner of the project, but gives the project's leadership committee (as named in question 12e of the application, and initially comprising the project signatories) the right to act on NumFOCUS's behalf for the project. NumFOCUS will maintain the project's finances in a restricted fund that is solely for the project, and where the project's leadership committee can use these funds, e.g., for (sub)awards or contracts to developers.

The agreement will include a number of clauses, most of which will be unsurprising and unobjectionable to most projects. However, one issue that might arise is if the signatories have the right to transfer ownership of the project assets (domain name, code, documents, logo, IP) to NumFOCUS. The institutions that employed the developers might need to agree to this transfer.

Other elements of the FSA that are worth noting:

* To cover administrative and service costs, NumFOCUS deducts an administrative charge equal to 10% on donations and 10-15% on income from grants (depending on the indirect cost rates set by the funder) designated for purposes of the Project
* The project's leadership committee's members can be removed and new members can be added as defined by the governance model of the existing leadership committee (e.g., simple majority vote, consensus). The leadership committee shall have a minimum of three (3) members. All decisions by the leadership committee shall be made by either consensus, or by a simple majority, depending on the model chosen by the project.
* The project should acknowledge sponsorship, e.g., by posting the NumFOCUS sponsored project logo, supplied by NumFOCUS, on the project’s website’s homepage.
* The leadership committee or NumFOCUS may terminate the agreement at any time, subject to a set of requirements that initially include a 60-day written notice and finding a successor, typically another 501(c)(3) that is willing and able to become the sponsor.
* The project leadership committee agrees: the project will remain solely open source; the project leadership committee will manage the project; the project will maintain its own branding (while acknowledging NumFOCUS's fiscal sponsorship), when raising money for the project, the project leadership committee is working on behalf of NumFOCUS
* The services NumFOCUS will provide for the project include: assisting with fundraising events, providing banking services, holding assets, accounting, limited liability protection, legal services, marketing services, negotiation of leases and contracts, and disbursement of funds.

Finally, NumFOCUS gets the project's logo files and description for its website (from the application), and adds contact details to NumFOCUS project lists, groups, and mailing lists.


# 5. The project as a part of NumFOCUS

Once there is a signed agreement, the project and NumFOCUS may wish to work together on publicizing the new relationship.

Once the project is part of NumFOCUS, it will benefit from being part of the NumFOCUS community by having the ability to use NumFOCUS's slack to discuss issues with other NumFOCUS projects, the opportunity for at least one person to attend a NumFOCUS annual meeting again to discuss common issues, apply for [small development grants](https://numfocus.org/programs/small-development-grants) (microgrants that help projects fund important work that they might not otherwise be able to do like improving usability, growing project communities, and speeding up the time to major releases), participating in NumFOCUS's [Diversity & Inclusion in Scientific Computing (DISC) program](https://numfocus.org/programs/diversity-inclusion), and seeking corporate sponsorship and individual donations. 

Projects that have questions about foundations are welcome to contact [CORSA](https://corsa.center) by [emailing PI Greg Watson](mailto:watsongr@ornl.gov). And those with questions that are specific to [NumFOCUS](https://numfocus.org) should use the contact link on its website.
