import factsRouter from "./facts/factsRouter.js";
import userRouter from "./user/userRouter.js";

const routerAPI = ( app) => {
    app.use('/facts', factsRouter);
    app.use('/users', userRouter);
}

export default routerAPI;