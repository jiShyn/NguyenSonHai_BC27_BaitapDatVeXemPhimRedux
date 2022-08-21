import cn from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTickets } from "../actions/ticketAction";

const SeatItem = ({ seat }) => {
   const dispatch = useDispatch();
   const selectSeat = (seat) => {
      dispatch(selectTickets(seat));
   };
   return (
      <>
         <td className="text-warning">{seat.row}</td>
         {seat.seats.map((item, index) => {
            return (
               <td
                  key={index}
                  className={cn({
                     "text-center": true,
                     "text-danger": item.booked,
                  })}
                  onClick={() => {
                     selectSeat(item);
                  }}
               >
                  {item.name}
               </td>
            );
         })}
      </>
   );
};

export default SeatItem;
