// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));



const express = require("express");
// const data =require("")
const app = express();
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="color:blue;background-color:yellow;width:20%;margin:auto;">Welcome to RB Server</h1>'
    );
});


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

