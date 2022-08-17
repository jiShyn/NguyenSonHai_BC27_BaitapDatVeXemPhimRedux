import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./reducers/ticketReducer";

const store = configureStore({
   reducer: {
		tickets: ticketReducer
	 },
});

export default store;
