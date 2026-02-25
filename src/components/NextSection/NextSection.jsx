import React from 'react'
import './nextSection.css'

export default function NextSection() {
	const items = new Array(6).fill(0)

	return (
		<section className='next-section'>
			<div className='next-section__grid'>
				{items.map((_, index) => (
					<article className='next-card' key={index}>
						<div className='next-card__image-wrapper'>
							<img
								className='next-card__image'
								src='https://wallpaperaccess.com/full/2112542.jpg'
								alt='News thumbnail'
							/>
						</div>
						<div className='next-card__body'>
							<h3 className='next-card__title'>
								Buyuk Britaniya Reddit’ni foydalanuvchilarning yoshini yetarlicha qat’iy tekshirmagani uchun jarimaga tortdi.
							</h3>
							<p className='next-card__subtitle'>
								Buyuk Britaniya Reddit’ni foydalanuvchilarning yoshini yetarlicha qat’iy tekshirmagani uchun jarimaga tortdi.
							</p>
							<div className='next-card__meta'>
								<span className='next-card__author'>JON BRODKIN</span>
								{/* <span className='next-card__dot'>•</span> */}
								<span className='next-card__time'>12:53 AM</span>
								{/* <span className='next-card__dot'>•</span> */}
								<div className='next-card__comments'>
									<span className='next-card__comment-icon'>💬</span>
									<span className='next-card__comment-count'>61</span>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
