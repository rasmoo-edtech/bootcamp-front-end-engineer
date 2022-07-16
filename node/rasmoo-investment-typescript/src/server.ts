import express, { json } from 'express';
import healthRoutes from "./routes/health.route";
import investmentRoutes from "./routes/investment.route";

const app = express();

app.use(json());
app.use(healthRoutes);
app.use(investmentRoutes);

app.listen(3000, () => {
    console.log('Server is running');
});