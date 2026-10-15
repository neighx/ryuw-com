import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { PlayIcon } from "@sanity/icons/Play";
import { TagIcon } from "@sanity/icons/Tag";

// Both lists are drag-and-drop sortable; that order is the order on the site.
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Ryuw 管理画面")
    .items([
      orderableDocumentListDeskItem({
        type: "work",
        title: "作品（ドラッグで並べ替え）",
        icon: PlayIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "category",
        title: "カテゴリー",
        icon: TagIcon,
        S,
        context,
      }),
    ]);
