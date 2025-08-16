// schemas/hero.ts
export default {
  name: 'hero',
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
      name: 'button1',
      type: 'object',
      title: 'Primary Button',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Button Text',
        },
      ],
    },
    {
      name: 'button2',
      type: 'object',
      title: 'Secondary Button',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Button Text',
        },
      ],
    },
    {
      name: 'muxUrl',
      title: 'Mux Video URL',
      type: 'url',
      description: 'Paste a Mux video link here'
    }    
  ],
};
