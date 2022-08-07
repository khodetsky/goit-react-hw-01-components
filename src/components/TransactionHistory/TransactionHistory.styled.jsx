import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
margin: 20px 0;
margin-left: auto;
margin-right: auto;
table-layout: fixed;
max-width: 500px;
width: 100%;
border-collapse: collapse;
font-weight: 500;
-webkit-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
-moz-box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);
box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.49);

    thead {
        background-color: rgb(89, 166, 224);
    }

    th {
        padding: 10px;
        font-size: 20px;
    }

    td {
        padding: 5px;
        text-align: center;
    }

    tr:nth-child(even) {
      background-color: rgb(186, 195, 202);
    }
`;