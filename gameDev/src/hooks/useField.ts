import { ref, reactive, watch } from 'vue'
import { FieldForm, ErrorForm } from '../types/Form'

export function useField (field: FieldForm) {
  const valid = ref(true)
  const value = ref(field.value)

  const errors = reactive({} as ErrorForm)

  const reassign = (val: string) => {
    valid.value = true
    Object.keys(field.validators ?? {}).map(name => {
      const isValid = field.validators[name](val)
      errors[name] = !isValid
      if (!isValid) valid.value = false
      return name
    })
  }

  watch(value, newValue => {
    reassign(newValue)
  })

  reassign(field.value)

  return { value, valid, errors }
}
