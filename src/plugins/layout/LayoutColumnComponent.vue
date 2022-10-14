<template>
  <node-view-wrapper :contenteditable="true" data-layout-column :style="style">
    <div class="border m-2 p-2">
      <h2>{{ style }} - {{ getPos() }} - {{ layout }}</h2>
    </div>
    <div :contenteditable="true">
      <node-view-content class="content" />
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from "@tiptap/vue-2";
export default {
  components: { NodeViewContent, NodeViewWrapper },
  computed: {
    style() {
      return { flexBasis: this.node.attrs.width };
    },
  },
  props: {
    nodeViewProps,
    layout: {},
  },
};
</script>

<style>
* > [data-layout-section] {
  position: relative;
  display: flex;
  flex-direction: row;
}

div[data-layout-section],
div[data-layout-column] {
  flex: 1 1 0%;
  flex-basis: 0%;
  min-width: 0px;
  border: 1px solid var(--ds-border, rgba(9, 30, 66, 0.13));
  border-radius: 4px;
  padding: 12px;
  box-sizing: border-box;
}
</style>
