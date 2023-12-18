const express = require('express');
const app = express();
const patientsRouter = require('./ routes/Patients');

app.use('/patients', patientsRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port 3000`)
})