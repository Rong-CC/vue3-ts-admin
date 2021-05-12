
import { watch, ref, reactive, Ref, toRefs } from "vue"
// import { Book } from '../types'

export interface PageOption {
  pageSize?: number
}

export function usePages<T>(watchCallback: () => any, pageOption?: PageOption) {
  const { pageSize = 10 } = pageOption || {}
  const rawData:any = ref([])
  const data:any = ref([])

  // 提供给el-pagination组件的参数
  const bindings = reactive({
    current: 1,
    currentChange: (currnetPage: number):void => {
    data.value = sliceData(rawData.value, currnetPage)
    }
  })

  const sliceData = (rawData: any, currentPage: number):any => {
    return rawData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  }
  
  watch(watchCallback, values => {
    rawData.value = values
    bindings.currentChange(1)
  })

  return {
    data,
    bindings
  }
}