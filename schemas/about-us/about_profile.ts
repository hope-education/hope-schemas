export default {
    name: 'about_profile',
    title: 'About Profile',
    type: 'document',
    fields: [
        {
          name: 'members',
          title: 'Team Members',
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
                    hotspot: true,
                  },
                },
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                },
                {
                  name: 'designation',
                  title: 'Designation',
                  type: 'string',
                },
                {
                  name: 'linkedinUrl',
                  title: 'LinkedIn Profile URL',
                  type: 'url',
                },
              ],
            },
          ],
          validation: (Rule: any) => Rule.required().min(3).max(3),
        },
      ],
}