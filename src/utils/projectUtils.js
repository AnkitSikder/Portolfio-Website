// Utility functions extracted from ProjectPage.jsx for reuse in hardcoded pages

export function getHeroProps(project, blocks) {
  const heroBlock = blocks.find(b => b.type === 'Hero');
  if (heroBlock) {
    return {
      category: heroBlock.content.category || project.category,
      title: heroBlock.content.title || project.title,
      summary: heroBlock.content.summary || project.short_description,
      role: heroBlock.content.role,
      duration: heroBlock.content.duration,
      tools: heroBlock.content.tools,
      heroImage: project.hero_image || heroBlock.content.heroImage,
    };
  }
  // Fallback to project metadata
  return {
    category: project.category,
    title: project.title,
    summary: project.short_description,
    role: null,
    duration: null,
    tools: null,
    heroImage: project.hero_image || project.thumbnail,
  };
}

export function getBodyBlocks(blocks) {
  return blocks.filter(b => b.type !== 'Hero');
}
