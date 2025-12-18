# Resume ATS Builder

Automated resume builder that generates ATS-friendly resume documents in both DOCX and PDF formats using Node.js and the docx library.

## Overview

This project uses code to generate a professional resume in multiple formats, ensuring consistency and making it easy to update and maintain your resume programmatically.

## Features

- Generates ATS-optimized DOCX format
- Automatically converts DOCX to PDF using LibreOffice
- Consistent formatting and styling
- Easy to update and maintain
- Automated CI/CD with GitHub Actions

## Prerequisites

- Node.js 20 or higher
- LibreOffice (for PDF conversion)

## Installation

```bash
npm install
```

## Usage

### Build Resume

Generate both DOCX and PDF versions:

```bash
npm run build
```

### Build Individual Formats

Generate DOCX only:

```bash
npm run build:docx
```

Generate PDF only (requires existing DOCX file):

```bash
npm run build:pdf
```

## Project Structure

```
resume-ats/
├── index.js                    # Main resume generation script
├── resume-data.json            # Resume content in structured JSON format
├── package.json                # Project dependencies and scripts
├── Aswin_Kalarickal_Resume.docx  # Generated DOCX file
├── Aswin_Kalarickal_Resume.pdf   # Generated PDF file
└── .github/
    └── workflows/
        └── build.yml          # GitHub Actions workflow
```

## GitHub Actions

The project includes a GitHub Actions workflow that automatically builds the resume on:

- Push to `main` branch
- Pull requests to `main` branch
- Manual workflow dispatch

The built artifacts (DOCX and PDF) are available for download from the Actions tab and are retained for 90 days.

## Dependencies

- [docx](https://www.npmjs.com/package/docx) - Library for creating DOCX documents

## How It Works

1. Resume content is stored in [resume-data.json](resume-data.json) in a structured format
2. [index.js](index.js) uses the `docx` library to programmatically create a resume document
3. The script reads the JSON data and dynamically generates the document structure
4. The script defines styles, formatting, and content structure
5. The DOCX file is generated and saved
6. LibreOffice converts the DOCX to PDF format

## Customization

To update your resume, modify the content in [resume-data.json](resume-data.json) and run the build command. The JSON file contains:

- **personalInfo**: Contact information (name, address, phones, email, website, location)
- **technicalSkills**: Skills categorized by type (coding, deployment, messaging, etc.)
- **experience**: Work history with projects and responsibilities
- **education**: Educational qualifications
- **academicProjects**: Academic project descriptions
- **languages**: Language proficiencies
- **interests**: Personal interests
- **activities**: Activities and achievements

The document structure includes:

- Custom styles for headings and body text
- Bullet list formatting
- Paragraph spacing and alignment
- Professional typography (Arial font)

## License

ISC
