<template>
  <div class="main-layout">
    <div class="main-layout__desktop">
      <q-card>
        <q-card-section horizontal>
          <q-img class="card-main-image col-2 col-md-2" src="../../assets/images/memoji.webp" fit="contain" />
          <q-card-section class="col-10 col-md-10">
            <div class="card-description">
              <h3 class="card-title card-title--main">
                <b>Приложение "Ответь, please"</b>
              </h3>

              <h5 class="card-subtitle">
                Это мой pet-проект, который в данный момент находится в разработке. Проект представляет собой гибридное
                мобильное приложение, реализованное с помощью Apache Cordova, поэтому вашему вниманию доступна только
                мобильная веб-версия. Верстка мобильной версии выполнена в относительных единицах. Подробнее с файловой
                структурой можно ознакомиться в README.md.
              </h5>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="main-layout__container">
      <div id="content" class="main-layout__content">
        <Loader v-if="IsGeneralLoading" />

        <router-view v-slot="{ Component }">
          <component :is="Component" :key="Component.name" />
        </router-view>
      </div>
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
  setup() {
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
