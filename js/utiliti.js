function clearFiled() {
    document.querySelector("#number-filed").value = "";
}

function discountCalclution(value) {
    const discountPriceContainer = document.getElementById("discount-price");
    const totalPrice = document.getElementById("total-price").innerText;
    const discountPrice = totalPrice * value;
    document.getElementById("grand-price").innerText = totalPrice - discountPrice;
    const li = document.createElement("li");
    li.innerHTML = `
        <p>Discount Price</p>
        <p>BDT ${discountPrice}</p>`
    li.classList.add("flex");
    li.classList.add("justify-between");
    discountPriceContainer.appendChild(li);
    document.getElementById("coupon-from").classList.add("hidden")
}