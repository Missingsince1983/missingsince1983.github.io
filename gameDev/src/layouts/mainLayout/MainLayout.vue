<template>
  <div class="main-layout">
    <div class="main-layout__container">
      <Loader v-if="IsGeneralLoading" />

      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :key="Component.name"
        />
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue'
import { Loader } from '../../components'
import useController from './controller'
import './style.scss'

export default defineComponent({
  name: 'MainLayout',
  components: { Loader },
  setup () {
    const {
      IsGeneralLoading,
      onMountedCallback
    } = useController()

    onMounted(onMountedCallback)

    return {
      IsGeneralLoading
    }
  }
})
</script>
