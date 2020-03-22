import makeId from './makeId';

const markup = `
  # Overview

  Mr. Ringer is a Javascript math library that makes it simple to perform complex math for 3D games.

  This package is named after my high school trigonometry teacher, Mr Ringer, who told myself and the rest of the class to go to the beach instead of taking the final exam for his class (I ended up getting a 46% on that test).

  # Installation

  You can install mr.ringer from either npm or use it as a standalone script on the page.

  \`\`\`
  $ npm install mr.ringer

  <script src="https://unpkg.com/mr.ringer/dist/mr.ringer.js"></script>
  \`\`\`

  # Vector2

  ## add()

  # Vector3
`;

const lines = markup
  .split('\n')
  .map((line, index) => ({ line: line.trim(), index }));

const sections = lines
  .filter(({ line }) => line.startsWith('# '))
  .map(({ line, index }) => ({
    index,
    id: makeId(line.replace('#', '')),
    title: line.replace('#', '').trim(),
  }));

sections.forEach((section, index) => {
  const start = section.index;
  const end = (sections[index + 1] || {}).index || lines.length;

  const subSections = lines
    .slice(start, end)
    .filter(({ line }) => line.startsWith('## '))
    .map(({ line, index }) => ({
      index,
      id: makeId(line.replace('##', '')),
      title: line.replace('##', '').trim(),
    }));

  sections[index].subSections = subSections;
});

const content = {
  markup,
  sections,
};

export default content;
