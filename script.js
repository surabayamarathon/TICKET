
// COUNTDOWN
const target = new Date("June 7, 2026 15:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = target - now;

  const d = Math.floor(gap / (1000*60*60*24));
  const h = Math.floor((gap / (1000*60*60)) % 24);

  document.getElementById("countdown").innerHTML =
    d + " hari " + h + " jam";
}, 1000);

// DATA TIKET
const tickets = ["CAT 1","CAT 2","CAT 3","CAT 4","CAT 5","CAT 6"];
const list = document.getElementById("ticketList");
const inputTicket = document.getElementById("selectedTicket");

tickets.forEach(t => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerText = t;

  div.onclick = () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    div.classList.add("selected");
    inputTicket.value = t;
  };

  list.appendChild(div);
});

// SEAT
const seats = document.getElementById("seats");
const seatInput = document.getElementById("selectedSeat");

for (let i=1;i<=30;i++){
  const s = document.createElement("div");
  s.className = "seat";
  s.onclick = () => {
    document.querySelectorAll(".seat").forEach(x => x.classList.remove("selected"));
    s.classList.add("selected");
    seatInput.value = "Seat " + i;
  };
  seats.appendChild(s);
}

// FORM
document.getElementById("form").addEventListener("submit", e=>{
  e.preventDefault();
  document.getElementById("modal").style.display = "flex";
});

function closeModal(){
  document.getElementById("modal").style.display = "none";
}
