---
layout: default
---

# Sustainable Project Pathways for HPC Software

In the realm of High-Performance Computing (HPC), the sustainability of research software is a pivotal concern that intersects with the capabilities and efficiency of supercomputing resources worldwide. But what does "sustainability" entail within the HPC context? How can we measure and enhance the longevity, efficiency, and adaptability of HPC software? How do we address testing challenges in performance portability, integration of machine learning (ML), heterogenous exascale architectures, and energy metrics in application software development? What are sustainable project pathways toward self-sustainment for projects of all sizes? 

This half-day workshop is dedicated to exploring the concept of sustainability in HPC software projects. Invited speakers will share several approaches to software sustainability from several perspectives: 1) testing software applications across heterogeneous architectures, developing platforms aimed at achieving maximum performance objectives with minimum energy consumption, and energy metrics toward green practices, and 2) existing metrics that have been defined by groups such as CHAOSS (https://chaoss.community), OpenSSF (https://openssf.org), and others for assessment and improvement, as well as how projects can engage in self-sustainment through pathways to various foundations and funding organizations. 

Through collaboration with the eScience community, CORSA (https://corsa.center/) seeks to address the sustainability challenges unique to HPC software, including but not limited to, managing the lifecycle of software on HPC platforms, ensuring compatibility with diverse and evolving hardware architectures, optimizing software for energy efficiency and computational performance, and engaging in self-sustainment through pathways to various foundations and funding organizations. By taking a holistic, cultural approach to this dimension, we aim to elucidate the sustainability needs of software and applications, leading to more comprehensive strategies for fostering resilient, efficient, and future-proof software ecosystems.

# Distinguised Invited Speakers
**Title: Sustainable HPC Software: From Auto-tuning Technology for Performance Portability**

**Takahiro Katagiri, Information Technology Center, Nagoya University, Japan**

**Professor Takahiro Katagiri** is currently a professor in the High Performance Computing Division at the Information Technology Center of Nagoya University. He earned his Bachelor of Engineering degree from Kyoto University in 1996, followed by a Master of Science degree in Computer Science from the University of Tokyo in 1998. He then completed his Ph.D. in Computer Science at the University of Tokyo in 2001. After receiving his Ph.D., Professor Katagiri led a project under the Japan Science and Technology Agency in 2001. The following year, in 2002, he joined the Graduate School of Information Systems at The University of Electro-Communications as a research associate. His career progressed in 2007 when he became an associate professor in the Supercomputing Research Division at the Information Technology Center of the University of Tokyo. In 2016, he assumed his current position at Nagoya University. Professor Katagiri's research expertise lies in the fields of high-performance computing, parallel processing, and auto-tuning. More recently, his work has expanded into the areas of large-scale machine learning and quantum annealing. He is an active member of several professional organizations, including the ACM, IEEE, SIAM, IPSJ, and JSIAM.

**Title: Towards Sustainable Promotion of Scientific Discovery by Integration of Simulation/Data/Learning (S+D+L) on Exascale Supercomputers**

**Presented by: Kengo Nakajima (The University of Tokyo/RIKEN R-CCS, Japan)**
with Takashi Shimokawabe (The University of Tokyo, Japan)
Masatoshi Kawai (Nagoya University, Japan)
Shinji Sumimoto (The University of Tokyo, Japan)
Takashi Arakawa (CliMTech/The University of Tokyo, Japan)
Hisashi Yashiro (National Institute for Environmental Studies (NIES), Japan)

**Kengo Nakajima** is a Professor, Supercomputing Research Division, Information Technology Center, the University of Tokyo since 2008. Prior to joining the University of Tokyo in 2004, he spent 19 years in industry. He is also a Deputy Director of RIKEN R-CCS (Center for Computational Science) since 2018, where he is in charge of supervising research teams in computer sciences, and human resource development. His research interest covers computational mechanics, computational fluid dynamics (CFD), computational geophysics, numerical linear algebra, parallel iterative algorithms, parallel preconditioning methods, multigrid methods, parallel programming models, adaptive mesh refinement (AMR), and parallel visualization. He was the leading PI of “h3-Open-BDEC” project (FY. 2019-2023), supported by JSPS Grants-in-Aid for Scientific Research (S). B.Eng (1985, Aeronautics, University of Tokyo), M.S. (1993, Aerospace Engineering, University of Texas at Austin), Ph.D. (2003, Engineering Mechanics, University of Tokyo). Member of IEEE, SIAM, ACM, IPSJ, JSIAM, and JSCES. General Chair: VECPAR 2012, SIAM PP18, HPC Asia 2022, Technical Paper/Program Committee Chair: SC13, ICPP 2019, Area/Track Chair: SC10, SC22, IPDPS22, EuroPar 2024.

**Title: Toward Green Practices and Metrics for Software Development in HPC**

**Shuji Morisaki, Nagoya University, Japan**

**Shuji Morisaki** is an associate professor in the Department of Computing and Software Systems at the Graduate School of Informatics, Nagoya University, Japan. He received his Ph.D degree in information science from the Graduate School of Information Science at Nara Institute of Science and Technology, Japan, in 2001. He was a co-chair of the Working Group for International Research Cooperation on Software Inspections. He has also served as the chair of three working groups for creating guidelines for developers at the Information-technology Promotion Agency, a Japanese government agency. He is currently serving as a technical advisor for a company developing autonomous driving software. He has conducted software engineering research through industry-academia collaborative research projects with 57 software development companies. His research interests include empirical software engineering, software metrics, and software quality.

**Title: Sustainable Project Pathways for HPC Software**

**Elaine M. Raybourn, Sandia National Laboratories, USA**

**Elaine M. Raybourn** is a social scientist in Applied Cognitive Science at Sandia National Laboratories. While at Sandia National Laboratories she has worked with the UK as a guest researcher at British Telecom; Germany (Fraunhofer FIT), and France (INRIA) as a Fellow of the European Research Consortium in Informatics and Mathematics (ERCIM). She was the Sandia National Laboratories Institutional PI for Interoperable Design of Extreme-scale Application Software (IDEAS-ECP) from 2018-2023, and currently supports the U.S. Department of Energy Office of Science next generation software stewardship as a member of CORSA. She is a certified Agile Scrum Master and Product Owner; and holds a Graduate Certificate in Modeling and Simulation of Behavioral Cybersecurity from the University of Central Florida. She was the Super Computing (SC21) Scientific Visualization & Data Analytics Showcase Chair. Her research focuses on complex socio-technical systems of scientific software teams of teams, collaborative immersive virtual environments, HPC AI/ML ethics, and the diffusion of innovations to incentivize program modernization and cultural change. 

# Workshop Agenda
September 17, 2024 | Room 604 | 1400-1700

1400-1405 
**Workshop Introduction** 

**Elaine M. Raybourn, Sandia National Laboratories**

1405-1430
**Sustainable HPC Software: From Auto-tuning Technology for Performance Portability**

**Takahiro Katagiri, Information Technology Center, Nagoya University, Japan**

Abstract:
High portability alone is insufficient for the sustained use of high-performance numerical calculation programs. To ensure long-term reuse, these programs must maintain high performance across diverse computing environments, a characteristic known as performance portability. As modern hardware, including supercomputers, grows increasingly complex—with a variety of components ranging from multi-core CPUs to GPUs—it becomes challenging for software optimized for specific hardware to perform efficiently on different systems. Achieving performance portability, therefore, is often difficult. To address this, we have been studying auto-tuning (AT) techniques to ensure consistent performance across various hardware platforms.
This presentation covers two main topics. First, we will showcase advanced applications of AT in the development of sustainable high-performance computing (HPC) software, including quantum-related annealing and quantum simulators on GPUs. Second, we will discuss the optimization of software testing for numerical applications, using LAPACK—a widely-used numerical software package—as a case study.

1430-1500
**Towards Sustainable Promotion of Scientific Discovery by Integration of Simulation/Data/Learning (S+D+L) on Exascale Supercomputers**

**Kengo Nakajima (The University of Tokyo/RIKEN R-CCS, Japan)**

Abstract:
Recently, supercomputing has been changing dramatically. In addition to traditional simulations for computational science and engineering (CSE), the proportion of new are areas of use such as Data Analytics and AI/Machine Learning is increasing. Integration/convergence of Simulation/Data/Learning (S+D+L) is important towards Society 5.0 proposed by Japanese Government, which is a safe, secure and human-centered society by integration of cyber space and physical space. In 2015, we started the BDEC project (Big Data & Extreme Computing) for development of supercomputers and software for integration of (S+D+L). In May 2021, we started operation of the Wisteria/BDEC-01. It is the first BDEC system, which consists of computing nodes for computational science and engineering with A64FX (Odyssey), and those for Data Analytics/AI with NVIDIA A100 GPU's (Aquarius). We also develop a software platform "h3-Open-BDEC" for integration of (S+D+L) on the Wisteria/BDEC-01, which is designed for extracting the maximum performance of the supercomputers with minimum energy consumption focusing on (1) Innovative method for numerical analysis with high-performance/high-reliability/power-saving based on the new principle of computing by adaptive precision, accuracy verification and automatic tuning, (2) Data driven approach by integration of ML & CSE, and (3) System software/utilities on heterogenous systems, such as the Wisteria/BDEC-01. Integration of (S+D+L) by h3-Open-BDEC enables significant reduction of computations and power consumption, compared to those by conventional simulations, and sustainable promotion of scientific discovery by supercomputers in the Exascale Era. “h3-Open-BDEC” project has been supported by Japanese Government from FY.2019 to FY.2023, and it had made significant contributions to development of innovative methods for computational science by integration of (S+D+L). This talk will overview Wisteria/BDEC-01 and h3-Open-BDEC, and introduce case studies in fluid dynamics, and earth science in which energy consumption was significantly reduced through integration of (S+D+L).

1500 **Discussion**

1530-1600 **Break**

1600-1630
**Toward Green Practices and Metrics for Software Development in HPC**

**Shuji Morisaki, Nagoya University, Japan**

Abstract: 
This talk will discuss energy savings in the context of application software development in HPC. First, this talk will introduce green practices and energy metrics in programming and testing activities, which have been studied for general-purpose software and mobile apps. We will then explore how these practices and metrics can be effectively applied to HPC applications. Additionally, we will examine metrics that can serve as proxies for direct energy measurements.

1630-1645
**Sustainable Project Pathways for HPC Software**

**Elaine M. Raybourn, Sandia National Laboratories, USA**

Abstract
In this talk we explore existing metrics that have been defined by groups such as CHAOSS and OpenSSF for assessment and improvement, as well as how projects can engage in self-sustainment through pathways to various foundations and funding organizations. 

1645-1700
**Workshop Discussion and Close**
 
# Organizers
Elaine M. Raybourn, Sandia National Laboratories

Daniel S. Katz, University of Illinois Urbana-Champaign

Greg Watson, Oak Ridge National Laboratory
