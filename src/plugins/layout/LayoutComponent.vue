<template>
  <node-view-wrapper :contenteditable="true" v-if="node">
    <div data-layout-section>
      <!-- <div :contenteditable="true" class="border p-5 m-5 w-full">
        <node-view-content class="content" />
      </div> -->

      <layout-column v-if="showFirstColumn" :columnStyle="columnStyle" />
      <layout-column v-if="showSecondColumn" :columnStyle="columnStyle" />
      <layout-column v-if="showThirdColumn" :columnStyle="columnStyle" />
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
import { NodeViewWrapper, nodeViewProps } from "@tiptap/vue-2";
import LayoutColumn from "./LayoutColumn.vue";
export default {
  components: { NodeViewWrapper, LayoutColumn },
  props: {
    nodeViewProps,
    // node: {
    //   type: Object,
    //   required: true,
    // },
    // updateAttributes: {
    //   type: Function,
    //   required: true,
    // },
  },
  data() {
    return {
      options: this.getOptions(),
    };
  },
  computed: {
    columnStyle() {
      return { flexBasis: Math.round(100 / this.numOfColumns) + "%" };
    },
    numOfColumns() {
      return 3;
    },
    selectedLayout() {
      return this.node.attrs.layout;
    },
    showFirstColumn() {
      return true;
    },
    showSecondColumn() {
      return ["two_columns", "three_columns"].includes(this.selectedLayout);
    },
    showThirdColumn() {
      return ["three_columns"].includes(this.selectedLayout);
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
