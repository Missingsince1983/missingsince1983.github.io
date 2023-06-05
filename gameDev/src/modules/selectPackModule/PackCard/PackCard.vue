<template>
  <div
    :class="['pack-card', { 'pack-card--selected': isSelected }]"
    :style="pack.image ? `background-image: url(${pack.image})` : ''"
    @click="selectQuestionsPack"
  >
    <div
      v-if="isSelected"
      class="pack-card__select"
    />
    <div
      v-if="pack.tag"
      class="pack-card__tag"
    >
      {{ pack.tag }}
    </div>
    <div class="pack-card__title">
      {{ pack.title }}
    </div>
    <div class="pack-card__amount">
      {{ pack.amount }}
    </div>
    <!-- <block-button
      :text="pack.title"
      :click-handler="selectQuestionsPack"
      :is-selected="isSelected"
    />
    <block-subtitle :text="pack.description" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { QuestionPackType } from '../../../store/questions/types'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'PackCard',
  props: {
    pack: { type: Object as PropType<QuestionPackType>, required: true },
    isSelected: { type: Boolean, required: true }
  },
  setup (props) {
    const { selectQuestionsPack } = useController({
      pack: props.pack // eslint-disable-line
    })
    return { selectQuestionsPack }
  }
})
</script>
