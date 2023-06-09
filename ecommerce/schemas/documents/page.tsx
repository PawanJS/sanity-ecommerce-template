import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        defineArrayMember({type: 'hero'}),
        defineArrayMember({type: 'imageSection'}),
        defineArrayMember({type: 'textSection'}),
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    }),
    defineField({
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
      options: {hotspot: true},
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
})
