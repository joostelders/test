import { mergeAttributes, Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-2";
import LayoutComponent from "./LayoutComponent.vue";

export interface LayoutOptions {
  allowBase64: boolean;
  layout: string;
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    layout: {
      setLayout: (options: { layout: string }) => ReturnType;
    };
  }
}

export const LayoutNode = Node.create<LayoutOptions>({
  name: "layoutNode",
  group: "block",
  marks: "bold",
  content: "layoutColumnNode*",

  addAttributes() {
    return {
      layout: {
        default: "three_columns",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "layout-node",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["layout-node", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return VueNodeViewRenderer(LayoutComponent);
  },

  getDefaultContent() {
    return [{ type: "layoutColumnNode" }];
  },

  addCommands() {
    return {
      setLayout:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: Array(3).fill({
              type: "layoutColumnNode",
            }),
          });
        },
    };
  },
});
