import './nextSection.css'
import NextSectionItems from './NextSectionItems.jsx'

export default function NextSection() {
	return (
		<section className='next-section'>
			<div className='next-section__grid'>
				<NextSectionItems />
				<NextSectionItems />
				<NextSectionItems />
				<NextSectionItems />
				<NextSectionItems />
				<NextSectionItems />
			</div>
		</section>
	)
}
