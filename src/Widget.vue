<template>
<div class="was-it-helpful-wrapper" :class="classes">
    <div class="give" v-show="!thanksVisible">
        <div class="give__answers" v-show="isHelpful === null">
            <span class="give__title">{{ labels.question_text }}</span>
            <div class="give-answers">
                <a href="#" @click.prevent="wasHelpful">{{ labels.answer_yes }}</a>
                <a href="#" @click.prevent="wasNotHelpful">{{ labels.answer_no }}</a>
            </div>
        </div>
        <form class="give-answers__why appears" v-show="isHelpful === false" @submit.prevent="sendFeedback">
            <label for="why-not">{{ labels.sorry_text }}</label>
            <textarea v-model="feedbackMsg" id="why-not" name="why-not" required=""></textarea>
            <button>{{ labels.submit_btn }}</button>
        </form>
    </div>
    <div class="give ty appears" v-show="thanksVisible">
        <span class="title--mini">
            {{ labels.thank_you }} <img src="./assets/tick_ok.gif">
        </span>
    </div>
</div>
</template>

<script>
export default {
  name: 'was-it-helpful',
  props: ['onSubmit', 'labels'],
  data () {
    return {
      isHelpful: null,
      feedbackMsg: '',
      feedbackIsSent: false
    }
  },
  computed: {
    thanksVisible () {
      return this.feedbackIsSent
    },
    classes () {
      return {}
    }
  },
  methods: {
    wasHelpful () {
      this.isHelpful = true
      this.sendFeedback()
    },
    wasNotHelpful () {
      this.isHelpful = false
    },
    sendFeedback () {
      this.onSubmit({
        helpful: this.isHelpful,
        message: this.feedbackMsg
      })
      this.feedbackIsSent = true;
    }
  }
}
</script>

<style lang="css" scoped>
.was-it-helpful-wrapper {
    border: 1px solid #E7E7E7;
    padding: 2em 2em;
    transition: opacity .2s ease;
    margin-top: 3em;
    margin-bottom:3em;
}
.was-it-helpful-wrapper.is-busy {
    opacity: .5;
    pointer-events: none;
}
.was-it-helpful-wrapper .give {
    display: block;
    text-align: center;
    margin: 0 auto;
}
.was-it-helpful-wrapper .give.ty {
    text-align: center;
}
.was-it-helpful-wrapper .give.ty img{
    vertical-align: middle;
    display: inline-block;
    margin-top: -4px;
    margin-left: 10px;
    border: none;
    margin-bottom: 0!important;
}
.give__title {
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    margin: 0 10px;
    display: inline-block;
}
.give-answers {
    display: inline-block;
    text-align: right;
}
.give-answers a {
    margin-right: 1em;
    text-transform: uppercase;
    font-weight: normal;
}

.give-answers__why {
    display: block;
}

.give-answers__why label {
    font-weight: 500;
    display: block;
    margin: 0 0 12px;
}

.give-answers__why textarea {
    border: 1px solid #E7E7E7;
    padding: 5px;
    width: 400px;
    height: 60px;
    display: block;
    margin: 0 auto;
    outline: none;
    border-radius: 3px;
}

.give-answers__why textarea:focus {
    border-color: #CCC;
}

.give-answers__why button {
    display: inline-block;
    padding: 10px 30px;
    margin: 20px 0 0;
    color: #8bcbca;
    background-color: transparent;
    border: 2px solid #8bcbca;
    border-radius: 3px;
    transition: background .2s ease-out;
    outline: none!important;
}

.give-answers__why button:hover {
    background-color: #8bcbca;
    color: #FFF;
}

.appears {
    -webkit-animation: appears 1s 1;
    -moz-animation: appears 1s 1;
    animation: appears 1s 1
}

@-webkit-keyframes appears {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@-moz-keyframes appears {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes appears {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
