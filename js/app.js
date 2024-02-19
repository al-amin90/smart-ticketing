let buySeatCount = 0;
let seatLeft = parseInt(document.querySelector("#seats-left").innerText);

const seats = document.querySelectorAll(".seat");
for (const seat of seats) {
    seat.addEventListener("click", function () {
        buySeatCount++;
        if (buySeatCount > 4) {
            alert("You Can't Buy More Than 4 Ticket!!!");
            return;
        }

        seat.classList.add("bg-change");
        seat.classList.remove("bg-[#F7F8F8]");
        seat.setAttribute("disabled", true);    
        document.getElementById("buy-seat-count").innerText = buySeatCount;
        seatLeft--
        document.querySelector("#seats-left").innerText = seatLeft;

        const ulContainer = document.querySelector("#ul-container");
        const seatName = seat.innerText;
        const li = document.createElement("li");
        li.innerHTML = ` <p>${seatName}</p>
                         <p class="pl-5">Economoy</p>
                         <p class="text-right">550</p>
                         `;
        li.classList.add("grid");
        li.classList.add("grid-cols-3");
        ulContainer.appendChild(li);
        const totalPrice = buySeatCount * 550;
        document.getElementById("total-price").innerText = totalPrice;
        document.getElementById("grand-price").innerText = totalPrice;

        if (buySeatCount === 4) {
            document.querySelector("#apply-btn").removeAttribute("disabled");
        }

        const numberFiled = document.querySelector("#number-filed").value;
        if (numberFiled.length === 11 && buySeatCount !== 0) {
            console.log(numberFiled.length)
            document.querySelector("#next-btn").removeAttribute("disabled");
        }
    })
}

document.querySelector("#number-filed").addEventListener("keyup", function (e) {
    const inputDiv = e.target.parentNode;
    const pSms = document.querySelector("#number-filed-container p");
    if (e.target.value.length !== 11 && !!pSms === false) {
        const p = document.createElement("p");
        p.innerText = "Please Select At least One Seat And Provide A Correct 11 Digit Phone Number";
        p.classList.add("red-input-alert")
        inputDiv.appendChild(p);
    }

    if (e.target.value.length === 11 && buySeatCount !== 0) {
        document.querySelector("#next-btn").removeAttribute("disabled");
        pSms.remove();
    }
    else {
        document.querySelector("#next-btn").setAttribute("disabled", true);
    }
 })

document.querySelector("#apply-btn").addEventListener("click", function () {
    const cuponValue = document.getElementById("coupon-filed").value;
    if (cuponValue === "NEW15") {
        discountCalclution(0.15);
    }
    else if (cuponValue === "Couple 20") {
        discountCalclution(0.2);
    }
    else {
        alert("Invalid Cupon Code!");
        document.getElementById("coupon-filed").value = "";
    }
 })