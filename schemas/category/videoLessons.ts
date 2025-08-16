export default {
    name: 'videoLessons',
    title: 'Video Lessons',
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
        {name: 'video', title: 'YouTube Video ID', type: 'string', description: 'Enter the YouTube video ID (e.g., dQw4w9WgXcQ)'},
        {name: 'subject', title: 'Subject', type: 'reference', to: [{type: 'subject'}]},
        {name: 'grade', title: 'Grade', type: 'reference', to: [{type: 'grade'}]},
        {name: 'term', title: 'Term', type: 'reference', to: [{type: 'term'}]}
    ]
}

import { StructureBuilder } from 'sanity/structure';

export const createVideoLessonsStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Video Lessons')
    .id('videoLessons_root')
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
                    .title('Video Lessons for this Term')
                    .filter('_type == "videoLessons" && grade._ref == $gradeId && subject._ref == $subjectId && term._ref == $termId')
                    .params({ gradeId, subjectId, termId })
                    .initialValueTemplates([
                      S.initialValueTemplateItem('videoLessons', {
                        grade: { _ref: gradeId, _type: 'grade' },
                        subject: { _ref: subjectId, _type: 'subject' },
                        term: { _ref: termId, _type: 'term' }
                      })
                    ]);
                });
            });
        })
    ); 