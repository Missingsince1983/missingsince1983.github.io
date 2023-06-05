import { ref } from 'vue'

export const useController = () => {
  const list = ref(true)
  return {
    list
  }
}
