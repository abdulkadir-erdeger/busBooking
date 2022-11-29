import express from "express";
import cityData from "./city.js";
import travelData from "./travelData.js";

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Bus Booking Server");
});

server.get("/city", (req, res) => {
  res.status(200).json(cityData);
});

server.get("/travelData", (req, res) => {
  res.status(200).json(travelData);
});

server.get("/travelData/:id/", (req, res) => {
  const { id } = req.params;
  const travel = travelData.find((travel) => travel.id === parseInt(id));
  if (travel) {
    res.status(200).json(travel);
  } else {
    res.status(404).send("Aradığınız bilgiler bulunamadı.");
  }
});

server.post("/buy", (req, res) => {
  const { otobusId, koltukNo, row, gender } = req.body;
  const newData = travelData;
  const dataIndex = travelData.findIndex(
    (travel) => travel.id === parseInt(otobusId)
  );
  const seatDataIndex = travelData[dataIndex].koltuklar[row].findIndex(
    (seat) => seat.id === koltukNo
  );
  travelData[dataIndex].koltuklar[row][seatDataIndex].empty = false;
  travelData[dataIndex].koltuklar[row][seatDataIndex].selected = true;
  travelData[dataIndex].koltuklar[row][seatDataIndex].gender = gender;
});

server.listen(process.env.PORT || 5000, () => {
  console.log("Server dinleniyor..");
});
