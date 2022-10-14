<template>
  <node-view-wrapper>
    <h2>
      Layout: <strong>{{ node.attrs.layout }}</strong>
    </h2>
    <div :contenteditable="true" v-if="node">
      <node-view-content data-layout-section :layout="node.attrs.layout" />
    </div>
    <div class="flex gap-x-3 my-2">
      <button
        v-for="(layout, index) in options"
        :key="index"
        @click.prevent="setLayout(layout)"
        :class="[selectedLayout === layout && 'bg-green-100']"
      >
        {{ layout }}
      </button>
      <button @click.prevent="deleteNode">delete</button>
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from "@tiptap/vue-2";
export default {
  components: { NodeViewWrapper, NodeViewContent },
  props: {
    nodeViewProps,
    node: {
      type: Object,
      required: true,
    },
    editor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      options: this.getOptions(),
    };
  },
  computed: {
    selectedLayout() {
      return this.node.attrs.layout;
    },
  },
  methods: {
    getOptions() {
      return ["two_columns", "three_columns"];
    },
    setLayout(layout) {
      this.updateAttributes({
        layout: layout,
      });
    },
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
  padding: 12px;
  box-sizing: border-box;
}
div[data-layout-column] {
  border: 1px solid var(--ds-border, rgba(9, 30, 66, 0.13));
  border-radius: 4px;
}

.content {
  min-height: 48px;
  text-align: left;
}
</style>
