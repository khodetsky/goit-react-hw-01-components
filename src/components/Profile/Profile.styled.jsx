import styled from '@emotion/styled';

export const ProfileCard = styled.div`
box-sizing: border-box;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;

border-radius: 10px;
max-width: 300px;
width: auto;
height: auto;
padding: 24px;
font-size: 20px;
background-color: rgb(186, 195, 202);

-webkit-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
`;

export const Avatar = styled.img`
border-radius: 50%;
border: 2px solid #000;
margin-bottom: 10px;
width: 120px;

-webkit-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
`;

export const StatsList = styled.ul`
gap: 20px;
list-style: none;
padding: 0;
margin-bottom: 0;
display: flex;
flex-direction: row;`;

export const Description = styled.div`
flex-direction: column;
display: flex;
align-items: center;`;

export const UserInfo = styled.p`
margin: 5px 0;`;
export const UserName = styled.b`
font-size: 24px;
margin: 5px 0;`