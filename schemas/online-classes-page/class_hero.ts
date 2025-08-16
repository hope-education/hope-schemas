// schemas/hero.ts
export default {
    name: 'class_hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name:'label',
        type:'string',
        title:'Label',
      },
      {
        name: 'description',
        title: 'Description with Bullet Points',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'button',
        type: 'string',
        title: 'Primary Button',
      },
      {
        name: 'hero_image',
        title: 'hero image',
        type: 'image',
      } 
    ],
  };
  