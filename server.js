const express = require('express');

const app = express();

app.get('/api/members',(req,res) =>{
    const members = [
        {id: 1, firstName: 'Luis'},
        {id: 2, firstName: 'Desire'},
        {id: 3, firstName: 'Andrew'},
        {id: 4, firstName: 'Rob'}
    ];
    res.json(members);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));