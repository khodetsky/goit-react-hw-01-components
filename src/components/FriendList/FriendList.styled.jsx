import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
flex-direction: column;
display: flex;
list-style: none;

padding: 10px 0;
margin: 0;
`;

export const FriendsListItemStyle = styled.li`
gap: 10px;
display: flex;
align-items: center;
justify-content: flex-start;

margin: 5px 10px;
padding:0 10px;

font-weight: 500;
font-size:24px;
border-radius: 5px;

-webkit-box-shadow: 7px 7px 9px 0px rgba(0,0,0,0.4);
-moz-box-shadow: 7px 7px 9px 0px rgba(0,0,0,0.4);
box-shadow: 7px 7px 9px 0px rgba(0,0,0,0.4);

`;

export const FriendListContainer = styled.div`
margin-top:20px;
margin-left: auto;
margin-right: auto;
max-width: 300px;
width: auto;
display: flex;
flex-direction: column;
background-color: rgb(186, 195, 202);
align-items: center;
border-radius: 10px;

-webkit-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
`;
