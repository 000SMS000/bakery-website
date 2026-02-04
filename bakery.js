window.onload = function() {
    console.log("Welcome to The Artisan Bakery!");
};

var mydiv = document.getElementById('t');

if (mydiv) {
    mydiv.onmouseover = function() {
        this.style.opacity = "0.7"; 
        this.style.cursor = "pointer";
    };

    mydiv.onmouseout = function() {
        this.style.opacity = "1.0";
    };
}

var myBtn = document.getElementById('heroBtn');

if (myBtn) {
    myBtn.onclick = function() {
        alert("Thank you! Your order journey starts now.");
    };
}

var myinput = document.getElementById('i');

if (myinput) {
   
    myinput.onkeypress = function() {
        this.style.backgroundColor = "#F1E8D9";
    };

    
    myinput.onchange = function() {
        alert("Value changed to: " + this.value);
    };
}

const toggle = document.getElementById("darkToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}