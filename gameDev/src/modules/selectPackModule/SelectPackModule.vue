<template>
  <div class="select-pack-module">
    <navbar title="Пакеты" />

    <screen-section>
      <div class="select-pack-module__wrapper" :style="{ height: VisibleSpaceHeight + 'px' }">
        <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
          control-color="white" navigation class="select-pack-module__carousel">
          <q-carousel-slide v-for="(packs, i) in formatedPackList" :key="i" :name="i" class="select-pack-module__slide">
            <div class="select-pack-module__list">
              <pack-card v-for="pack in packs" :key="pack.id" :pack="pack" :is-selected="pack.id === SelectedPack?.id" />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </screen-section>

    <screen-section :is-bottom-section="true">
      <form-button text="Далее" :click-handler="continueStep" :is-disabled="!SelectedPack" :is-secondary="true" />
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, Navbar, FormButton } from 'src/components'
import { defineComponent } from 'vue'
import { useController } from './controller'
import PackCard from './PackCard/PackCard.vue'
import './style.scss'

export default defineComponent({
  name: 'RulesModule',
  components: { ScreenSection, FormButton, PackCard, Navbar },
  setup() {
    const { PacksList, continueStep, SelectedPack, formatedPackList, slide, VisibleSpaceHeight } = useController()
    return { PacksList, continueStep, SelectedPack, formatedPackList, slide, VisibleSpaceHeight }
  }
})
</script>
