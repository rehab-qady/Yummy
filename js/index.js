async function onloadPage() {
  console.log("helllo");
  let data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  let response = await data.json();
  let meal = response.meals;
  console.log(meal);
  let cartona;

  for (let i = 0; i < meal.length; i++) {
    cartona += `
   <div class="col-md-3 mt-3" >
   <div class="image position-relative overflow-hidden" onclick="mealDetails(${meal[i].idMeal})">
     <img src="${meal[i].strMealThumb}" alt="mealImage" class="w-100 rounded-3" />
     <div class="layer position-absolute d-flex justify-content-center rounded-3">
       <h3 id="meal" class="pt-1 my-auto">${meal[i].strMeal}</h3> 
     </div>
   </div>
 </div>
   `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
$(".loading").removeClass("d-none");
onloadPage().then(hideLoader);

let navTabWidth = $(".nav-tab").innerWidth();
$(".sideBar").animate({ left: -navTabWidth });

$(".icon-close").click(() => {
  let navTabLeft = $(".nav-tab").offset().left;
  console.log(navTabLeft);
  console.log(navTabWidth);
  if (navTabLeft == 0) {
    $(".sideBar").animate({ left: -navTabWidth }, 600);
    $(".nav-tab .links li").animate({ top: 200 }, 300);
    document.getElementById("close").classList.add("d-none");
    document.getElementById("bars").classList.replace("d-none", "d-block");
  } else {
    $(".sideBar").animate({ left: 0 }, 600);
    $(".nav-tab .links  li").animate({ top: 0 }, 1000);
    document.getElementById("close").classList.remove("d-none");
    document.getElementById("bars").classList.add("d-none");
  }
});

$(".sideBar .nav-tab .links ul li:nth-child(1)").click(() => {
  console.log("seeaaaaaaarch");
  $("#rowData").html("");
  $(".sideBar").animate({ left: -navTabWidth }, 600);
  $(".nav-tab .links li").animate({ top: 200 }, 300);
  document.getElementById("close").classList.add("d-none");
  document.getElementById("bars").classList.replace("d-none", "d-block");

  let cartona;
  cartona += ` 
  <div class="container w-75" >
  <div class="row" >
  <div class="col-md-6">
  <input
  id="firstName"
  oninput="firstNameMeal(this.value)"
type="text"
placeholder="Search By Name"
class="form-control bg-black text-white"
/>

</div>
<div class="col-md-6">
  <input
  oninput="firstLetterMeal(this.value)"
  type="text"
  placeholder="Search By First Letter"
  class="form-control bg-transparent text-white"
/>
</div>
</div>
</div>     
  `;

  document.querySelector("#searchContainer").innerHTML = cartona;
});

async function firstNameMeal(name) {
  let mealName = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  let mealNameResponse = await mealName.json();
  let meal = mealNameResponse.meals;
  console.log(meal);
  let cartona;

  for (let i = 0; i < meal.length; i++) {
    cartona += `
   <div class="col-md-3 mt-3" >
   <div class="image position-relative overflow-hidden" onclick="mealDetails(${meal[i].idMeal})">
     <img src="${meal[i].strMealThumb}" alt="mealImage" class="w-100 rounded-3" />
     <div class="layer position-absolute d-flex justify-content-center rounded-3">
       <h3 id="meal" class="pt-1 my-auto">${meal[i].strMeal}</h3> 
     </div>
   </div>
 </div>
   `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
async function firstLetterMeal(letter) {
  let mealLetter = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  let mealLetterResponse = await mealLetter.json();
  let meal = mealLetterResponse.meals;
  // console.log(meal);
  let cartona;

  for (let i = 0; i < meal.length; i++) {
    cartona += `
   <div class="col-md-3 mt-3" >
   <div class="image position-relative overflow-hidden"  onclick="mealDetails(${meal[i].idMeal})">
     <img src="${meal[i].strMealThumb}" alt="mealImage" class="w-100 rounded-3" />
     <div class="layer position-absolute d-flex justify-content-center rounded-3">
       <h3 id="meal" class="pt-1 my-auto">${meal[i].strMeal}</h3> 
     </div>
   </div>
 </div>
   `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

function hideLoader() {
  $(".loading").addClass("d-none");
}

function nameValidation() {
  let regex = /^[a-zA-Z\s]+$/;
  let nameInput = document.getElementById("nameInput");
  if (regex.test(nameInput.value)) {
    document
      .getElementById("nameValidation")
      .classList.replace("d-block", "d-none");
    return true;
  } else {
    document
      .getElementById("nameValidation")
      .classList.replace("d-none", "d-block");
    return false;
  }
}

function emailValidation() {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let emailInput = document.getElementById("emailInput");
  if (regex.test(emailInput.value)) {
    document
      .getElementById("emailValidation")
      .classList.replace("d-block", "d-none");

    return true;
  } else {
    document
      .getElementById("emailValidation")
      .classList.replace("d-none", "d-block");

    return false;
  }
}

function phoneValidation() {
  let regex = /^01[0125][0-9]{8}$/;
  let phoneInput = document.getElementById("phoneInput");
  if (regex.test(phoneInput.value)) {
    document
      .getElementById("phoneValidation")
      .classList.replace("d-block", "d-none");

    return true;
  } else {
    document
      .getElementById("phoneValidation")
      .classList.replace("d-none", "d-block");

    return false;
  }
}

function ageValidation() {
  let regex = /^[0-9][0-9]$/;
  let ageInput = document.getElementById("ageInput");
  if (regex.test(ageInput.value)) {
    document
      .getElementById("ageValidation")
      .classList.replace("d-block", "d-none");

    return true;
  } else {
    document
      .getElementById("ageValidation")
      .classList.replace("d-none", "d-block");

    return false;
  }
}

function passValidation() {
  let regex = /^^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  let passInput = document.getElementById("passInput");

  if (regex.test(passInput.value)) {
    document
      .getElementById("passValidation")
      .classList.replace("d-block", "d-none");

    return true;
  } else {
    document
      .getElementById("passValidation")
      .classList.replace("d-none", "d-block");

    return false;
  }
}

function repassValidation() {
  let repassInput = document.getElementById("repassInput");
  let passInput = document.getElementById("passInput");

  if (passInput.value == repassInput.value) {
    document
      .getElementById("repassValidation")
      .classList.replace("d-block", "d-none");

    return true;
  } else {
    document
      .getElementById("repassValidation")
      .classList.replace("d-none", "d-block");

    return false;
  }
}

$(".sideBar .nav-tab .links ul li:last-child").click(() => {
  console.log("contaaaaaact");
  $(".sideBar").animate({ left: -navTabWidth }, 600);
  $(".nav-tab .links li").animate({ top: 200 }, 300);
  document.getElementById("close").classList.add("d-none");
  document.getElementById("bars").classList.replace("d-none", "d-block");

  let cartona;
  cartona += `
  <div class="container">
  <div class="row d-flex align-items-center justify-content-center">
    <div
      class="contact vh-100 d-flex justify-content-center align-items-center"
    >
      <div class="container w-75 text-center">
        <div class="row g-4">
          <div class="col-md-6 text-center">
            <input
              id="nameInput"
              oninput="nameValidation()"
              type="text"
              placeholder="Enter Your Name "
              class="w-100 rounded-2 p-2 form-control"
            />
            <div
              id="nameValidation"
              class="alert alert-danger mt-2 d-none"
            >
              Special characters and numbers not allowed
            </div>
          </div>
          <div class="col-md-6 text-center">
            <input
              id="emailInput"
              type="email"
              oninput="emailValidation()"
              placeholder="Enter Your Email"
              class="w-100 rounded-2 p-2 form-control"
            />
            <div
              id="emailValidation"
              class="alert alert-danger mt-2 d-none"
            >
              Email not valid *exemple@yyy.zzz
            </div>
          </div>
          <div class="col-md-6 text-center">
            <input
              id="phoneInput"
              type="text"
              oninput="phoneValidation()"
              placeholder="Enter Your Phone"
              class="w-100 rounded-2 p-2 form-control"
            />
            <div
              id="phoneValidation"
              class="alert alert-danger mt-2 d-none"
            >
              Enter valid Phone Number
            </div>
          </div>
          <div class="col-md-6 text-center">
            <input
              id="ageInput"
              type="number"
              oninput="ageValidation()"
              placeholder="Enter Your Age"
              class="w-100 rounded-2 p-2 form-control"
            />
            <div
              id="ageValidation"
              class="alert alert-danger mt-2 d-none"
            >
              Enter valid age
            </div>
          </div>
          <div class="col-md-6 text-center">
            <input
              id="passInput"
              oninput="passValidation()"
              type="password"
              placeholder="Enter Your Password"
              class="w-100 rounded-2 p-2 form-control"
            />
            <div
              id="passValidation"
              class="alert alert-danger mt-2 d-none"
            >
              Enter valid password *Minimum eight characters, at least one
              letter and one number:*
            </div>
          </div>
          <div class="col-md-6 text-center">
            <input
              id="repassInput"
              onInput="repassValidation()"
              type="password"
              placeholder="Repassword"
              class="w-100 rounded-2 p-2 form-control"
            />
            <div
              id="repassValidation"
              class="alert alert-danger mt-2 d-none"
            >
              Enter valid repassword
            </div>
          </div>
        </div>

        <button
        onclick="validatedForm()"
          type="submit"
          disabled
          id="button2"
          class="btn btn-outline-danger p-2 mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
  `;

  document.querySelector("#rowData").innerHTML = cartona;

});

function validatedForm(){
  if (
    nameValidation &&
    emailValidation &&
    phoneValidation &&
    ageValidation &&
    passValidation  &&
    repassValidation
  ) {
    document.getElementById("button2").removeAttribute("disabled");
  }

}
// $('#button2').click(()=>{
// })

let dataCateg = [];
async function categories() {
  let data = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  let response = await data.json();
  dataCateg = [...response.categories];
  console.log(dataCateg);

  let cartona;
  for (let i = 0; i < dataCateg.length; i++) {
    console.log("gooooooo");
    cartona += `
    <div class="col-md-3 mt-3">
    <div class="image position-relative overflow-hidden" onclick='getCategoryMeals("${dataCateg[i].strCategory}")'>
      <img src="${dataCateg[i].strCategoryThumb}" alt="mealImage" class="w-100" />
      <div class="layer position-absolute text-center rounded-3">
        <h3 id="meal" class="pt-1">${dataCateg[i].strCategory}</h3>
        <p id="desc">
        ${dataCateg[i].strCategoryDescription}
        </p>
      </div>
    </div>
  </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

$(".sideBar .nav-tab .links ul li:nth-child(2)").click(() => {
  console.log("aliiiiiiiii2");

  $("#searchContainer").html("");
  $("#rowData").html("");
  $(".loading").removeClass("d-none");
  categories().then(hideLoader);
  $(".sideBar").animate({ left: -navTabWidth }, 600);
  $(".nav-tab .links li").animate({ top: 200 }, 300);
  document.getElementById("close").classList.add("d-none");
  document.getElementById("bars").classList.replace("d-none", "d-block");
});

async function getCategoryMeals(meal) {
  let categoryMeal;
  let mealCateg = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`
  );
  let response = await mealCateg.json();

  categoryMeal = response.meals;
  console.log(categoryMeal);

  let cartona;
  for (let i = 0; i < categoryMeal.length; i++) {
    cartona += `
    <div class="col-md-3 mt-3" >
    <div class="image position-relative overflow-hidden" onclick="mealDetails(${categoryMeal[i].idMeal})">
      <img src="${categoryMeal[i].strMealThumb}" alt="mealImage" class="w-100 rounded-3" />
      <div class="layer position-absolute d-flex justify-content-center rounded-3">
        <h3 id="meal" class="pt-1 my-auto ps-2">${categoryMeal[i].strMeal}</h3> 
      </div>
    </div>
  </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

async function areaOfMeal() {
  let area = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let areaResponse = await area.json();
  let areaData = areaResponse.meals;
  let cartona;
  for (let i = 0; i < areaData.length; i++) {
    cartona += `<div class="col-md-3 mt-3 px-2" >
    <div class="image  overflow-hidden text-white text-center cursor-pointer " onclick="filterByArea('${areaData[i].strArea}')">
      <i class="fa-solid fa-house-laptop fa-4x"></i>
      <h3  class="pt-1 my-auto">${areaData[i].strArea}</h3>  
    </div>
  </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

$(".sideBar .nav-tab .links ul li:nth-child(3)").click(() => {
  console.log("aliiiiiiiii3");

  $("#searchContainer").html("");
  $("#rowData").html("");
  $(".loading").removeClass("d-none");
  areaOfMeal().then(hideLoader);
  $(".sideBar").animate({ left: -navTabWidth }, 600);
  $(".nav-tab .links li").animate({ top: 200 }, 300);
  document.getElementById("close").classList.add("d-none");
  document.getElementById("bars").classList.replace("d-none", "d-block");
});

async function filterByArea(area) {
  let areaFilter = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  let response = await areaFilter.json();
  let result = response.meals;
  let cartona;
  for (let i = 0; i < result.length; i++) {
    cartona += `
    <div class="col-md-3 mt-3" >
    <div class="image position-relative overflow-hidden" onclick="mealDetails(${result[i].idMeal})">
      <img src="${result[i].strMealThumb}" alt="mealImage" class="w-100 rounded-3" />
      <div class="layer position-absolute d-flex justify-content-center rounded-3">
        <h3 id="meal" class="pt-1 my-auto">${result[i].strMeal}</h3> 
      </div>
    </div>
  </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

async function ingrediantList() {
  let ingrediants = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let response = await ingrediants.json();
  let result = response.meals;

  let cartona;
  for (let i = 0; i < result.length; i++) {
    let pragraph = `${result[i].strDescription}`;
    let prag = pragraph.substring(1, 150);
    cartona += `
    <div class="col-md-3 mt-3 text-white" >
    <div class="image  h-100  text-center " onclick='filterByIngred("${result[i].strIngredient}")'>
      <i class="fa-solid fa-drumstick-bite fa-4x "></i>
      <h3 id="meal" class="pt-1 my-auto">${result[i].strIngredient}</h3> 
      <p class="h-25">${prag}</p>
    </div>
  </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

$(".sideBar .nav-tab .links ul li:nth-child(4)").click(() => {
  console.log("aliiiiiiiii4");

  $("#searchContainer").html("");
  $("#rowData").html("");
  $(".loading").removeClass("d-none");
  ingrediantList().then(hideLoader);
  $(".sideBar").animate({ left: -navTabWidth }, 600);
  $(".nav-tab .links li").animate({ top: 200 }, 300);
  document.getElementById("close").classList.add("d-none");
  document.getElementById("bars").classList.replace("d-none", "d-block");
});

async function filterByIngred(ingre) {
  let ingreFilter = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingre}`
  );
  let response = await ingreFilter.json();
  let result = response.meals;
  let cartona;
  for (let i = 0; i < result.length; i++) {
    cartona += `
    <div class="col-md-3 mt-3" >
    <div class="image position-relative overflow-hidden" onclick="mealDetails(${result[i].idMeal})">
      <img src="${result[i].strMealThumb}" alt="mealImage" class="w-100 rounded-3" />
      <div class="layer position-absolute d-flex justify-content-center rounded-3">
        <h3 id="meal" class="pt-1 my-auto">${result[i].strMeal}</h3> 
      </div>
    </div>
  </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

async function mealDetails(id) {
  let details = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let response = await details.json();
  let result = response.meals;
  let res = result[0];

  let filteredIngresdiants = [];
  let filteredMeasure = [];
  for (const key in res) {
    if (key.startsWith("strIngredient") && res[key] != "") {
      filteredIngresdiants.push(res[key]);
    }
    if (key.startsWith("strMeasure") && res[key] != "") {
      filteredMeasure.push(res[key]);
    }
  }

  let tagsArray;
  if (res.strTags != null || res.strTags != " ") {
    let tags = res.strTags;
    tagsArray = tags.split(",");
    console.log(tagsArray);
  }

  if (
    res.strSource == "" ||
    (res.strSource == null && res.strYoutube == "") ||
    res.strYoutube == null
  ) {
    res.strSource = "./index.html";
    res.strYoutube = "./index.html";
  }

  let cartona;
  cartona += ` <div class="col-md-4 text-white mt-4">
  <img src="${res.strMealThumb}" alt="" class="w-100 rounded-2" />
  <h2 class="pt-2">${res.strMeal}</h2>
</div>
<div class="col-md-7 text-white mt-4">
  <h2>Instruction</h2>
  <p id="desc">
   ${res.strInstructions}
  </p>
  <h3>Area :<span class="ms-2 text-info" id="area">${res.strArea}</span></h3>
  <h3>Category :<span class="ms-2 text-info" id="category">${res.strCategory}</span></h3>
  <h3>Recipes :</h3>
  <ul class="d-flex flex-wrap list-unstyled g-3" id="recipes"></ul>
  <h3>Tags :</h3>
  <ul class="d-flex flex-wrap list-unstyled g-3" id="tags"></ul>

  <a class="btn btn-success px-2 py-1" href="${res.strSource}" target="_blank">Source</a>
  <a class="btn btn-danger px-2 py-1" href="${res.strYoutube}" target="_blank">Youtube</a>
</div>`;
  document.getElementById("rowData").innerHTML = cartona;

  let recipes = document.getElementById("recipes");

  for (let i = 0; i < filteredMeasure.length; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("alert", "alert-info", "p-1", "m-2");
    listItem.textContent = filteredMeasure[i] + " " + filteredIngresdiants[i];
    console.log(listItem);
    recipes.append(listItem);
  }

  let tagselement = document.getElementById("tags");

  if (tagsArray.length > 0) {
    for (let i = 0; i < tagsArray.length; i++) {
      const listItem = document.createElement("li");
      listItem.classList.add("alert", "alert-danger", "p-1", "m-2");
      listItem.textContent = tagsArray[i];
      console.log(listItem);
      tagselement.append(listItem);
    }
  }

  console.log("hiiiiiiiiiii");
}
