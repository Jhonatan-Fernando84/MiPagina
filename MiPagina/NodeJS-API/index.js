const express =  require('express');
const app = express();

app.use(express.json());

const products = [
    {id: 1, name: 'Paracetamol', weight: 100, enroll: true},
    {id: 2, name: 'Ibuprofeno', weight: 50, enroll: false},
    {id: 3, name: 'Aspirina', weight: 150, enroll: true},
];


 app.get('/', (req, res) => {
    res.send('Node JS api');
});


app.get('/api/products', (req, res) => {
    res.send(products);
});


app.get('/api/products/:id', (req, res) => {
    const product = products.find (c => c.id === parseInt (req.params.id));
    if (!product) return res.status(404).send('Producto no encontrado');
    else res.send(product);
})


app.post('/api/products', (req,res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        weight: parseInt (req.body.weight),
        enroll: (req.body.enroll === 'true')
    };


products.push(product);
res.send(product);
});


app.delete ('/api/products/:id', (req,res) => {
const product = products.find (c => c.id === parseInt (req.params.id));
if (!product) return res.status(404).send('Producto no encontrado');

const index = products.indexof(product);
products.splice(index, 1);
res.send(product);
});

const port = process.env.port || 60;
app.listen (port, () => console.log(`Escuchando en puerto ${port}...`));