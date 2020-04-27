import styled from 'styled-components';

export const FormContainer = styled.div`
	overflow: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginFormLayout = styled.div`
	border-radius: 4px;
	background-color: ${(props) => (props.theme === 'dark' ? '#4835d4' : '#ffffff')};
	position: relative;
	z-index: 1;
	padding: 45px;
	text-align: center;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;

export const SubmitButton = styled.div`
	border-radius: 4px;
	background-color: #72bbff;
	position: relative;
	width: 80px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	color: #ffffff;
	font-weight: 600;
	font-size: 16px;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
	}
`;
