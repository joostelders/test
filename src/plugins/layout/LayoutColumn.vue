<template>
  <div data-layout-column data-column-width="50" :style="columnStyle" contenteditable="false">
    <div :contenteditable="true">
      <node-view-content class="content" />
    </div>
  </div>
</template>

<script>
import { NodeViewContent, nodeViewProps } from "@tiptap/vue-2";
export default {
  components: { NodeViewContent },
  props: {
    nodeViewProps,
    columnStyle: {},
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
