
let Num = document.querySelector("span");
let Advice = document.querySelector("q");

let click = document.querySelector("div");
    
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://api.adviceslip.com/advice");
    myRequest.send();
 
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            let jsData = JSON.parse(this.responseText);

            let ID = document.createTextNode(jsData["slip"].id);
            let Text = document.createTextNode(jsData["slip"].advice);

                Num.textContent = "";
                Advice.textContent = "";

                Num.appendChild(ID);
                Advice.appendChild(Text);
       };
    };

click.onclick = function () {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://api.adviceslip.com/advice");
    myRequest.send();

    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            let jsData = JSON.parse(this.responseText);

            let ID = document.createTextNode(jsData["slip"].id);
            let Text = document.createTextNode(jsData["slip"].advice);

                Num.textContent = "";
                Advice.textContent = "";

                Num.appendChild(ID);
                Advice.appendChild(Text);
       };
    };
};
