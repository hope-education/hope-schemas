export default {
    name: 'seminar_cards',
    title: 'Seminar Cards',
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
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
                        },
                        
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        },
                        {
                            name: 'button',
                            title: 'Button',
                            type: 'string',
    
                        },
                        {
                            name: 'recordings',
                            title: 'Recordings',
                            type: 'array',
                            of: [{ 
                                type: 'object',
                                fields: [
                                    {name: 'title', title: 'Title', type: 'string'},
                                    {name: 'url', title: 'URL', type: 'url'}
                                ]}]
                        }
                    ]
                }
            ]
        }
    ]
}