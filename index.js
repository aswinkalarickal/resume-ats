import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
} from "docx";
import { writeFileSync, readFileSync } from "fs";

// Load resume data from JSON file
const resumeData = JSON.parse(
  readFileSync("./resume-data.json", "utf-8")
);

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
              text: resumeData.personalInfo.name,
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
              text: resumeData.personalInfo.address,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: `Phone: ${resumeData.personalInfo.phones.join(" | ")}`,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: `Email: ${resumeData.personalInfo.email} | Website: ${resumeData.personalInfo.website}`,
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 240 },
          children: [
            new TextRun({ text: `Location: ${resumeData.personalInfo.location}`, size: 20 }),
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
              text: resumeData.technicalSkills.codingArchitecture,
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Deployment: ", bold: true }),
            new TextRun({
              text: resumeData.technicalSkills.deployment,
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Messaging: ", bold: true }),
            new TextRun({ text: resumeData.technicalSkills.messaging }),
          ],
        }),

        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({ text: "Versioning: ", bold: true }),
            new TextRun({ text: resumeData.technicalSkills.versioning }),
          ],
        }),

        new Paragraph({
          spacing: { after: 240 },
          children: [
            new TextRun({ text: "Cloud Infrastructure: ", bold: true }),
            new TextRun({
              text: resumeData.technicalSkills.cloudInfrastructure,
            }),
          ],
        }),

        // Experience Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("PROFESSIONAL EXPERIENCE")],
        }),

        // Generate experience entries
        ...resumeData.experience.flatMap((job, jobIndex) => {
          const isLastJob = jobIndex === resumeData.experience.length - 1;

          const jobParagraphs = [
            // Job title
            new Paragraph({
              spacing: { after: 80 },
              children: [
                new TextRun({
                  text: job.title,
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            // Company and period
            new Paragraph({
              spacing: { after: 80 },
              children: [
                new TextRun({
                  text: `${job.company}, ${job.location}`,
                  italics: true,
                }),
                new TextRun({ text: ` | ${job.period}` }),
              ],
            }),
          ];

          // Company description (if present)
          if (job.companyDescription) {
            jobParagraphs.push(
              new Paragraph({
                spacing: { after: 100 },
                children: [
                  new TextRun({
                    text: job.companyDescription,
                  }),
                ],
              })
            );
          }

          // Projects
          job.projects.forEach((project, projectIndex) => {
            const isLastProject = projectIndex === job.projects.length - 1;

            // Project name (if present)
            if (project.name) {
              jobParagraphs.push(
                new Paragraph({
                  spacing: { after: 80 },
                  children: [
                    new TextRun({
                      text: `Project: ${project.name}`,
                      bold: true,
                    }),
                  ],
                })
              );
            }

            // Responsibilities
            project.responsibilities.forEach((responsibility, respIndex) => {
              const isLastResponsibility = respIndex === project.responsibilities.length - 1;
              const spacing = (isLastProject && isLastResponsibility && !isLastJob) ? { after: 240 } :
                             (isLastResponsibility && !isLastProject) ? { after: 160 } : {};

              jobParagraphs.push(
                new Paragraph({
                  numbering: { reference: "bullet-list", level: 0 },
                  spacing,
                  children: [
                    new TextRun(responsibility),
                  ],
                })
              );
            });
          });

          return jobParagraphs;
        }),

        // Education Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("EDUCATION")],
        }),

        // Generate education entries
        ...resumeData.education.flatMap((edu, index) => {
          const isLast = index === resumeData.education.length - 1;
          return [
            new Paragraph({
              spacing: { after: 80 },
              children: [
                new TextRun({
                  text: edu.degree,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: isLast ? 240 : 80 },
              children: [
                new TextRun({
                  text: `${edu.institution} | ${edu.year} | ${edu.grade}`,
                }),
              ],
            }),
          ];
        }),

        // Academic Projects Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("ACADEMIC PROJECTS")],
        }),

        // Generate academic projects
        ...resumeData.academicProjects.flatMap((project, index) => {
          const isLast = index === resumeData.academicProjects.length - 1;
          return [
            new Paragraph({
              spacing: { after: 80 },
              children: [
                new TextRun({
                  text: project.title,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              spacing: { after: isLast ? 240 : 160 },
              children: [
                new TextRun({
                  text: project.description,
                }),
              ],
            }),
          ];
        }),

        // Languages Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("LANGUAGES")],
        }),

        // Generate language entries
        ...resumeData.languages.map((lang, index) => {
          const isLast = index === resumeData.languages.length - 1;
          return new Paragraph({
            spacing: { after: isLast ? 240 : 80 },
            children: [
              new TextRun({ text: `${lang.language}: `, bold: true }),
              new TextRun({ text: lang.proficiency }),
            ],
          });
        }),

        // Interests Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("INTERESTS")],
        }),

        // Generate interests
        ...resumeData.interests.map((interest, index) => {
          const isLast = index === resumeData.interests.length - 1;
          return new Paragraph({
            numbering: { reference: "bullet-list", level: 0 },
            spacing: isLast ? { after: 240 } : {},
            children: [new TextRun(interest)],
          });
        }),

        // Activities Section
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          children: [new TextRun("ACTIVITIES")],
        }),

        // Generate activities
        ...resumeData.activities.map((activity) => {
          return new Paragraph({
            numbering: { reference: "bullet-list", level: 0 },
            children: [
              new TextRun(activity),
            ],
          });
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  writeFileSync("./Aswin_Kalarickal_Resume.docx", buffer);
  console.log("Resume created successfully!");
});
