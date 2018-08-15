const bodyParser = require('koa-bodyparser')
const Koa = require('koa')
const Router = require('koa-router')

const Report = require('./models/Report')
const reports = require('./controllers/reports')

const app = new Koa()
const router = new Router()

const models = {
  Report,
}

router.post('/api/reports', async (ctx, next) => reports.create(ctx, models))
router.get('/api/reports', async (ctx, next) => reports.get(ctx, models))
router.get('/api/reports/:reportId', async (ctx, next) => reports.getById(ctx, models))

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(2700)
