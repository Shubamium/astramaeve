import Link from 'next/link';
import './home.scss'
export default function Home() {
  return (
    <main id="page_home" className={'home-page'}>
			<div className="decor ni">
				<img src="/decors/frame_edge.png" alt=""  className="decor_frame top"/>
				<img src="/decors/frame_edge.png" alt=""  className="decor_frame bottom"/>
			</div>

			<div className="content">
				<article className="text-part">
					<p className='pretitle'>astralias israndi mæve-ir salvere</p>
					<h1 className='main-title'>✦ Astra Maeve</h1>
					<p className='subtitle'>recluse elven archmage ✵ reincarnated blue giant star ✵ loves bunnies</p>
					<div className="action">
						<Link href="/story" className='btn btn-main'>✦ Discover</Link>
						<Link href="/stream" className='btn btn-main ghost'>✦ Catch my streams  </Link>
					</div>

					<div className="decoration">
						<svg className='decor_blob' width="480" height="487" viewBox="0 0 480 487" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M386.878 45.1618C500.204 125.73 506.08 217.39 425.512 330.716C344.944 444.043 208.442 536.121 95.1152 455.553C-18.2112 374.985 -26.5938 224.172 53.9741 110.846C134.542 -2.4804 273.551 -35.4062 386.878 45.1618Z" fill="url(#paint0_linear_134_811)"/>
							<defs>
							<linearGradient id="paint0_linear_134_811" x1="-2.83391" y1="91.7089" x2="407.557" y2="383.471" gradientUnits="userSpaceOnUse">
								<stop stop-color="#F3F6FF"/>
								<stop offset="1" stop-color="#A4BAFF" stop-opacity="0.44"/>
							</linearGradient>
							</defs>
						</svg>
						<img src="/decors/rainbow_circle.png" alt="" className='decor_rainbow' />
					</div>
				</article>
				<figure className='character-part'>
						<div className="galaxy"></div>
						<img src="./arts/character_model_s.png" alt="" className='model' />
				</figure>
			</div>
			
    </main>
  );
}
