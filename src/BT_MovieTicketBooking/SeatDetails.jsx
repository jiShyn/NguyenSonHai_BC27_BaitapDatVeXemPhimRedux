import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import { getListBookedSeats } from "../actions/ticketAction";

const SeatDetails = () => {
   const dispatch = useDispatch();
   const { data, selectedSeats } = useSelector((state) => state.tickets);

   useEffect(() => {
      dispatch(getListBookedSeats());
   }, [data]);
   return (
      <div
         className={cn(
            selectedSeats ? "w-50 mx-auto text-center d-block" : "d-none"
         )}
      >
         <h4>Danh sách ghế bạn chọn</h4>
         <table className="table table-dark table-borderless">
            <thead>
               <tr>
                  <td>Số ghế</td>
                  <td>Giá</td>
                  <td>Hủy</td>
               </tr>
            </thead>
            <tbody>
               {selectedSeats &&
                  selectedSeats.map((item, index) => {
                     return (
                        <tr key={index} className={cn("text-primary")}>
                           <td>{item.selectedSeats.name}</td>
                           <td>{item.selectedSeats.price}</td>
                           <td
                              className="text-danger"
                              style={{ cursor: "pointer" }}
                           >
                              X
                           </td>
                        </tr>
                     );
                  })}
            </tbody>
            <tfoot>
               <tr>
                  <td className="text-white">Tổng tiền</td>
                  <td>
                     {selectedSeats.reduce((total, item) => {
                        return total + item.selectedSeats.price;
                     }, 0)}{" "}
                     vnd
                  </td>
                  <td></td>
               </tr>
            </tfoot>
         </table>
      </div>
   );
};

export default SeatDetails;
