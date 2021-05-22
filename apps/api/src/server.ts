import {app} from "./index";

const port = 3000;


const server = app.listen(port, () => {
    console.log('App is running.');
});

process.on('SIGTERM', () => {
    server.close();
});
