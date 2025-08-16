// schemas/homePage.js
export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'text',
    },
    // Add other fields as needed
  ],
};
