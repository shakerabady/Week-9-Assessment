const express = require('express');
const app = express();

app.use(express.json());

app.get('/tasks', (req, res) => {
  res.json(tasks)  
});

app.post('/tasks', (req, res) => {
    const tasks1 = req.body;
    tasks.push(tasks1);
    res.json(tasks);
});


app.delete('/tasks/:id', (req, res) => {

    tasks.forEach((elem, index) => {
        if(elem.id == req.params.id) {
            tasks.splice(index, 1);
        }
    });

    res.json(tasks);
});

app.listen(4000, () => console.log('all is good'))









const tasks = [
    {
      id: 1,
      title: "play dota",
      isCompleted: false
    },
    {
      id: 2,
      title: "study JS",
      isCompleted: true
    },
    {
      id: 3,
      title: "Manage DR orders",
      isCompleted: false
    },
    {
      id: 4,
      title: "sleep",
      isCompleted: true
    },
    { 
      id: 5,
      title: "play fifa",
      isCompleted: false
    }
  ];