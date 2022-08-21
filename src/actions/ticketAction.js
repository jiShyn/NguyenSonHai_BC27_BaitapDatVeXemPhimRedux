export const selectTickets = (seat) => {
	// console.log(seat);
   return { type: "changeBooked", seat };
};

export const getListBookedSeats = () => {
	return {type: "getListBookedSeats"}
}
