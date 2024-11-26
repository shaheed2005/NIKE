const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Update product details
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Update color options
    currentProductColors.forEach((color, colorIndex) => {
      if (choosenProduct.colors[colorIndex]) {
        color.style.backgroundColor = choosenProduct.colors[colorIndex].code;
        color.style.display = "block"; // Ensure the color is visible
      } else {
        color.style.display = "none"; // Hide unused color elements
      }
    });
  });
});

// Update product image based on selected color
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// Handle size selection
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Checkout process
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

function showCheckoutMessage() {
  const checkoutMessage = document.getElementById("checkoutMessage");
  checkoutMessage.style.display = "block"; // Display the checkout message
}

function submitCheckout(event) {
  event.preventDefault(); // Prevent form submission
  showCheckoutMessage(); // Show confirmation message
  payment.style.display = "none"; // Hide the payment form
}

// Add event listener for checkout form submission
const checkoutForm = document.getElementById("checkout");
checkoutForm.addEventListener("submit", submitCheckout);

// Handle "Buy Now" button click
productButton.addEventListener("click", () => {
  payment.style.display = "flex"; // Show the payment form
});

// Handle closing the payment form
close.addEventListener("click", () => {
  payment.style.display = "none"; // Hide the payment form
});

// Close confirmation message
const closeMessageButton = document.querySelector(".closeMessage");
closeMessageButton.addEventListener("click", () => {
  const confirmationMessage = document.querySelector(".confirmationMessage");
  confirmationMessage.style.display = "none"; // Hide the confirmation message
});



// Function to display the checkout form
function showCheckoutForm() {
    const checkoutForm = document.getElementById("checkoutForm");
    checkoutForm.style.display = "block"; // Show the checkout form
  }
  
  // Function to close the checkout form
  function closeCheckoutForm() {
    const checkoutForm = document.getElementById("checkoutForm");
    checkoutForm.style.display = "none"; // Hide the checkout form
  }
  
  // Function to handle checkout form submission
  function submitCheckout(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Logic for successful checkout can go here (e.g., API calls)
  
    // Hide the checkout form and display the success message
    closeCheckoutForm();
    showCheckoutMessage();
  }
  
  // Function to display the checkout success message
  function showCheckoutMessage() {
    const checkoutMessage = document.getElementById("checkoutMessage");
    checkoutMessage.style.display = "block"; // Show success message
  }
  
  // Function to close the checkout success message
  function closeCheckoutMessage() {
    const checkoutMessage = document.getElementById("checkoutMessage");
    checkoutMessage.style.display = "none"; // Hide success message
  }
  