
import './heroRight.css'

export default function HeroRight() {
	return (
		<div className='heroRight'>
			<div className='heroRight__image-wrapper'>
				<img
					className='heroRight__image'
					src=''
					alt='Game world gate'
				/>
				<span className='heroRight__badge'>FEATURED</span>
			</div>

			<div className='heroRight__label'>MODDING COMMUNITIES</div>

			<h2 className='heroRight__title'>
				20 yillik o‘yinda butun bir dunyoni qurishga urinayotgan idealist (orzuparast) jamoa ichiga nazar.
			</h2>

			<p className='heroRight__subtitle'>
				Haddan tashqari katta jamoaviy mod loyihasidan olingan hikoyalar va saboqlar.
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
