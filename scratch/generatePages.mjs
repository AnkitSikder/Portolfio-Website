import fs from 'fs';
import path from 'path';

const projectsFile = 'c:/Users/AnkitRaj/Downloads/Portfolio Antigravity/scratch/projects.json';
const outputDir = 'c:/Users/AnkitRaj/Downloads/Portfolio Antigravity/src/pages/projects';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const projectsRaw = fs.readFileSync(projectsFile, 'utf8');
const projects = JSON.parse(projectsRaw);

const generateComponentString = (componentName, project) => {
  return `import React, { useEffect } from 'react';
import ProjectHero from '../../components/case-study/ProjectHero';
import ProjectRenderer, { getSectionList } from '../../components/case-study/ProjectRenderer';
import SectionProgressNav from '../../components/case-study/SectionProgressNav';
import { getHeroProps, getBodyBlocks } from '../../utils/projectUtils';

export default function ${componentName}() {
  const project = ${JSON.stringify(project, null, 2)};
  
  useEffect(() => {
    document.title = \`\${project.title} — Ankit Sikder\`;
  }, []);

  const blocks = project.blocks || [];
  const heroProps = getHeroProps(project, blocks);
  const bodyBlocks = getBodyBlocks(blocks);

  const bodySections = getSectionList(bodyBlocks);
  const navSections = [
    { id: 'project-hero', label: 'Intro' },
    ...bodySections,
  ];

  return (
    <article className="bg-background min-h-screen">
      <SectionProgressNav sections={navSections} />
      <div id="project-hero">
        <ProjectHero {...heroProps} />
      </div>
      <ProjectRenderer blocks={bodyBlocks} />
    </article>
  );
}
`;
};

const map = {
  'auracharge': 'AuraCharge',
  'vrtraffic': 'ImmersiveTraffic',
  'makhana-tool': 'MakhanaProject'
};

projects.forEach(p => {
  const compName = map[p.slug];
  if (compName) {
    const fileContent = generateComponentString(compName, p);
    fs.writeFileSync(path.join(outputDir, `${compName}.jsx`), fileContent);
    console.log(`Generated ${compName}.jsx`);
  }
});
