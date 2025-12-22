import { defineType, defineField } from "sanity";

export default defineType({
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Government", value: "government" },
          { title: "Financial", value: "financial" },
          { title: "Telecommunications", value: "telecommunications" },
          { title: "Aviation", value: "aviation" },
          { title: "Corporate", value: "corporate" },
          { title: "Other", value: "other" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "logo",
    },
  },
});

