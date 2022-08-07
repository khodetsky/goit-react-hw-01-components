import styled from '@emotion/styled'

export const ProfileCard = styled.div`
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;

border-radius: 10px;
max-width: 200px;
width: auto;
height: auto;
padding:24px;
background-color: rgb(186, 195, 202);`;

export const Avatar = styled.img`
margin-bottom: 10px;
width: 120px;`;

export const StatsList = styled.ul`
gap: 16px;
list-style: none;
padding: 0;
display: flex;
flex-direction: row;`;

export const Description = styled.div`
flex-direction: column;
display: flex;
align-items: center;`;

export const UserInfo = styled.p`
margin: 5px 0;`;
export const UserName = styled.b`
margin: 5px 0;`