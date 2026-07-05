const searchInput=document.getElementById("searchInput");

const category=document.getElementById("categoryFilter");

const products=document.querySelectorAll(".product-card");

function filterProducts(){

const search=searchInput.value.toLowerCase();

const cat=category.value;

products.forEach(product=>{

const name=product.dataset.name;

const productCategory=product.dataset.category;

const matchName=name.includes(search);

const matchCategory=(cat==="all" || productCategory===cat);

if(matchName && matchCategory){

product.style.display="block";

}

else{

product.style.display="none";

}

});

}

searchInput.addEventListener("keyup",filterProducts);

category.addEventListener("change",filterProducts);