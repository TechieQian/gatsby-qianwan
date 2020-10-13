//import "whatwg-fetch" - polyfills has some error when used in Gatsby.

export default {
  postForm: function(data) {
    return fetch(
      "https://qtb3jd3vrl.execute-api.us-east-2.amazonaws.com/prod/forward_form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then(() => {
      // Hard-coding it for now!
      const resumeUrl =
        "https://s3.us-east-2.amazonaws.com/qianwan.dev/Qian_Wan_0720.docx"
      https: window.open(resumeUrl)
    })
  },
}
