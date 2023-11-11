import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const tasks = [];

app.get('/', (req, res) => {
   res.render('index.ejs', {tasks}) 
});

app.post('/submit', (req, res) => {
    tasks.push(req.body['task']);
    return res.redirect('/');
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    return res.redirect('/');
})

app.use((req, res) => {
    res.redirect('/');
 });
 
app.listen(port, (req, res) => {
   console.log(`Server is running on port ${port}`) 
});