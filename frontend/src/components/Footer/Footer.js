import './Footer.css'
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
	return (
		<div className='footer-container'>
			<span className='footer-text'>&copy; Hipcamp 2023</span>
			<div className='footer-about-links'>
				<a href='https://github.com/wleung4/' target='_blank'>
					<img src={github} alt='' className='footer-about-links-icon'/>
				</a>
				<a href='https://www.linkedin.com/in/weyman-leung/' target='_blank'>
					<img src={linkedin} alt='' className='footer-about-links-icon'/>
				</a>
			</div>
		</div>
	)
}

export default Footer;