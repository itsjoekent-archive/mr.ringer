const lessons = [
  {
    id: 'adding-vectors',
    title: 'Adding vectors',
    script: `// Create a new Vector2
const vector = Vector2(10, 10);

grid('2d', 0, 0, 30, 30);

// Plot the vector on the grid
lineColor('#003e7b');
arrow(0, 0, vector.x, vector.y);

// Add a vector
const updatedVector = Vector2.add(Vector2(10, 10), vector);

// Plot the updated vector, originating from the previous.
lineColor('#007b7b');
arrow(vector.x, vector.y, updatedVector.x, updatedVector.y);
`,
  },
  {
    id: 'subtracting-vectors',
    title: 'Subtracting vectors',
    script: `

    `,
  },
  {
    id: 'scaling-vectors',
    title: 'Scaling vectors',
    script: `

    `,
  },
  {
    id: 'normalizing-vectors',
    title: 'Normalizing vectors',
    script: `

    `,
  },
];

export default lessons;
