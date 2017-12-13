import Vue from 'vue'
import Widget from './Widget.vue'

export default class WasItHelpful {
    constructor (element, options) {
        this.options = Object.assign({}, this.defaultOptions, options)
        this.widget = new Vue({
          el: element,
          render: h => h(Widget, {
            props: {
                onSubmit: this.options.onSubmit
            }
          })
        })
    }

    get defaultOptions() {
        return {
            onSubmit (data) {
                console.log('WasItHelpful feedback was submitted', data);
            }
        }
    }
}

