const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'Cybersecurity'},
    {id: 2, name: 'Web development'},
    {id: 3, name: 'Machine learning'}
    
]
app.get('/',(req, res) => {
    res.send('Hello World !!!');

});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }    
    
    
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});



app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The couse with the given ID not find');
    res.send(course);
});

app.put('/api/courses/:id' , (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)  {
        res.status(404).send('The couse with the given ID not find');
        return;}

    const schema = {
        name: Joi.string().min(3).required()
    };

    
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }    
    
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id' , (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The couse with the given ID not find');
     
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);

});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);

};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on the port ${port}...`));

