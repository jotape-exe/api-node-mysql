const express = require('express');
const app = express();

app.use(
    express.json()
)

const personRoutes = require('./routes/userRouter');
app.use('/user', personRoutes);


app.listen(3000, ()=>{
    console.log("Servidor iniciado na porta 3000");
})

