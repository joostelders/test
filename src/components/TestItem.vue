<template>
  <div class="flex flex-col gap-y-4">
    <div><button @click.prevent="save">save</button></div>
    <div class="flex justify-center gap-x-3 border p-2" v-if="editor">
      <button @click.prevent="addImage">addImage</button>
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
import Image from "../plugins/image";
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
      extensions: [StarterKit, Image, Layout],
      onUpdate: () => {
        console.log(this.editor.getHTML());
        this.value = this.editor.getHTML();
      },
    });
  },
  methods: {
    addImage() {
      const url =
        "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800";
      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run();
      }
    },
    addLayout() {
      this.editor.chain().focus().setLayout().run();
    },
    save() {
      fetch("http://core.local.com/v0.1/content/values/5db1bf93923279601c6a37f7", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: this.value }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("saved!");
        });
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
