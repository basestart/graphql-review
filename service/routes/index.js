const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  let data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: 'koa2 json'
      })
    }, 1000)
  })
  ctx.body = data;
})

router.get('/type', async (ctx, next) => {
  ctx.body = [{
    type: 'news'
  }, {
    type: 'html'
  }, {
    type: 'javascript'
  }, {
    type: 'css'
  }]
})

module.exports = router
