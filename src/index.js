// index.js
const menu = document.getElementById("drink-menu")
const div = document.getElementById("ramen-detail")
const imgDetail = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRestaurant = document.querySelector(".restaurant")
const ramenRating = document.querySelector("span")
const ramenComment = document.querySelector("p#comment-display")
const ramenForm = document.getElementById("new-ramen")
const ingredient = document.getElementById("ingred-list")
const measurement = document.getElementById("measure-list")
const header = document.getElementById("header")


header.addEventListener("mouseover", () =>{
  header.style.color = "RGB(195, 42, 255)"
})

const main = (data) => {
  fetch('http://localhost:3000/drinks')
  .then((response) => response.json())
  .then((data) => data.forEach(displayRamens))
  // ramenForm.addEventListener('submit', addSubmitListener)
  console.log(data)
}


const displayRamens = (data) => {
  // Add code
  const ramenAnchor = document.createElement('A')
  ramenAnchor.id = `ramenPic${data.idDrink}`
  ramenAnchor.href = `#`
  const ramenImg = document.createElement("IMG")
  ramenImg.src = data.strDrinkThumb
  menu.append(ramenAnchor)
  ramenAnchor.append(ramenImg)
  ramenAnchor.addEventListener('click', () => handleClick(data))
};

// Callbacks
const handleClick = (data) => {
  // Add code
  imgDetail.src = data.strDrinkThumb
  // ramenName.textContent = data.strDrink
  ramenRestaurant.textContent = data.strDrink
  ramenRating.innerHTML = data.strDrink
  ramenComment.textContent = data.strInstructions
  imgDetail.id = data.idDrink
  console.log(data)
  renderLists(data)
}



// function renderLists(data){
//   if(data.strIngredient7 !== null){
//     ingredient.innerHTML = `${data.strIngredient1}, ${data.strIngredient2}, ${data.strIngredient3}, ${data.strIngredient4}, ${data.strIngredient5}, ${data.strIngredient6}, ${data.strIngredient7} `
//   } else if(data.strIngredient6 !== null){
//       ingredient.innerHTML = `${data.strIngredient1}, ${data.strIngredient2}, ${data.strIngredient3}, ${data.strIngredient4}, ${data.strIngredient5}, ${data.strIngredient6}`
//   } else if(data.strIngredient4 !== null){
//       ingredient.innerHTML = `${data.strIngredient1}, ${data.strIngredient2}, ${data.strIngredient3}, ${data.strIngredient4}`
//   } else if(data.strIngredient3 !== null){
//       ingredient.innerHTML = `${data.strIngredient1}, ${data.strIngredient2}, ${data.strIngredient3}`
//   }
// }


//Create Lists from ingredients and measurements
function renderLists(data){
  if(data.strIngredient7 !== null){
    ingredient.innerHTML = `
    <ul>
      <li>${data.strIngredient1}</li><li>${data.strIngredient2}</li><li>${data.strIngredient3}</li><li>${data.strIngredient4}</li><li>${data.strIngredient5}</li><li>${data.strIngredient6}</li><li>${data.strIngredient7}</li>
    </ul>
    `
    measurement.innerHTML = `
    <ul>
      <li>${data.strMeasure1}</li><li>${data.strMeasure2}</li><li>${data.strMeasure3}</li><li>${data.strMeasure4}</li><li>${data.strMeasure5}</li><li>${data.strMeasure6}</li><li>${data.strMeasure7}</li>
    </ul>
    `
  } else if(data.strMeasure6 !== null){
      ingredient.innerHTML = `
       <ul>
        <li>${data.strIngredient1}</li><li>${data.strIngredient2}</li><li>${data.strIngredient3}</li><li>${data.strIngredient4}</li><li>${data.strIngredient5}</li><li>${data.strIngredient6}</li>
      </ul>
      `
      measurement.innerHTML = `
      <ul>
        <li>${data.strMeasure1}</li><li>${data.strMeasure2}</li><li>${data.strMeasure3}</li><li>${data.strMeasure4}</li><li>${data.strMeasure5}</li><li>${data.strMeasure6}</li>
      </ul>
      `

  } else if(data.strMeasure4 !== null){
      ingredient.innerHTML = `
      <ul>
        <li>${data.strIngredient1}</li><li>${data.strIngredient2}</li><li>${data.strIngredient3}</li><li>${data.strIngredient4}</li>
      </ul>
      `
      measurement.innerHTML = `
      <ul>
        <li>${data.strMeasure1}</li><li>${data.strMeasure2}</li><li>${data.strMeasure3}</li><li>${data.strMeasure4}</li>
      </ul>
      `

  } else if(data.strMeasure3 !== null){
      ingredient.innerHTML = `
      <ul>
        <li>${data.strIngredient1}</li><li>${data.strIngredient2}</li><li>${data.strIngredient3}</li>
      </ul>
      `
      measurement.innerHTML = `
      <ul>
        <li>${data.strMeasure1}</li><li>${data.strMeasure2}</li><li>${data.strMeasure3}</li>
      </ul>
      `

  }
}



//New Ramen Form
// const addSubmitListener = (e) => {
//   // Add code
//   e.preventDefault()
//   const formName = document.getElementById("new-name").value
//   const formRestaurant = document.getElementById("new-restaurant").value
//   const formImg = document.getElementById("new-image").value
//   const formRating = document.getElementById("new-rating").value
//   const formComment = document.getElementById("new-comment").value

//   let ramenObj = {
//     name: formName,
//     restaurant: formRestaurant,
//     image: formImg,
//     rating: formRating,
//     comment: formComment,
//   }
//   displayRamens(ramenObj)
//   console.log(ramenObj)
// }




document.addEventListener("DOMContentLoaded", main)

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };


