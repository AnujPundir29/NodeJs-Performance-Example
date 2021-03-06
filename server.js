const express = require('express');
// const cluster = require('cluster');
// const os = require('os');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        //event got blocked here
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
})

app.get('/timers', (req, res) => {
    //delay the response    
    delay(9000);
    // zero downtime reload -> pm2 reload sever
    res.send(`ding ding! ${process.pid}`);
})

// if (cluster.isMaster) {
//     console.log('Master right now!!!');
    //mAking child process 
    // cluster.fork();
    // cluster.fork();

    // const Num_workers = os.cpus().length;
    // for (let i = 0; i < Num_workers; i++)
    //     cluster.fork();
// } else {
    console.log('Right now in worker');
    app.listen(3000, () => console.log('Listening to 3000....'));
// }