const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");          
app.use(express.static('public'));     

app.set("views", path.join(__dirname, "views"));    
app.use(express.json());                            
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.listen(3000, ()=>{
    console.log('App listening on port 3000....');
});