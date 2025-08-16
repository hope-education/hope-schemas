export default {
    name: 'OLmodelPapers',
    title: 'OL Model Papers',
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
        {name: 'pdf', title: 'PDF File', type: 'file'},
        {name: 'subject', title: 'Subject', type: 'reference', to: [{type: 'subject'}]},
    ]
}