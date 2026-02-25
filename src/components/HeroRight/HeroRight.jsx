import './heroRight.css'

export default function HeroRight() {
	return (
		<div className='heroRight'>
			<div className='heroRight__image-wrapper'>
				<img
					className='heroRight__image'
					src='../../../public/tuys.jpg'
					alt='Game world gate'
				/>
				{/* <span className='heroRight__badge'>FEATURED</span> */}
			</div>

			<div className='heroRight__label'>MODDING COMMUNITIES</div>

			<h2 className='heroRight__title'>
				“Cho‘l vaziri” 20 yillik o‘yinni sotib olib, unda sahro imperiyasini
				qurmoqchi
			</h2>

			<p className='heroRight__subtitle'>
				Kecha internet foydalanuvchilari orasida kutilmagan yulduz paydo bo‘ldi
				— boshiga sharf o‘ragan jiddiy qiyofadagi tuya. Guvohlarning aytishicha,
				tuya 2006-yilda chiqqan eski o‘yinni yuklab olib, unda butun boshli
				“Sahro Respublikasi”ni qurishga kirishgan.
			</p>

			<div className='heroRight__meta'>
				<span className='heroRight__author'>DANIEL LARHMAN, JR.</span>
				{/* <span className='heroRight__dot'>•</span> */}
				<span className='heroRight__date'>2/24/2026</span>
				{/* <span className='heroRight__dot'>•</span> */}
				<div className='heroRight__comments'>
					<span className='heroRight__comment-icon'>💬</span>
					<span className='heroRight__comment-count'>57</span>
				</div>
			</div>
		</div>
	)
}
