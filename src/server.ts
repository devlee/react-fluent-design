import * as Koa from 'koa';
import * as KoaFavicon from 'koa-favicon';
import * as KoaRouter from 'koa-router';
import * as path from 'path';

import WebpackDevServer from './webpack/webpack-dev-server';

const app = new Koa();
const router = new KoaRouter();

router.get('/*', (ctx: Koa.Context, next) => {
  ctx.type = 'html';
  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>react-fluent-design</title>
        <link href="/assets/vendor.css" rel="stylesheet" type="text/css">
      </head>
      <body>
        <div id="app"></div>
        <script src="/assets/vendor.js"></script>
        <script src="/assets/client.js"></script>
      </body>
    </html>
  `;
  next();
});

WebpackDevServer(app);

app.use(KoaFavicon(path.join(__dirname, '../public/favicon.ico')));

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(7879, () => {
  console.log('Koa App Started At Port 7879!');
});
