const express = require('express');
const app = express();
const cors = require('cors');

const user = require('./routes/user');


app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(`REQUEST RECEIVED!`);
    console.log(` URL: ${req.path}`);
    console.log(` PARAMS: ${JSON.stringify(req.params)}`);
    console.log(` BODY: ${JSON.stringify(req.body, null, 2)}`);
    next();
    }); 

app.get('/', (req, res)=> {
    console.log('yeah!!')
    res.status(200).send('the server is listening')
})

app.use('/user', user)

const server = app.listen(process.env.PORT || 3001, ()=> {
    console.log(`server listen in port${server.address().port}  http://localhost:${server.address().port}`)
})