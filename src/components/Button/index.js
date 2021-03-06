import styled from 'styled-components';

export const Button = styled.a`
border: 1px solid var(--white);
background: var(--black),
border-radius: 4px;
box-sizing: border-box;
color: var(--white);
cursor: pointer;
display: inline-block;
font-size: 16px;
font-weight: bold;
padding: 16px 24px;
text-decoration: none;

transition: opacity .3s;

&:hover,
&:focus {
	opacity: .5;	
};

@media (max-width: 800px) {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;

	background-color: var(--primary);
	border: 0;
	border-radius: 0;
	color: var(--white);
	outline: 0;
	text-align: center;
}
`;

export default Button;