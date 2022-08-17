import React from 'react'
import cn from 'classnames'
import SeatList from './SeatList'
import SeatDetails from './SeatDetails'

const MovieTicketBooking = () => {
	return (
		<div className='container'>
			<h1 className='text-warning text-center mt-3'>Đặt vé xem phim CyberLearn</h1>

			<div className='d-flex flex-column justify-content-center mt-5'>
				<img src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png" alt=""/>

				<div className='mt-5'>
					<SeatList/>

					<SeatDetails/>
				</div>
			</div>


		</div>
	)
}

export default MovieTicketBooking