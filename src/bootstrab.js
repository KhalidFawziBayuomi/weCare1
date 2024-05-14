import authRouter from "./auth/auth.routes.js"
import userRouter from "./modules/user/user.routes.js"
import toolsRouter from "./products/product.routs.js"
import trendRouter from "./trend/trend.routs.js"
import womanRouter from "./woman/woman.routs.js"
import accessoriesRouter from "./accessories/accessories.routs.js"

export function bootstrap(app){
    app.use('/api/v1/users',userRouter)
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/product',toolsRouter)
    app.use('/api/v1/woman',womanRouter)
    app.use('/api/v1/trend',trendRouter)
    app.use('/api/v1/accessories',accessoriesRouter)
    app.get('/',(req,res)=>res.send('hello world'))
}
