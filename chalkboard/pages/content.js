const content = {
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      composition: [
        {
          type: 'markdown',
          content: `Mr. Ringer is a Javascript math library with a simple API for complex math.`,
        },
        {
          type: 'markdown',
          content: `This library was created to aide the development of a 3D video game, after realizing I didn’t understand the math required to make a 3D game from scratch and I needed to learn it. As such this library has a bias towards supporting what is necessary for that project. But this code is [open source](https://github.com/itsjoekent/mr.ringer) and anyone can contribute towards it.`,
        },
        {
          type: 'markdown',
          content: `This package is named after my high school trigonometry teacher, Mr Ringer, who told myself and the rest of the class to go to the beach instead of taking the final exam for his class (I ended up getting a 46% on that test).`,
        },
        {
          type: 'markdown',
          content: `This page serves as not only written documentation for how to use the library, but as a virtual chalkboard for dummies like me that don’t understand what some of these equations are actually used for and what they do.`,
        },
      ],
    },
    {
      id: 'installation',
      title: 'Installation',
      composition: [
        {
          type: 'markdown',
          content:
            'You can install mr.roger from either npm or use it as a standalone script on the page.',
        },
        {
          type: 'terminal',
          content: [
            '$ npm install mr.ringer',
            '',
            '<script src="https://unpkg.com/mr.ringer/dist/mr.ringer.js"></script>',
          ],
        },
      ],
    },
    {
      id: 'vector2',
      title: 'Vector2',
    },
    {
      id: 'vector3',
      title: 'Vector3',
    },
  ],
};

export default content;
