
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API พร้อมใช้งาน');
});

app.listen(5000, () => {
    console.log('Server เริ่มต้นที่ http://localhost:5000');
});
