import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Photography & Cinematography", value: "photography" },
          { title: "Event Coverage", value: "events" },
          { title: "Product Photography", value: "product" },
          { title: "Documentaries & Biographies", value: "documentaries" },
          { title: "Pre & Post Production", value: "production" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "process",
      title: "Process",
      type: "object",
      fields: [
        { name: "concept", type: "text", title: "Concept" },
        { name: "planning", type: "text", title: "Planning" },
        { name: "execution", type: "text", title: "Execution" },
        { name: "completion", type: "text", title: "Completion" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});

