
import './hero.css'
import HeroLeft from '../HeroLeft/HeroLeft'
import HeroRight from '../HeroRight/HeroRight'
export default function Hero() {
	return (
		<div className='hero'>
			<HeroLeft />
			<HeroRight />
		</div>
	)
}
