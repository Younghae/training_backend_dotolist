const express = require('express');
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/todos', todosRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
