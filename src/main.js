import Vue from 'vue'
import Widget from './Widget.vue'

export default class WasItHelpful {
    constructor (element, options) {
        this.options = Object.assign({}, this.defaultOptions, options)
        this.widget = new Vue({
          el: element,
          render: h => h(Widget, {
            props: {
                onSubmit: this.options.onSubmit,
                labels: this.options.labels
            }
          })
        })
    }

    get defaultOptions() {
        return {
            labels: {
                "question_text": "Was this article helpful?",
                "answer_yes": "Yes",
                "answer_no": "No",
                "sorry_text": "Sorry about that! How can we improve it?",
                "submit_btn": "Send feedback",
                "thank_you": "Thanks!"
            },
            onSubmit (data) {
                console.log('WasItHelpful feedback was submitted', data);
            }
        }
    }
}

