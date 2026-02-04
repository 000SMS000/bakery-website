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

// dark mode toggle
const toggle = document.getElementById("darkToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// back to top
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
});

backBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// filter products
const filterBtns = document.querySelectorAll("[data-filter]");
const products = document.querySelectorAll(".product");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;

    products.forEach(product => {
      if (category === "all" || product.dataset.category === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// contact
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return;
  }

  successMsg.textContent = "Message sent successfully!";
  successMsg.style.color = "green";
  form.reset();
});