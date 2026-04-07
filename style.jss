body {
  margin: 0;
  font-family: Arial;
  background: radial-gradient(circle, #0b0f1a, black);
  color: white;
}

.hero {
  text-align: center;
  padding: 80px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 15px;
}

.card {
  background: #1e293b;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #22c55e;
}

.selected {
  border: 2px solid #22c55e;
}

.container {
  padding: 20px;
}

.seats {
  display: grid;
  grid-template-columns: repeat(10,30px);
  gap: 5px;
}

.seat {
  width: 30px;
  height: 30px;
  background: gray;
  cursor: pointer;
}

.seat.selected {
  background: #22c55e;
}

.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  color: black;
  padding: 20px;
}
