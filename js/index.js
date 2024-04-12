// SIGN UP AND JOIN NOW BUTTONS

// Get the modal elements
let signUpModal = document.getElementById("signUpModal");
let joinNowModal = document.getElementById("joinNowModal");

// Get the button that opens the modals
let signUpBtn = document.getElementById("signUpBtn");
let joinNowBtn = document.getElementById("joinNowBtn");

// Get the <span> element that closes the modal
let closeSignModal = signUpModal.querySelector(".close");
let closeJoinModal = joinNowModal.querySelector(".close");

// When the user clicks the buttons, open the modal
signUpBtn.onclick = function() {
    signUpModal.style.display = "block";
}
joinNowBtn.onclick = function() {
    joinNowModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSignModal.onclick = function() {
    signUpModal.style.display = "none";
}
closeJoinModal.onclick = function() {
    joinNowModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    if (event.target == joinNowModal) {
        joinNowModal.style.display = "none";
    }
}

// BOOK A CLASS BUTTON

  // Get the modal element
  let bookClassModal = document.getElementById("bookClassModal");

  // Get the button that opens the modal
  let bookClassBtn = document.getElementById("bookClassBtn");

  // Get the <span> element that closes the modal
  let closeBookClassModal = bookClassModal.querySelector(".close");

  // When the user clicks the button, open the modal
  bookClassBtn.onclick = function() {
      bookClassModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeBookClassModal.onclick = function() {
      bookClassModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == bookClassModal) {
          bookClassModal.style.display = "none";
      }
  }
  
  // MEAL PLAN SEARCH FORM
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form[role='search']");
    const cards = document.querySelectorAll(".card");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const searchTerm = form.querySelector("input[type='search']").value.toLowerCase();

      cards.forEach(function(card) {
        const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();
        if (cardTitle.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  
  

const BASE_URL = 'http://localhost:3000/mealPlans'


document.addEventListener('DOMContentLoaded', () =>{
    fetchMeals();
})


function fetchMeals() {
    fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    .then((res) => res.json())
    .then((meals) => {
        meals.forEach((meal) => renderMeal(meal));
    })
    .catch((err) => console.log(err));
}

function renderMeal(meal) {
    const mealsContainer = document.querySelector('#meals');
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('card-img-top', 'mt-2');
    image.height = 200;
    image.src = meal.image;
    image.alt = meal.goal;

    // append the image to the parent div
    parentDiv.appendChild(image);

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    // movie title
    const title = document.createElement('h5')
    title.className = 'card-title'
    title.innerText = meal.title

    // movie description
    const description = document.createElement('p')
    description.className = 'card-text'
    description.innerText = meal.description;

    // Button
    const button = document.createElement('button')
    button.classList.add('btn', 'btn primary')
    button.innerText = 'Join Plan'


    cardBody.append(title, description, button);

    // append card body to parent div
    parentDiv.appendChild(cardBody)



    // append each card to the meal container
    mealsContainer.appendChild(parentDiv);

  
}