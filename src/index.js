import dva from 'dva';
import './index.css';
import './assets/css/reset.css'
import 'element-theme-default';
<<<<<<< HEAD
import { createBrowserHistory as createHistory } from 'history'
=======
import createHistory from 'history/createHashHistory';
// import { createBrowserHistory as createHistory } from 'history'
>>>>>>> 9-25 update

// 1. Initialize
const app = dva({
    history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
<<<<<<< HEAD
app.model(require('./models/indexTest').default);
app.model(require('./models/upload/uploadModel').default);
=======
app.model(require('./models/upload/uploadModel').default);
app.model(require('./models/login/login').default);
app.model(require('./models/register/register').default);
app.model(require('./models/product/product').default);
app.model(require('./models/appList/appList').default);
app.model(require('./models/appDetail/index').default);
app.model(require('./models/finance/index').default);
>>>>>>> 9-25 update

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
