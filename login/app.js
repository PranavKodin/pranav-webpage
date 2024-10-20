const signUpButton = document.getElementById('signUp');
        const loginButton = document.getElementById('login');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });

        loginButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

let frm = document.querySelector("form");

frm.addEventListener("submit", function(event) {
        event.preventDefault();
    
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#pass");
    
    alert(`HI ${name.value} for your email id ${email.value} password is ${password.value}`);
    });

    let password = document.querySelector("#pass");

    password.addEventListener("input", function() {
        const length = password.value.length;
    
        if (length === 0) {
            this.style.boxShadow = ""; 
        } else if (length < 4) {
            this.style.boxShadow = "0px 5px 15px red"; 
        } else if (length <= 6) {
            this.style.boxShadow = "0px 5px 15px yellow"; 
        } else {
            this.style.boxShadow = "0px 5px 15px green";
        }
    });
    