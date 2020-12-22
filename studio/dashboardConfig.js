export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe2246aafbbcf7e75f4e8e9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zucbsn5x',
                  apiId: '9c4100df-9565-4740-8d1f-d0ab6c9f8ff5'
                },
                {
                  buildHookId: '5fe2246b3662cc3f38461203',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6st7ntt8',
                  apiId: '82e32e04-99a9-4cae-a0be-4cf88ab07651'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/egmach1000/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6st7ntt8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
