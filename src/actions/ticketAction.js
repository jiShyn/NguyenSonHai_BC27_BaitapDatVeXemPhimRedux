export const selectTickets = (seat) => {
	console.log(seat);
   return { type: "selectSeat", seat };
};
