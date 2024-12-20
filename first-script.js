
                                            /*ADAPTIVE NAVBAR*/
     function myFunction() {
        var x = document.getElementById("myNav");
            if (x.className === "nav") {
            x.className += " responsive";
            } 
            else {
                x.className = "nav";
            }
     }
                  /*                          
        var xmlhttp = new XMLHttpRequest();
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function parseJson(json) {

      var usdValue = "$" + json["bpi"]["USD"]["rate"];
      
      document.getElementById("bit").innerText = usdValue 
}*/
        /*COIN PRICES*/
  let bs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
        let es = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
        let ds = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
            let bitPriceElement = document.getElementById('bit');
            let ethPriceElement = document.getElementById('eth');
            let dogPriceElement = document.getElementById('dog');

        bs.onmessage = (event) => {
                let bstockObject = JSON.parse(event.data);               
            bitPriceElement.innerHTML = parseFloat(bstockObject.p).toFixed(2);
            };
            es.onmessage = (event) => {
                let estockObject = JSON.parse(event.data);               
                ethPriceElement.innerHTML = parseFloat(estockObject.p).toFixed(2);
            };
            ds.onmessage = (event) => {
                let dstockObject = JSON.parse(event.data);               
                dogPriceElement.innerHTML = parseFloat(dstockObject.p).toFixed(2);
            };


// When the user clicks on the button, scroll to the element of the document
function Home() {
  document.documentElement.scrollTop = 0;
}

function Stats() {
  document.documentElement.scrollTop = 860;
}
    function Login() {
  document.documentElement.scrollTop = 1800;
}    



                                    //LOGIN FORM PASS from local github json file.
   /*
   var xmlhttp = new XMLHttpRequest();
    var url = "https://hubilya.github.io/NCrypted/db.json";
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function parseJson(json) {
      var name = json["name"];
      var pass = json["password"];
        
            const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username == name && password == pass) {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
}
*/
                                //SIGNIN/LOGIN FORM PASS from json.placeholder.
            function New() {

      var name = document.getElementById("username").value;
      var pass = document.getElementById("password").value;

if(name == "" || pass == ""){
    alert("Please FILLOUT the signin form")
}else{


      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            username: name,
            password: pass,
          }),
          headers: {
            "Content-type": "application/json"
          }
        })  
        .then(response => response.json())
        .then(json => {alert("Your login now:  " + name +  "       \n"   +  "Password:  " + pass)
          console.log('response: ' + JSON.stringify(json));

        })

}



        //login auth
                        const loginForm = document.getElementById("login-form");
                        const loginButton = document.getElementById("login-form-submit");
                        const loginErrorMsg = document.getElementById("login-error-msg");
                        const loginokMsg = document.getElementById("login-ok-msg");

                        loginButton.addEventListener("click", (e) => {
                            e.preventDefault();
                            const username = loginForm.username.value;
                            const password = loginForm.password.value;

                             if (username === name && password === pass) {

                                 /*COIN PRICES*/
      


                                loginokMsg.style.opacity = 1;
                                setTimeout(function(){
                                loginokMsg.style.opacity =  location. reload() ;
                                }, 2000);
                               window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
                                

                            } 

                            else {
                                loginErrorMsg.style.opacity = 1;
                                setTimeout(function(){
                                loginErrorMsg.style.opacity = 0;
                                }, 1000);

                            }

                        })


}




