import makeId from './makeId';

const markup = `
  # Overview

  Mr. Ringer is a Javascript math library with a simple API for complex math.

  This library was created to aide the development of a 3D video game, after realizing I didn’t understand the math required to make a 3D game from scratch and I needed to learn it. As such this library has a bias towards supporting what is necessary for that project. But this code is [open source](https://github.com/itsjoekent/mr.ringer) and anyone can contribute towards it.

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
