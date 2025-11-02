export default {
  name: 'school_cards',
  title: 'School Cards Section',
  type: 'document',
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
              description: 'URL or path for the button (e.g., /library, /online-classes)',
            },
            {
              name: 'isDisabled',
              title: 'Disabled?',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
}; 