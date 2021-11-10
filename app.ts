import express from 'express';
import axios from 'axios';
const app = express();

// middleware
app.use(express.static("public"));
app.set('view engine', "ejs")

// get data
app.get("/", (req: any, res: any) => {
    // res.render("index");
    let data: any = {data: null}
    axios.get("https://coronavirus-19-api.herokuapp.com/countries")
    .then(ress => {
        res.render("index", { data: ress })
    });
});

app.listen(80, ()=>{console.log("Lisnte 80")
})