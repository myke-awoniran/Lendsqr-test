import { Router } from 'express';
import {
  HttpInitiateTransfer,
  HttpFinalizeTransfer,
} from '../controllers/transactions.controller';
const transactionRouter = Router();

transactionRouter.post('/initiate-transfer', HttpInitiateTransfer);

transactionRouter.post('/finalize-transfer', HttpFinalizeTransfer);

export default Router;
