export default {
    name: 'seminar_hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
            name: 'label',
            type: 'string',
            title: 'Label',

        },
        {
            name: 'subject',
            type: 'string',
            title: 'Subject',
        },
        {
            name: 'lesson',
            type: 'string',
            title: 'Lesson',
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [{ type: 'block' }],
        }


    ]
};

