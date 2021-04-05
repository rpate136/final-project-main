document.addEventListener("DOMContentLoaded", () => {
  /* Code for controlling switch panel between list and grid view*/
  const gridView = document.querySelector("#grid-view");
  const listView = document.querySelector("#list-view");
  const grid = document.querySelector("#recipe-grid");
  const list = document.querySelector("#recipe-list");

  gridView.addEventListener("click", () => {
    grid.classList.remove("d-none");
    list.classList.add("d-none");
  });

  listView.addEventListener("click", () => {
    grid.classList.add("d-none");
    list.classList.remove("d-none");
  });

  /* Search bar code */
  const searchByItems = document.querySelectorAll(".dropdown-item");
  searchByItems.forEach((item) =>
    item.addEventListener("click", (event) => {
      const searchByItem = document.querySelector("#search-by");
      searchByItem.innerHTML = event.target.innerHTML;
    })
  );

  /* Add recipes */
  cloneIngredient();

  const addRecipeModal = document.querySelector("#add-recipe-modal");
  addRecipeModal.addEventListener("hidden.bs.modal", () => {
    const title = document.querySelector("#add-title");
    title.value = "";
    const prepTime = document.querySelector("#add-prep-time");
    prepTime.value = "";
    const cookTime = document.querySelector("#add-cook-time");
    cookTime.value = "";

    const ingredient = document.querySelector(".last");
    const clone = ingredient.cloneNode(true);

    const ingredients = document.querySelector("#ingredients");
    ingredients.innerHTML = "";
    ingredients.append(clone);
    cloneIngredient();
  });
});

function cloneIngredient() {
  const addIngredient = document.querySelector(".add-ingredient");
  addIngredient.addEventListener("click", (event) => {
    const ingredient = document.querySelector(".last");
    const clone = ingredient.cloneNode(true);
    ingredient.classList.remove("last");

    const addIngredient = document.querySelector(".add-ingredient");
    addIngredient.classList.add("d-none");
    addIngredient.classList.remove("add-ingredient");
    clone.classList.add("last");
    ingredient.after(clone);
    cloneIngredient();
  });
}
