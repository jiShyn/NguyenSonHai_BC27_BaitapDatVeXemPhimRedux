import cn from "classnames";
import React from "react";
import { useDispatch } from "react-redux";

const SeatItem = ({ seat }) => {
   const dispatch = useDispatch();
   const selectSeat = (seat) => {
      dispatch({ type: "selectSeat", seat });
   };
   return (
      <>
         <td className="text-warning">{seat.row}</td>
         {seat.seats.map((item, index) => {
            return (
               <td
                  key={index}
                  className={cn("text-center")}
                  onClick={(evt) => {
                     selectSeat(item);
                     evt.target.classList.add("text-danger");
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
