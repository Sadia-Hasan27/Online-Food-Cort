
//cart see more or less
const seeMoreButton = document.querySelector('.cart-more .see-more');
const hiddenProducts = document.querySelectorAll('.cart-bars .products.hidden');
const productsToShow = 6; 

let showCount = productsToShow;

seeMoreButton.addEventListener('click', () => {
  if (showCount === productsToShow) {
    // Show more products
    hiddenProducts.forEach(product => {
      product.classList.remove('hidden');
    });
    showCount = hiddenProducts.length + productsToShow;
    seeMoreButton.textContent = "See Less Items";
  } else {
    // Show fewer products
    hiddenProducts.forEach(product => {
      product.classList.add('hidden');
    });
    showCount = productsToShow;
    seeMoreButton.textContent = "See More Items";
  }
});

//form section
function subcrib(event) {
    event.preventDefault();
     
    const Email=event.target.email.value;
    console.log(Email);

}

