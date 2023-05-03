// server/index.js
const con = require('./database');
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/api/questions', (req, res) => {
    con.query("select * from questions", (err, result) => {
        if (err) {
            res.send(err.message);
        }
        else {
            res.send(result);
        }
    })
})

app.post('/auth', (req, res) => {
    const email = req.body.email;
    const key = req.body.key;

    con.query(
        "select * from studentLog WHERE StudentID = ? and email = ?", [key, email],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send(res);
            }

        }
    )
})