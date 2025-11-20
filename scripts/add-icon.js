const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get the icon name from command line arguments
const iconName = process.argv[2];

if (!iconName) {
  console.error('Please provide an icon name: npm run add-icon your-icon-name');
  process.exit(1);
}

// Path to the techIcons.tsx file
const techIconsPath = path.join(__dirname, '..', 'utils', 'techIcons.tsx');

// Read the current content
let content = fs.readFileSync(techIconsPath, 'utf8');

// Find the TechIconKey type definition
const typeMatch = content.match(/export type TechIconKey = ([^;]+);/);
if (!typeMatch) {
  console.error('Could not find TechIconKey type definition');
  process.exit(1);
}

// Add the new icon to the TechIconKey type
const newTypeValue = typeMatch[1]
  .replace(/\s*\|\s*$/, '')
  .replace(/\s*$/, '');

const updatedType = `export type TechIconKey = ${newTypeValue} | '${iconName}';`;
content = content.replace(/export type TechIconKey = [^;]+;/, updatedType);

// Find the icons object
const iconsMatch = content.match(/(export const techIcons = {[^}]*};)/s);
if (!iconsMatch) {
  console.error('Could not find techIcons object');
  process.exit(1);
}

// Add the new icon to the icons object
const iconEntry = `\n  ${iconName}: ({
    className,
    ...props
  }: React.SVGProps<SVGSVGElement> & { className?: string }) => (\n    <svg\n      className={cn("h-6 w-6", className)}\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke="currentColor"\n      strokeWidth="2"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n      {...props}\n    >\n      {/* Add your SVG path here */}\n      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />\n    </svg>\n  ),`;

const updatedIcons = iconsMatch[1].replace(/};$/, `${iconEntry}\n};`);
content = content.replace(/(export const techIcons = {[^}]*};)/s, updatedIcons);

// Write the updated content back to the file
fs.writeFileSync(techIconsPath, content, 'utf8');

console.log(`✅ Successfully added ${iconName} icon to techIcons.tsx`);
console.log('Next steps:');
console.log(`1. Open ${techIconsPath}`);
console.log(`2. Replace the placeholder SVG with your actual SVG code for ${iconName}`);
console.log(`3. Use the icon in your components with: <TechIcon name="${iconName}" />`);
