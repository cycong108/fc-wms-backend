const path = require('path')

const Koa = require('koa')
const KoaBody = require('koa-body')
const KoaStatic = require('koa-static')
const parameter = require('koa-parameter')

const catchError = require('../middleware/exception.middleware');

const router = require('../router')

const app = new Koa()

app.use(
    KoaBody({
        multipart: true,
        formidable: {
            uploadDir: path.join(__dirname, '../upload'),
            keepExtensions: true
        },
        parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE']
    })
)
//app.use(KoaStatic(path.join(__dirname, '../upload')))

app.use(parameter(app))

app.use(catchError)

app.use(router.routes()).use(router.allowedMethods())

module.exports = app