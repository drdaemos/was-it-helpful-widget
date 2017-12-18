# was-it-helpful

> Simple Javascript widget based on Vue.js 2.x to gather feedback on knowledge base, guide and similar pages.

<img width="770" alt="2017-12-18 11 34 33" src="https://user-images.githubusercontent.com/1313693/34094690-ad6a4a02-e3e7-11e7-809b-2cd7e32a7f66.png">

<img width="768" alt="2017-12-18 11 36 29" src="https://user-images.githubusercontent.com/1313693/34094703-c180985c-e3e7-11e7-8254-14e60cd1fa64.png">

## Usage

Download `dist/build.js` file or use the CDN link and embed the script via `script` tag:

``` html
<script src="https://unpkg.com/was-it-helpful@latest/dist/build.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function(event) {
  if (document.querySelector('#was-it-helpful')) {
    new WasItHelpful('#was-it-helpful', {onSubmit: function(data) {
      // Some code to submit the answer somewhere
      // the "data" parameter contains "helpful" boolean field and the "message" string field
    });
  }
});
</script>

<div id="was-it-helpful"></div>
```

## Configuration

Here is the example of fully configured widget. The constructor accepts the wrapper element selector and the configuration object:

```
new WasItHelpful('#was-it-helpful', {
    labels: {
        "question_text": "Was this article helpful?",
        "answer_yes": "Yes",
        "answer_no": "No",
        "sorry_text": "Sorry about that! How can we improve it?",
        "submit_btn": "Send feedback",
        "thank_you": "Thanks!"
    },
    onSubmit: function (data) {
        $.post('https://webhook.example.com', {
            'subject': 'Page title',
            'url': 'http://page.url.com',
            'helpful': data.helpful ? '1' : '0',
            'message': data.message
        })
    }
});
```

The configuration object may contain these fields:

| Field key | Field description |
| --------- | :---------------- |
| `labels` | `labels` field contains a key-value object of the labels used in the widget output. You can provide custom wordings or translations via this field (the presented example contains the default values) |
| `onSubmit`| `onSubmit` is the callback executed on the "Yes" click or "No" -> "Send feedback" form completion. The callback will be called with the object of the user answers: <ul><li>`helpful` field contains boolean Yes\No answer</li><li>`message` contains optional feedback message</li> |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
