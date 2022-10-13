<template>
  <div class="flex flex-col gap-y-4">
    <div class="flex justify-center gap-x-3 border p-2" v-if="editor">
      <button @click.prevent="addLayout">addLayout</button>
      <button
        @click.prevent="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        bold
      </button>
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import Layout from "../plugins/layout";
import StarterKit from "@tiptap/starter-kit";

export default {
  components: {
    EditorContent,
  },
  props: {
    content: {},
  },
  data() {
    return {
      editor: null,
      value: this.content,
    };
  },
  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [StarterKit, Layout],
      onUpdate: () => {
        console.log(this.editor.getHTML());
        this.value = this.editor.getHTML();
      },
    });
  },
  methods: {
    addLayout() {
      this.editor.chain().focus().setLayout().run();
    },
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>
<style>
.ProseMirror {
  border: 1px solid #efefef;
  padding: 4px;
}
</style>
