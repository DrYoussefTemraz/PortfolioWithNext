const fs = require('fs');
const path = require('path');

const icons = [
  {
    name: 'atomic-design',
    svg: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" stroke-width="2"/>
      <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" stroke-width="2"/>
      <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" stroke-width="2"/>
      <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" stroke-width="2"/>
    </svg>
    `
  },
  {
    name: 'react-query',
    svg: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C12 9.79086 10.2091 8 8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16C10.2091 16 12 14.2091 12 12Z" stroke="currentColor" stroke-width="2"/>
      <path d="M16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12Z" fill="currentColor"/>
      <path d="M20 12C20 11.7239 20.2239 11.5 20.5 11.5C20.7761 11.5 21 11.7239 21 12C21 12.2761 20.7761 12.5 20.5 12.5C20.2239 12.5 20 12.2761 20 12Z" fill="currentColor"/>
    </svg>
    `
  },
  {
    name: 'shadcn',
    svg: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
  },
  {
    name: 'framer-motion',
    svg: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12L19.5 4.5H4.5L12 12ZM12 12V19.5M12 12V4.5M12 12L4.5 19.5H19.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
  }
];

const publicDir = path.join(__dirname, '..', 'public');

// Create icon SVGs
icons.forEach(icon => {
  fs.writeFileSync(path.join(publicDir, `${icon.name}.svg`), icon.svg.trim());
  console.log(`Generated ${icon.name}.svg`);
});

console.log('Successfully generated all icon SVGs');
