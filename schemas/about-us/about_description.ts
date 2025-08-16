export default {
    name: 'about_description',
    title: 'About Description',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description with Bullet Points',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'button',
            title: 'Button',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        }
    ]
}