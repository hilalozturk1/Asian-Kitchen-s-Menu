

let section = document.querySelector(".section-center");
let btnContainer = document.querySelector(".btn-container");

btnContainer.innerHTML += `<button class='btn btn-outline-dark btn-item' onclick='filteredMenuByCategory(event)' data-id="All">All</button>
<button class='btn btn-outline-dark btn-item' onclick='filteredMenuByCategory(event)' data-id="Kores">Korea</button>
<button class='btn btn-outline-dark btn-item' onclick='filteredMenuByCategory(event)' data-id="Japan">Japan</button>
<button class='btn btn-outline-dark btn-item' onclick='filteredMenuByCategory(event)' data-id="China">China</button>`;

function filteredMenuByCategory(event = "all") {
  let newMenu;
  section.innerHTML = "";
  if (event === "all" || event.target.innerHTML === "All") {
    newMenu = menu;
  } else if (event.target.innerHTML === "Japan") {
    newMenu = menu.filter((eleman) => eleman.category === "Japan");
  } else if (event.target.innerHTML === "Korea") {
    newMenu = menu.filter((eleman) => eleman.category === "Korea");
  } else if (event.target.innerHTML === "China") {
    newMenu = menu.filter((eleman) => eleman.category === "China");
  }
  let arr = mappingArr(newMenu);
  arr.forEach((element) => {
    section.innerHTML += element;
  });
}

function mappingArr(newMenu) {
  return newMenu.map(function (item) {
    return `
      <div class="menu-items col-lg-6 col-sm-12">
          <img class="photo" src="${item.img}" alt="${item.title}" srcset="" />
          <div class="menu-info">
          <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">${item.desc}</div>
          </div>
      </div>
      `;
  });
}

filteredMenuByCategory();
