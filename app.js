let captchaChecked = false;
function beforeSubmit(event){
    if(captchaChecked) {
        let outputDate = document.querySelector(".outputDate");
        let inputDate = document.querySelector(".inputDate");

        let formattedDate = new Date(inputDate.value).toLocaleDateString(
          "en-IN"
        );
        outputDate.value = formattedDate;
    }
    else{
        alert("Please check the captcha");
        event.event.preventDefault();
    }
}

function captchasuccess() {
    this.captchaChecked = true;
}