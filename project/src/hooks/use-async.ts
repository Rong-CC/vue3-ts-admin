import { ref, onMounted } from "vue"

export const useAsync = (func: () => Promise<any>) => {
  const loading = ref(false)

  onMounted(async () => {
    try {
      loading.value = true
      await func()
    } 
    // eslint-disable-next-line no-useless-catch
    catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  })

  return loading
}