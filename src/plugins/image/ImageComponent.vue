<template>
  <node-view-wrapper>
    <div>
      <h2>Hello from our Image Component</h2>
      <div>
        <button @click.prevent="deleteImage">Delete image</button>
      </div>
      <img :src="node.attrs.src" />
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper } from "@tiptap/vue-2";
export default {
  components: { NodeViewWrapper },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteImage() {
      this.deleteNode();
    },
  },
};
</script>

<style></style>
