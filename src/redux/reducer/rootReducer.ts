import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import tagReducer from "./tagReducer";
import rewardReducer from "./rewardReducer";
import postCategoryReducer from "./postCategoryReducer";
import userIDReducer from "./userIDReducer";
import topReceiverReducer from "./topreceiverReducer";
import topproductReducer from "./topproductReducer";
import transactionsinfoReducer from "./transactionsinfoReducer";
import transactionsReducer from "./transactionsReducer";
import userAdminReducer from "./userAdminReducer";
export const rootReducer = combineReducers({
  postReducer,
  userReducer,
  tagReducer,
  rewardReducer,
  postCategoryReducer,
  userIDReducer,
  topReceiverReducer,
  topproductReducer,
  transactionsinfoReducer,
  transactionsReducer,
  userAdminReducer,
});

export default rootReducer;
