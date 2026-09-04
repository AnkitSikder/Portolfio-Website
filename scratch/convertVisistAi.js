const fs = require('fs');

async function convertVisistAi() {
  const { visistAiData } = await import('../src/data/projects/visist-ai.js');
  const d = visistAiData;

  const projectData = {
    title: d.hero.title,
    slug: 'visist-ai',
    short_description: d.hero.summary,
    thumbnail: d.hero.heroImage,
    hero_image: d.hero.heroImage,
    category: d.hero.category,
    status: 'Published',
    featured: true,
    display_order: 2,
  };

  const blocks = [];

  // Hero
  blocks.push({
    type: 'Hero',
    content: {
      category: d.hero.category,
      title: d.hero.title,
      summary: d.hero.summary,
      role: d.hero.role,
      duration: d.hero.duration,
      heroImage: d.hero.heroImage
    }
  });

  // Overview
  blocks.push({
    type: 'Overview',
    content: {
      title: d.overview.title,
      description: d.overview.description,
      audience: d.overview.audience
    }
  });

  // Research - Interviews
  blocks.push({
    type: 'Research',
    content: {
      variant: 'interviews',
      heading: 'User Interviews',
      participants: d.research.interviews.participants,
      findings: d.research.interviews.findings
    }
  });

  // Research - Surveys (Using Research block with variant surveys)
  blocks.push({
    type: 'Research',
    content: {
      variant: 'surveys',
      heading: 'Surveys',
      participants: d.research.surveys.method,
      findings: d.research.surveys.insights
    }
  });

  // Personas
  blocks.push({
    type: 'Persona',
    content: {
      personas: d.research.personas
    }
  });

  // Comparison
  blocks.push({
    type: 'Comparison',
    content: {
      insight: d.competition.insight,
      items: d.competition.competitors.map(c => ({
        name: c.name,
        strengths: c.strengths,
        weaknesses: c.weaknesses
      }))
    }
  });

  // DesignSystem
  blocks.push({
    type: 'DesignSystem',
    content: {
      heading: 'Style Guide',
      subheading: d.designSystem.description,
      colors: d.designSystem.colors,
      typography: d.designSystem.typography
    }
  });

  // Testing
  blocks.push({
    type: 'Testing',
    content: {
      insights: d.testing.insights,
      quotes: d.testing.quotes
    }
  });

  // ScreenShowcase
  blocks.push({
    type: 'ScreenShowcase',
    content: {
      screens: d.screens
    }
  });

  // Outcome
  blocks.push({
    type: 'Outcome',
    content: {
      heading: 'The Outcome',
      body: 'Visist.ai provides a comprehensive ecosystem for badminton players and coaches. By translating raw performance data into actionable insights through an intuitive interface, we bridged the gap between professional coaching and everyday practice.',
      theme: 'orange'
    }
  });


  let sql = '-- Paste this entirely into the Supabase SQL Editor\n\n';
  sql += `DELETE FROM public.projects WHERE slug = 'visist-ai';\n\n`;

  sql += `INSERT INTO public.projects (id, created_at, title, slug, short_description, thumbnail, hero_image, category, status, featured, display_order)
VALUES (
  gen_random_uuid(),
  now(),
  '${projectData.title.replace(/'/g, "''")}',
  '${projectData.slug}',
  '${projectData.short_description.replace(/'/g, "''")}',
  '${projectData.thumbnail}',
  '${projectData.hero_image}',
  '${projectData.category}',
  '${projectData.status}',
  ${projectData.featured},
  ${projectData.display_order}
);\n\n`;

  sql += `DO $$\nDECLARE\n  v_project_id uuid;\nBEGIN\n  SELECT id INTO v_project_id FROM public.projects WHERE slug = 'visist-ai';\n\n`;

  blocks.forEach((b, idx) => {
    const contentJson = JSON.stringify(b.content).replace(/'/g, "''");
    sql += `  INSERT INTO public.blocks (project_id, type, content, order_index)\n  VALUES (v_project_id, '${b.type}', '${contentJson}'::jsonb, ${idx});\n\n`;
  });

  sql += `END $$;\n`;

  fs.writeFileSync('scratch/restoreVisistAi.sql', sql);
  console.log('Visist AI SQL generated!');
}

convertVisistAi().catch(console.error);
