let buySeatCount = 0;
let seatLeft = parseInt(document.querySelector("#seats-left").innerText);

const seats = document.querySelectorAll(".seat");
for (const seat of seats) {
    seat.addEventListener("click", function () {
        seat.classList.add("bg-change");
        seat.classList.remove("bg-[#F7F8F8]");
        seat.setAttribute("disabled", true);    
        buySeatCount++;
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

    })
}