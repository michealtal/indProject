let totalPrice = 0
let totalTickets = 0

const tickets = [
  {
    name: "Paket VIP",
    description:
      "1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto",
    price: 371000,
    quantity: 0,
  },
  {
    name: "Paket VVIP",
    description:
      "1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise dekorasi kabin spot & pelayanan VVIP Sesi foto",
    price: 424000,
    quantity: 0,
  },
  {
    name: "Paket Ngedate",
    description: "1 Tiket Mobil (maks. 2 orang)2 Popcorn Drive-In Senja",
    price: 212000,
    quantity: 0,
  },
  {
    name: "Paket Date Premium",
    description: "1 Tiket Mobil (maks. 2 orang)2 Hotdog Drive-In Senj",
    price: 265000,
    quantity: 0,
  },
  {
    name: "Paket Rame",
    description: "1 Tiket Mobil (maks. 3-4 orang)4 Popcorn Drive-In Senja",
    price: 371000,
    quantity: 0,
  },
  {
    name: "Paket Rame Premium",
    description: "1 Tiket Mobil (maks. 3-4 orang)4 Hotdog Drive-In Senja",
    price: 487000,
    quantity: 0,
  },
];

const updateTotalTickets = () => {
    totalTickets = tickets.reduce((total, ticket) => {
        return total + ticket.quantity;
      }, 0);
}

const updateTotalPrice = () => {
    totalPrice = tickets.filter(ticket => ticket.quantity > 0).reduce((total, ticket) => {
        return total + (ticket.quantity * ticket.price)
    }, 0)
}

const ticketContainer = document.querySelector(".secondMain");

tickets.forEach((ticket, index) => {
  const ticketDiv = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const price = document.createElement("h1");
  const buttonControl = document.createElement("div");
  const incrementBtn = document.createElement("img");
  const decrementBtn = document.createElement("img");
  const quantity = document.createElement("span");

  ticketDiv.className = "secondFirstCard";
  title.className = "selectedTicket";
  buttonControl.className = "buttonControl";
  incrementBtn.className = "incrementButton";
  decrementBtn.className = "decrementButton";
  quantity.className = "myNum";

  incrementBtn.src = "images/plus.png";
  decrementBtn.src = "images/minus.png";

  title.textContent = ticket.name;
  description.textContent = ticket.description;
  price.textContent = ticket.price;
  quantity.textContent = ticket.quantity;

  ticketDiv.dataset.ticketID = ticket.name;

  buttonControl.append(decrementBtn, quantity, incrementBtn);
  ticketDiv.append(title, description, price, buttonControl);
  ticketContainer.appendChild(ticketDiv);
});

document.querySelectorAll(".buttonControl").forEach(function (ticket, index) {
  let plusIcon = ticket.querySelector(".incrementButton");
  let numCount = ticket.querySelector(".myNum");
  let minusIcon = ticket.querySelector(".decrementButton");
  const ticketID = ticket.parentElement.dataset.ticketID;
  const ticketData = tickets.find((ticket) => ticket.name === ticketID);

  plusIcon.addEventListener("click", function () {
    ticketData.quantity++;
    numCount.textContent = ticketData.quantity;
    updateTotalTickets()
    updateTotalPrice()
    updateFooter(ticketID, totalTickets);
  });

  minusIcon.addEventListener("click", function () {
    if (totalTickets > 0 && ticketData.quantity > 0) {
      ticketData.quantity--;
      numCount.textContent = ticketData.quantity;
      updateTotalTickets()
      updateTotalPrice()
      updateFooter(ticketID, totalTickets);
    }
  });
});

function updateFooter(ticketID, amount) {
  const button = document.querySelector("#footerButton");
  const footerUl = document.querySelector("#footerUl");
  const numberCount = document.querySelector("#numberCount");
  const foot = document.querySelector(".foot");
  const totalAmount = document.querySelector("#totalAmount");
  const classticket = document.querySelector("#classticket");


  if (amount > 0) {
    button.style.display = "inline";
    footerUl.style.display = "flex";
    numberCount.textContent = amount;
    foot.style.display = "none";
  } else {
    button.style.display = "none";
    footerUl.style.display = "none";
    foot.style.display = "block";
    foot.textContent = "Choose Your Ticket And Quantity";
  }

  if (amount > 0) {
    classticket.textContent = ticketID;
  } else {
    classticket.textContent = "No Ticket selected";
  }

  totalAmount.textContent =
    totalPrice > 0 ? "Rp. " + totalPrice.toLocaleString() : "";
}

function buttonAnimation() {
    let myClick = document.querySelector("#footerButton");
    myClick.classList.add("pressed");
    setTimeout(function () {
      myClick.classList.remove("pressed");
    }, 100)
  }