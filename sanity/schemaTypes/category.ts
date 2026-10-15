import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { TagIcon } from "@sanity/icons/Tag";

export const category = defineType({
  name: "category",
  title: "カテゴリー",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "カテゴリー名",
      description: "サイトの絞り込みボタンにこのまま表示されます（例: Production）",
      type: "string",
      validation: (rule) => rule.required().max(40),
    }),
    orderRankField({ type: "category" }),
  ],
});
