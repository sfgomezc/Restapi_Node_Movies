const { Router } = require('express');
const router = Router();
const http = require('http');
const apiEmp = 'http://dummy.restapiexample.com/api/v1/employees';
const apiEmpId = 'http://dummy.restapiexample.com/api/v1/employee/';


router.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({"Nombre": "Steven Gomez"});
});

router.get('/test', (req, res) => {
    const data = {
        "Name": "Steven Gomez",
        "Age": 36,
        "email": "steven.gomez.c@gmail.com"
    };
    res.json(data);
});


module.exports = router;
