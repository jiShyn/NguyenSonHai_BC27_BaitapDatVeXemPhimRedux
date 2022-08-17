import React from 'react'
import {useSelector} from 'react-redux'
import cn from "classnames"

const SeatDetails = () => {
	const selectedSeats = useSelector((state) => state.tickets.selectedSeats)
	const length = selectedSeats?.length
	console.log(length);

	return (
		<div className={cn({length > 0 ? "w-50 mx-auto text-center d-block" : "d-none"})}>
			<h4>Danh sách ghế bạn chọn</h4>
		</div>
	)
}

export default SeatDetails