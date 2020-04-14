/***
 * 节流函数封装
 * @param func 输入完成的回调函数
 * @param delay 延迟时间
 */
export function debounce(func, delay) {
  // console.log(func,delay);
  /*输出结果ƒ (newQuery) {
   _this.$store.dispatch('grabble', newQuery); //传入最新的值延迟一秒发送请求
   } ，500     因为func它接收的是函数   */
  let timer
  return (...args) => {
    // console.log(args);
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(null, args)
      // console.log(this);
      // console.log(args,'最新的value值');
    }, delay)
  }
}
