const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

//JSON pretty middleware
app.use(json());

//Simple middleware
//app.use(async ctx => ctx.body = {msg: 'Halo'});

router.get('/test',  ctx => (ctx.body = 'Hello test!'));


//Router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Server starts...')
});

//min 13:50