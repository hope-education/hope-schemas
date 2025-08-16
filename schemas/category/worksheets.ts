export default {
    name: 'worksheets',
    title: 'Worksheets',
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
      {name: 'pdf', title: 'PDF File', type: 'file'},
      {name: 'subject', title: 'Subject', type: 'reference', to: [{type: 'subject'}]},
      {name: 'grade', title: 'Grade', type: 'reference', to: [{type: 'grade'}]},
      {name: 'term', title: 'Term', type: 'reference', to: [{type: 'term'}]}
    ]
}

import { StructureBuilder } from 'sanity/structure';

export const createWorksheetsStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Worksheets')
    .id('worksheets_root')
    .child(
      S.documentList()
        .title('Grades')
        .filter('_type == "grade"')
        .child((gradeId = '') => {
          console.log('Resolved Grade ID at Grade level:', gradeId);
          return S.documentList()
            .title('Subjects')
            .filter('_type == "subject"')
            .child((subjectId = '') => {
              console.log('Resolved Subject ID at Subject level:', subjectId);
              return S.documentList()
                .title('Terms')
                .filter('_type == "term"')
                .child((termId = '') => {
                  console.log('Resolved Term ID at Term level:', termId);
                  return S.documentList()
                    .title('Worksheets for the Term')
                    .filter('_type == "worksheets" && grade._ref == $gradeId && subject._ref == $subjectId && term._ref == $termId')
                    .params({ gradeId, subjectId, termId })
                    .initialValueTemplates([
                      S.initialValueTemplateItem('worksheets', {
                        grade: { _ref: gradeId, _type: 'grade' },
                        subject: { _ref: subjectId, _type: 'subject' },
                        term: { _ref: termId, _type: 'term' }
                      })
                    ]);
                });
            });
        })
    ); 