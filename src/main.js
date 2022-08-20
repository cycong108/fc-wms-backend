const { APP_PORT } = require('./config/env')

const app = require('./app')

app.listen(APP_PORT, () => {
    console.log(`server is running on http://localhost:${APP_PORT}`)
})

//启动指令 npm run dev