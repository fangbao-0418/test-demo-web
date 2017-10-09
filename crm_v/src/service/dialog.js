import Vue from 'vue'
export default (Compoment, propsData) => {
  return new Promise(function (resolve, reject) {
    let Dialog = Vue.extend(Compoment)
    let dialog = new Dialog({
      propsData
    }).$mount()
    console.log(dialog)
    console.log(dialog.$once)
    document.body.append(dialog.$el)
    dialog.$once('done', res => resolve(res))
    dialog.$once('cancel', res => reject(res))
    dialog.$children[0].$once('close', res => {
      dialog.$destroy()
      document.body.removeChild(dialog.$el)
    })
  })
}
