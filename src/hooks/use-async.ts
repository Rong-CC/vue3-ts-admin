// import { ref, onMounted } from "vue";

// const useAsync = (func: () => Promise<any>) => {
//   const loading = ref(false);

//   onMounted(async () => {
//     try {
//       loading.value = true;
//       await func();
//     } catch (error) {
//       // eslint-disable-next-line no-useless-catch
//       throw error;
//     } finally {
//       loading.value = false;
//     }
//   });

//   return loading;
// };

// export default useAsync;
