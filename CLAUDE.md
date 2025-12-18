# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

### Build resume in all formats (DOCX + PDF)
```bash
npm run build
```

### Build only DOCX
```bash
npm run build:docx
```

### Build only PDF (requires existing DOCX)
```bash
npm run build:pdf
```

## Architecture

This is a Node.js project that programmatically generates ATS-optimized resume documents using the `docx` library.

### Key Components

- **index.js**: Main resume generation script that uses the docx library to create the DOCX file. Reads resume data from resume-data.json and dynamically generates the document structure.
- **resume-data.json**: Structured JSON file containing all resume content organized into logical fields (personal info, experience, education, etc.). Edit this file to update resume content.
- **package.json**: Defines build scripts that chain DOCX generation with LibreOffice PDF conversion.
- **GitHub Actions Workflow**: Automatically builds resume on push/PR to main branch, uploading DOCX and PDF artifacts with 90-day retention.

### Document Structure

The resume document is built using the docx library with:
- Custom document styles (default Arial font, 11pt)
- Paragraph styles for Heading1 and Heading2
- Bullet list numbering configuration
- Sections containing paragraphs with TextRun children
- Precise spacing and alignment controls

### Resume Content Organization

Resume data is stored in resume-data.json with the following structure:
- **personalInfo**: name, address, phones, email, website, location
- **technicalSkills**: codingArchitecture, deployment, messaging, versioning, cloudInfrastructure
- **experience**: array of jobs with title, company, location, period, projects with responsibilities
- **education**: array of degrees with institution, year, grade
- **academicProjects**: array of projects with title and description
- **languages**: array of languages with proficiency levels
- **interests**: array of interest strings
- **activities**: array of activity strings

To update resume content, edit resume-data.json and run the build command.

## PDF Conversion

The PDF is generated from the DOCX using LibreOffice headless mode:
```bash
soffice --headless --convert-to pdf Aswin_Kalarickal_Resume.docx
```

LibreOffice must be installed for PDF generation to work.
