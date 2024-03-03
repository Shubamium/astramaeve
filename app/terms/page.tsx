import React from 'react'
import PageTitle from '../components/layout/pageTitle/PageTitle'
import './terms.scss'
import GeneralRules from './generalRules/GeneralRules'
import { FaEye, FaLanguage, FaListCheck, FaMessage } from 'react-icons/fa6'
import { IoWarningSharp } from 'react-icons/io5'
import { RiEmotionHappyFill, RiSpeakFill } from 'react-icons/ri'
import { FaFrown } from 'react-icons/fa'
import { FcPrivacy } from 'react-icons/fc'
import { TfiUppercase } from 'react-icons/tfi'
import { CgLock } from 'react-icons/cg'


type Props = {}

export default function page({}: Props) {
	return (
		<main id="page_terms">
				<PageTitle
					title='Rules'
					subtitle='general guidelines '
				/>
			<GeneralRules/>
			<section className='fandom-rules' id='rules'>
				<figure className="art-part">
						<img src="/arts/character_art_xl.png" alt="" className='chara_xl' />
				</figure>
				<article>
					<div className="fandom-head">
						<div className="fandom-title">
							<h2>✦FANDOM RULES</h2>
							<hr />
						</div>
						<p>For everyone sake, please respect these simple rules, so that we all can get along together!</p>
					</div>
					
					<div className="fandom-rules-list">
						<div className="fandom-rule">
								<div className="icon">
									<IoWarningSharp/>
								</div>
								<div className="text-part">
									<h2>No Spamming</h2>
									<p>Refrain from sending excessive, repetitive messages or flooding the chat with emojis, symbols, or links. Exceptions can be made during Karaoke streams!</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<RiSpeakFill/>
								</div>
								<div className="text-part">
									<h2>No Self-Promotion</h2>
									<p>Avoid promoting your own content, channels, or services without Astra’s permission. This includes sharing links without approval. Astra or the moderators themselves will proceed into giving a shoutout anyway to friends and fellow streamer friends!
</p>
								</div>
						</div>
						
						<div className="fandom-rule">
								<div className="icon">
									<FaEye/>
								</div>
								<div className="text-part">
									<h2>Avoid talking of other streamers</h2>
									<p>{`
										Kindly avoid bringing up other streamers excessively. While it's acceptable to briefly mention friends, it's not ideal to discuss other streamers extensively during the stream. Feel free to touch on the topic briefly, but please refrain from prolonging such conversations, unless Astra initiates the discussion themselves!
									`}</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<FaMessage/>
								</div>
								<div className="text-part">
									<h2>No Spoilers</h2>
									<p> Be mindful of spoilers, especially if the streamer is playing a game or experiencing content for the first time. Use spoiler tags if necessary.</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<FaListCheck/>
								</div>
								<div className="text-part">
									<h2>{`Follow Streamer's Guidelines`}</h2>
									<p>Treat others with kindness and respect. Avoid offensive language, hate speech, and personal attacks.</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<RiEmotionHappyFill/>
								</div>
								<div className="text-part">
									<h2>{`Mind Chat Mods`}</h2>
									<p> Follow the instructions of chat moderators. They are there to enforce the rules and maintain a positive environment.</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<FaLanguage/>
								</div>
								<div className="text-part">
									<h2>{`Use English (unless otherwise specified)`}</h2>
									<p>If the streamer requests English-only chat, please communicate in English to ensure everyone can understand and participate.
</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<FaFrown/>
								</div>
								<div className="text-part">
									<h2>{`No Trolling or Harassment`}</h2>
									<p> Do not engage in trolling, bullying, or harassing behavior. Report any inappropriate behavior to the moderators.</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<CgLock/>
								</div>
								<div className="text-part">
									<h2>{`Follow Streamer's Guidelines`}</h2>
									<p>{`Avoid sharing personal information, including your own and others'. Protect your privacy and the privacy of others.`}

</p>
								</div>
						</div>
						<div className="fandom-rule">
								<div className="icon">
									<TfiUppercase/>
								</div>
								<div className="text-part">
									<h2>{`No CAPSLOCK Abuse`}</h2>
									<p>{`Avoid excessive use of capital letters, as it can be perceived as shouting and disrupt the chat.`}
</p>
								</div>
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}