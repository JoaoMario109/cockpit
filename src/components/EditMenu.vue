<template>
  <WidgetHugger
    :position="initialPosition"
    :size="initialSize"
    :snap-to-grid="false"
    :allow-resizing="false"
    :allow-ordering="false"
    :allow-deleting="false"
  >
    <v-card class="pa-3 card">
      <v-card-title>Edit menu</v-card-title>
      <div v-if="selectedLayer !== undefined">
        <v-card-subtitle class="mt-4">Layer</v-card-subtitle>
        <div class="d-flex align-center ma-2">
          <v-select
            v-model="selectedLayer"
            :items="availableLayers"
            density="compact"
            variant="outlined"
            no-data-text="No layers available."
            hide-details
          />
          <v-btn
            class="ml-2"
            icon="mdi-delete"
            size="small"
            rounded="lg"
            @click="deleteLayer"
          />
        </div>
        <v-card-subtitle class="mt-4">Widgets</v-card-subtitle>
        <template v-if="selectedLayer.widgets.length > 0">
          <li
            v-for="widget in selectedLayer.widgets"
            :key="widget.hash"
            class="pl-6"
          >
            {{ widget.component }}
          </li>
        </template>
        <p v-else class="pl-6">No widgets in layer.</p>
        <div class="d-flex align-center ma-3">
          <v-select
            v-model="selectedWidgetType"
            :items="availableWidgetTypes"
            density="compact"
            variant="outlined"
            hide-details
          />
          <v-btn
            class="ml-2"
            icon="mdi-plus"
            size="small"
            rounded="lg"
            @click="store.addWidget(selectedWidgetType, selectedLayer)"
          />
        </div>
      </div>
      <v-card-actions>
        <v-btn class="ma-1" @click="addLayer">Add new layer</v-btn>
        <v-switch
          class="ma-1"
          label="Grid"
          :model-value="showGrid"
          hide-details
          @change="emit('update:showGrid', !showGrid)"
        />
      </v-card-actions>
    </v-card>
  </WidgetHugger>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useWidgetManagerStore } from '@/stores/widgetManager'
import { type Layer, WidgetType } from '@/types/widgets'

import WidgetHugger from './WidgetHugger.vue'

const store = useWidgetManagerStore()

defineProps<{
  /**
   * To show or not the snapping grid on the background (model prop)
   */
  showGrid: boolean
}>()

const emit = defineEmits<{
  (e: 'update:showGrid', showGrid: boolean): void
}>()

const availableWidgetTypes = computed(() => Object.values(WidgetType))
const selectedWidgetType = ref<WidgetType>(availableWidgetTypes.value[0])
const selectedLayer = ref<Layer>(store.layers[0])
const initialSize = { width: 600, height: 450 }
const initialPosition = {
  x: (window.innerWidth - initialSize.width) / 2,
  y: (window.innerHeight - initialSize.height) / 2,
}

const availableLayers = computed(() =>
  store.layers.slice().map((layer) => ({
    title: layer.hash,
    value: layer,
  }))
)

const deleteLayer = (): void => {
  store.deleteLayer(selectedLayer.value)
  selectedLayer.value = store.layers[0]
}
const addLayer = (): void => {
  store.addLayer()
  selectedLayer.value = store.layers[0]
}
</script>

<style scoped>
.card {
  height: 95%;
  width: 95%;
}
</style>