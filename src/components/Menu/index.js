import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
import { LogoImage, MenuWrapper } from './style.js'

function Menu() {
	return (
	<MenuWrapper>
		<Link to="/">
			<LogoImage src={ Logo } alt="Learning React"/>
		</Link>

		<Button as={ Link } className='ButtonLink' to="/cadastro/video">
			Novo Vídeo
		</Button>
	</MenuWrapper>
	);	
}

export default Menu;