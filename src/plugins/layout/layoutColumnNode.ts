import { mergeAttributes, Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-2";
import LayoutColumnComponent from "./LayoutColumnComponent.vue";

export interface LayoutColumnOptions {
  allowBase64: boolean;
  layout: string;
  HTMLAttributes: Record<string, any>;
}

export const LayoutColumnNode = Node.create<LayoutColumnOptions>({
  name: "layoutColumnNode",
  group: "layoutNode",
  content: "inline*",

  parseHTML() {
    return [
      {
        tag: "layout-column",
      },
    ];
  },

  addAttributes() {
    return {
      style: {
        default: { flexBasis: Math.round(100 / 3) + "%" },
      },
      width: {
        default: "50%",
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["layout-column", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return VueNodeViewRenderer(LayoutColumnComponent);
  },

  addCommands() {
    return {};
  },
});
