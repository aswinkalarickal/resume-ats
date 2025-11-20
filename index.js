import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
} from "docx";
import { writeFileSync } from "fs";

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }, // 11pt default
      },
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        run: { size: 28, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 } },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        run: { size: 24, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 180, after: 100 } },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullet-list",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        // Header - Name
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "Aswin Kalarickal",
              bold: true,
              size: 32,
              font: "Arial",
            }),
          ],
        }),

        // Contact Information
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Kalarickal House, Chowara PO, Ernakulam, Kerala, India - 683 571",
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Phone: +971 543 523 953 | +91 88 91 423590",
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Email: mail@aswink.in | Website: www.aswink.in",
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 240 },
          children: [
            new TextRun({ text: "Location: Abu Dhabi, UAE", size: 20 }),
          ],
        }),

        // Technical Skills Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("TECHNICAL SKILLS")],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Coding / Architecture: ", bold: true }),
            new TextRun({
              text: "C#, Go, Node.js, Javascript, Typescript, Python, Web Backend (.NET Core, Express), Datastores (MongoDB, Redis, MySQL), Web Frontend (ReactJS), Game Engine (Unity), Scripting (Bash)",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Deployment: ", bold: true }),
            new TextRun({
              text: "Terraform, TeamCity, Jenkins, Docker, Nginx",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Messaging: ", bold: true }),
            new TextRun({ text: "XMPP, Socket.IO" }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Versioning: ", bold: true }),
            new TextRun({ text: "Perforce, Git, Mercurial" }),
          ],
        }),

        new Paragraph({
          spacing: { after: 240 },
          children: [
            new TextRun({ text: "Cloud Infrastructure: ", bold: true }),
            new TextRun({
              text: "Amazon Web Services (AWS), Google Cloud Platform (GCP), Kubernetes",
            }),
          ],
        }),

        // Experience Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("PROFESSIONAL EXPERIENCE")],
        }),

        // Senior Online Programmer - Current
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Senior Online Programmer",
              bold: true,
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Ubisoft Abu Dhabi, Abu Dhabi, UAE",
              italics: true,
            }),
            new TextRun({ text: " | 2024 - Present" }),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Ubisoft Abu Dhabi is one of the first major video game studios based in the UAE capital, focusing on developing and bringing to market successful mobile games for a worldwide audience.",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Project: Captain Laserhawk: The G.A.M.E.",
              bold: true,
            }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Developed server-side architecture using C# .NET in microservices environment"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Maintained server code ownership including code reviews and maintenance"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Managed cloud deployments using Kubernetes on AWS with TeamCity"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Implemented Infrastructure as Code (IaaS) using Terraform"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Developed multiplayer game logic and meta functionalities"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Integrated Web3 functionalities including NFT inventory from Ethereum blockchain"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Collaborated with cross-functional teams across different time zones"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 240 },
          children: [new TextRun("Built admin tool using ReactJS")],
        }),

        // Online Programmer - Redlynx
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Online Programmer", bold: true, size: 24 }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Ubisoft Redlynx, Remote", italics: true }),
            new TextRun({ text: " | 2023 - 2024" }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Project: Gwen's Getaway", bold: true }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Developed server-side architecture using Go in microservices environment"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun("Implemented meta functionalities and game features"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [new TextRun("Built admin tool using ReactJS")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Managed cloud deployments using Kubernetes on GCP with GitLab CI/CD"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 240 },
          children: [
            new TextRun("Worked remotely across different time zones"),
          ],
        }),

        // Online Programmer - Abu Dhabi (2021-2024)
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Online Programmer", bold: true, size: 24 }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Ubisoft Abu Dhabi, Abu Dhabi, UAE",
              italics: true,
            }),
            new TextRun({ text: " | 2021 - 2024" }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Project: Clash of Beasts", bold: true }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun("Developed server-side features using C# .NET"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Implemented meta functionalities and leaderboard system"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [new TextRun("Integrated Google Play Games support")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Implemented messaging system using XMPP, including migration to ejabberd CE from Fluux"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 240 },
          children: [new TextRun("Managed deployments using Jenkins and AWS")],
        }),

        // Senior Game Developer - DYNAMICNEXT
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Senior Game Developer",
              bold: true,
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "DYNAMICNEXT, Kochi, India", italics: true }),
            new TextRun({ text: " | 2017 - 2021" }),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "DYNAMICNEXT is a company specializing in social strategic games with main titles including Downtown Mafia and Battlecry, serving over 2 million users combined.",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Project: Downtown Gangstaz", bold: true }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun("Implemented user interface and game features"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Integrated third-party services: Unity Ads, AppsFlyer, Mixpanel, Google Play Games, Facebook"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [new TextRun("Implemented in-app purchases")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 160 },
          children: [new TextRun("Developed server-side features")],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Project: DTC Poker - Texas Hold'em",
              bold: true,
            }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun("Designed and developed core game functionalities"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Integrated Unity Ads, AppsFlyer, Mixpanel, Google Play Games, and Facebook login systems"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [new TextRun("Implemented in-app purchases")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 240 },
          children: [new TextRun("Ported the game to Steam platform")],
        }),

        // Software Engineer - DYNAMICNEXT
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Software Engineer", bold: true, size: 24 }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "DYNAMICNEXT, Kochi, India", italics: true }),
            new TextRun({ text: " | 2014 - 2017" }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Project: Downtown Casino", bold: true }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun("Designed and developed core game functionalities"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [new TextRun("Managed server deployment")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 160 },
          children: [new TextRun("Implemented in-app purchases")],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Project: Downtown Mafia", bold: true }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 240 },
          children: [
            new TextRun(
              "Implemented additional game functionalities and features"
            ),
          ],
        }),

        // COO & Co-founder - Coppra
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "COO & Co-founder", bold: true, size: 24 }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Coppra, Kochi, India", italics: true }),
            new TextRun({ text: " | 2013 - 2014" }),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Coppra developed websites and web applications for various clients including Startup Village and KSEB. First company to launch a Malayalam movie promotion game for Android and developed title games for local animation series. Core team member responsible for products and services as a leading developer.",
            }),
          ],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Developed multiple websites including Startup Village's official website"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 240 },
          children: [
            new TextRun("Built backend for social games including Hit It!"),
          ],
        }),

        // Education Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("EDUCATION")],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "B.Tech in Computer Science and Engineering",
              bold: true,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "MES College of Engineering, Kuttippuram | 2013 | 68.9%",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: "AISSCE (12th Grade)", bold: true })],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "S N Vidya Bhavan, Chentrappinni | 2009 | 82.6%",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: "AISSE (10th Grade)", bold: true })],
        }),
        new Paragraph({
          spacing: { after: 240 },
          children: [
            new TextRun({
              text: "S N Vidya Bhavan, Chentrappinni | 2007 | 83.2%",
            }),
          ],
        }),

        // Academic Projects Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("ACADEMIC PROJECTS")],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Main Project: Intelligent Traffic Lights Based on RFID",
              bold: true,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: "Developed a dynamic traffic signaling system using Radio Frequency Identification (RFID). RFID readers at intersections detected tags in vehicles to determine queue counts and dynamically compute green light durations. The system allowed priority assignment and vehicle tracking for theft prevention and traffic rule enforcement.",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Mini Project: Single Sign-On", bold: true }),
          ],
        }),
        new Paragraph({
          spacing: { after: 240 },
          children: [
            new TextRun({
              text: "Implemented single sign-on for managing multiple personal accounts. Created a website where users could save login credentials for different sites and access them without re-entering details.",
            }),
          ],
        }),

        // Languages Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("LANGUAGES")],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Malayalam: ", bold: true }),
            new TextRun({ text: "Native" }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "English: ", bold: true }),
            new TextRun({ text: "Full professional proficiency" }),
          ],
        }),
        new Paragraph({
          spacing: { after: 240 },
          children: [
            new TextRun({ text: "Hindi: ", bold: true }),
            new TextRun({ text: "Professional working proficiency" }),
          ],
        }),

        // Interests Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("INTERESTS")],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [new TextRun("Music")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [new TextRun("Photography")],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          spacing: { after: 240 },
          children: [new TextRun("Tech Magazines")],
        }),

        // Activities Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("ACTIVITIES")],
        }),

        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Official web designer of Stupa'13 - a national level inter-college techno-cultural event held at MES College of Engineering, Kuttippuram"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "Secretary of departmental association MatriCS (MES Association for Technical Research in Computer Science), organized various college events"
            ),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullet-list", level: 0 },
          children: [
            new TextRun(
              "House captain at school, participated in various district and state level events"
            ),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  writeFileSync("./Aswin_Kalarickal_Resume.docx", buffer);
  console.log("Resume created successfully!");
});
