export default {
  changeCity (state, city) {
    state.city = city
    // localStorage 在隐形模式或是关闭了本地存储的功能，有可能会抛出异常
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
