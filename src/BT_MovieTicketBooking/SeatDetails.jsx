import React from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

const SeatDetails = () => {
   const selectedSeats = useSelector((state) => state.tickets.selectedSeats);

   return (
      <div
         className={cn(
            selectedSeats ? "w-50 mx-auto text-center d-block" : "d-none"
         )}
      >
         <h4>Danh sách ghế bạn chọn</h4>
      </div>
   );
};

export default SeatDetails;
