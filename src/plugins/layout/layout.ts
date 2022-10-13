import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-2";
import LayoutComponent from "./LayoutComponent.vue";

export interface LayoutOptions {
  allowBase64: boolean;
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    layout: {
      /**
       * Add a layout
       */
      setLayout: (options: { layout: string }) => ReturnType;
      // unsetImage: () => ReturnType;
    };
  }
}

export const Layout = Node.create<LayoutOptions>({
  name: "vueComponent",
  group: "block",
  marks: "bold",
  content: "inline*",

  addAttributes() {
    return {
      layout: {
        default: "two_columns",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "vue-component",
      },
    ];
  },

  onUpdate() {
    console.log("update");
  },

  renderHTML({ HTMLAttributes }) {
    console.log("renderHTML");
    return ["vue-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    console.log("addNodeView");
    return VueNodeViewRenderer(LayoutComponent);
  },

  addCommands() {
    return {
      setLayout:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  // addInputRules() {
  //   return [
  //     nodeInputRule({
  //       find: inputRegex,
  //       type: this.type,
  //       getAttributes: (match) => {
  //         const [, , layout] = match;

  //         return { layout };
  //       },
  //     }),
  //   ];
  // },
});
