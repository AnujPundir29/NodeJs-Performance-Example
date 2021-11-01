const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        //event got blocked here
    }
}

app.get('/', (req, res) => {
    res.send('Performance example');
})

app.get('/timers', (req, res) => {
    //delay the response    
    delay(9000);
    res.send('ding ding!');
})

app.listen(3000, () => console.log('Listening to 3000....'));