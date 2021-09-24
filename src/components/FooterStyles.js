import styled from 'styled-components';

export const Box = styled.div`
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
width: 100%;
background: #001018;
display: block;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
  display: flex;
  color: grey;
	font-size: 16px;
	text-align: justify;
	line-height: 25px;
  margin-top:20px;
	/* 
	justify-content: center;
	max-width: 1000px;
  margin: 0 auto;
  color: #fff;
	background: red; */
`;
export const Border=styled.base`
height: 2px;
	width: 40px;
	background: blue;
`;

export const Ul=styled.ul`
list-style: none;
	color: #fff;
	font-size: 15px;
	letter-spacing: 0.5px;
  font-weight:100;
`;

export const Li=styled.li`
margin: 10px 0;
	height: 25px;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
align-items:justify;
width: 25%;
padding: 10px 20px;
box-sizing: border-box;
  

@media(max-width: 991px){
	
		width:50%;
		margin-bottom:1rem;
		padding:0px 8px;
		height:23rem;

}

@media(max-width:550px){

		width:100%;
		margin-bottom:1rem;
		padding:0px 4px;
		height:23rem;
}
`;

export const Encloser = styled.div`

width: 100%;
	margin: auto;
	padding: 10px;
	display: flex;
	flex-wrap: wrap; 
	box-sizing: border-box;
	justify-content: center;
`;

export const FooterBottom = styled.p`
padding: 10px;
	background: #3d545f;
	color: #fff;
	font-size: 12px;
	text-align: center;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
outline: none;
transition: 0.3s;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;
export const Icon=styled.i`

  height: 40px;
	width: 40px;
	margin: 20px 5px;
	padding: 9px 10px;
	color: #fff;
	border-radius: 50%;
	border: 1px solid grey;
	transition: 0.3s;
	text-align: center;

  &:hover {
    background: grey;
  }

`;

export const Heading = styled.p`
margin: 10px 0;
	color: grey;
	font-size: 16px;
	font-weight: lighter;
	text-transform: uppercase;
`;
export const Heading1 = styled.p`
margin: 10px 0;

color: darkgray;
	font-size: 25px;
	text-transform: uppercase;
`;