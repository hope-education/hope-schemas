export default{
    name: 'time_section',
    title: 'Time Section',
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
        name: 'classes',
        title: 'Class Schedules',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'gradeAndSubject',
                title: 'Grade and Subject',
                type: 'string',
                description: 'Example: Grade 11 Science',
              },
              {
                name: 'date',
                title: 'Date',
                type: 'string',
              },
              {
                name: 'time',
                title: 'Time',
                type: 'string',

              }
            ]
          }
        ]
      }
    ]
  }
  