import { reactive } from 'vue'
import { useField } from './'
import { Form } from '../types/Form'

export function useForm (init:Form = {}): Form {
  const form = reactive({} as Form)

  for (const [key, value] of Object.entries(init)) {
    // eslint-disable-next-line
    /* @ts-ignore */
    form[key] = useField(value)
  }
  return form
}
