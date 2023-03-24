const express = require("express");
const cors = require("cors");

const baseURL = 'server/index.js'

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postFortune, deleteFortune, updateName, user } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get(`/${baseURL}/fortune`, getFortune);

app.post(`/${baseURL}/fortune`, postFortune)

app.delete(`/${baseURL}/fortune`, deleteFortune)

app.put(`${baseURL}/user`, updateName)

app.listen(4000, () => console.log("Server running on 4000"));
