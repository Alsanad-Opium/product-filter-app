const product_list = document.getElementById('product-list')

const search_inputs = document.getElementById('search-input')

const search_btn = document.getElementById('search-btn')

const category_btn = document.querySelectorAll('.category-btn')


search_btn.addEventListener('click', filterproducts)

search_inputs.addEventListener('keyup',filterproducts)

category_btn.forEach(btn=>{
    btn.addEventListener('click',setcategory)
})

function filterproducts(){
    const search_value = search_inputs.value.toLowerCase()// converts the search input to lower case so as to match the data-category in the index.html

    const products_items = document.querySelectorAll('.product-item')
    
    const active_category = document.querySelector('.category-btn.active').dataset.category // this line is for the category buttona

    products_items.forEach(item=>{
        const product_name = item.querySelector('h1').innerHTML.toLowerCase()// selects all h1 tag in the product-items class

        const category = item.dataset.category

        if ((product_name.includes(search_value)|| search_value === '') && category === active_category || active_category === 'all') {
            item.style.display = 'block'//displaying the product items that match the search or the category button
            
        }else{
            item.style.display = 'none' // hides which does not match the search 
        }
    })

}

function setcategory(e) {
    category_btn.forEach(btn=> btn.classList.remove('active'))//this is to remove the multiple multiply selected button hence makes it easy to track what is selected

        e.target.classList.add('active')// create a new class to display which button is currently selected
        filterproducts();
    
}