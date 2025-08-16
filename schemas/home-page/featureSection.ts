// schemas/featureSection.ts
export default {
  name: 'featureSection',
  title: 'Feature Sections',
  type: 'document',
  fields: [
    {
      name: 'features',
      title: 'Feature Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Feature',
          fields: [
            { 
              name: 'title', 
              type: 'string', 
              title: 'Title' 
            },
            {
              name: 'description',
              title: 'Description with Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [{ title: 'Bullet', value: 'bullet' }],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                    annotations: [],
                  },
                }
              ]
            },
            { 
              name: 'buttonText', 
              type: 'string', 
              title: 'Button Text' 
            },
            { 
              name: 'isDisabled', 
              type: 'boolean', 
              title: 'Disable Button?' 
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
}
