export default {
    name: 'PastPaperReviews',
    title: 'Past Paper Reviews',
    type: 'document',
    fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
            slugify: (input: string) => input
              .toLowerCase()
              .replace(/\s+/g, '-')           // Replace spaces with hyphens
              .replace(/[^\w\-]+/g, '')       // Remove all special characters including forward slashes
              .replace(/\-\-+/g, '-')         // Replace multiple hyphens with single
              .replace(/^-+/, '')             // Remove hyphens from start
              .replace(/-+$/, '')             // Remove hyphens from end
          }
        },
        {
          name: 'description',
          title: 'Description with Bullet Points',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {name: 'image', title: 'Image', type: 'image'},
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
        {name: 'subject', title: 'Subject', type: 'reference', to: [{type: 'subject'}]},
        {name: 'year', title: 'Year', type: 'reference', to: [{type: 'year'}]},
        {name: 'pdf', title: 'PDF File', type: 'file' }
        
    ]
}
