let express = require('express');
let app = express();
const cors = require('cors');

app.use(cors());
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
  });

app.get('/', function (req, res) {
    res.json({ 
        shoppingCart: [{
            product: "MacBook Air M2 2022 midnight 13.6", 
            number: 5,
            price: 500
        }, {
            product: "Monitor Samsung",
            number: 10,
            price: 100
        }]
    });
    res.end();
});

app.listen(3002, function () {
  console.log("app listening on port 3002!");
});

