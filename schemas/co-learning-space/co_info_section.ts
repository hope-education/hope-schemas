export default{
    name: 'co_info_section',
    title: 'Co-Learning Info Section',
    type: 'document',
    fields: [
        {

        name: 'sectionImage',
        title: 'Section Image',
        type: 'image',
        options: {
          hotspot: true
        },
      },
      {
        name: 'Info',
        title: 'Info Section',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'SmallQuote',
                title: 'Small Quote',
                type: 'string',
              },
              {
                name: 'BigQuote',
                title: 'Big Quote',
                type: 'string',
              },
            ]
          }
        ]
      }
    ]
  }
  