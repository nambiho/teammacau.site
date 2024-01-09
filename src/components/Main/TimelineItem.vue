<template>
  <div class="timeline-item">
    <svg 
    :width="data.circle.size.width"
    :height="data.circle.size.height"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        :cx="data.circle.size.cx"
        :cy="data.circle.size.cy"
        :r="data.circle.size.r"
        :stroke="data.circle.stroke"
        fill="transparent"
        :stroke-width="data.circle.size.strokeWidth" />
    </svg>
    <div class="timeline-contents">TEST</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const default_data = [
  {'2021': {
    '1': {
      '1': [{'left': 'description 1'}, {'left': 'description 2'}, {'right': 'description 3'}],
      '2': [{'left': 'description 1'}, {'left': 'description 2'}, {'right': 'description 3'}]
    },
    '4': {
      '1': [{'left': 'description 1'}, {'left': 'description 2'}, {'right': 'description 3'}],
      '2': [{'left': 'description 1'}, {'left': 'description 2'}, {'right': 'description 3'}]
    }
  }}
]

const defualt_circle = {
  size: {
    r: 10,
    strokeWidth: 5
  },
  stroke: 'red'
}

export default defineComponent({
  name: 'TimeLineItem',
  setup () {
    const circle = (function () {
      const { size, stroke } = defualt_circle
      const stWidth = size.strokeWidth / 2,
      width = (size.r + stWidth) * 2,
      height = (size.r + stWidth) * 2,
      cx = size.r + stWidth,
      cy = size.r + stWidth

      const circle = { size: { width, height, cx, cy, ...size }, stroke: stroke }
      return circle
    })()

    const data = {
      circle,
    }

    return {
      data,
      default_data
    }
  }
})
</script>

<style lang="scss">
  .timeline-contents {
    display: inline;
  }
</style>