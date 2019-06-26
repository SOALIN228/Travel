export default {
  changeCity (ctx, city) {
    ctx.commit('changeCity', city) // 调用 mutations 中的 changeCity
  }
}
