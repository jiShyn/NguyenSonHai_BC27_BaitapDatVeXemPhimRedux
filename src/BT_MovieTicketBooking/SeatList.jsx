import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

const SeatList = () => {
   const { data } = useSelector((state) => state.tickets);
   
   return (
      <div>
         <table className="table table-dark table-borderless">
            <thead>
               <tr className="text-warning">
                  <th>#</th>
                  {data[0].seats.map((item, index) => {
                     return (
                        <th
                           key={index}
                           className="text-center"
                           
                        >
                           {item.name.slice(1)}
                        </th>
                     );
                  })}
               </tr>
            </thead>

            <tbody>
               {data.map((item, index) => {
                  return (
                     <tr key={index}>
                        <SeatItem seat={item} />
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default SeatList;
