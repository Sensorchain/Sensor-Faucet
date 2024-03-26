import styled from "styled-components"

export const FaucetWrapper = styled.div`
width: 50rem;
max-width: 80%;
padding: 1rem;
margin: 1rem auto;
`

export const Faucet = styled.div`
width: 100%;
max-width: 95%;
padding: 1rem;
margin: 0.8rem auto;
background: #101112;
margin-top: 1em;
color: #fff;
border-radius: 12px;
box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.4);
`

export const BalanceView = styled.div`
width: 100%;
max-width: 95%;
font-family: Poppins;
font-size: 10rem;
line-height: 0.5;
color: #fff;
margin-top: 0.5rem;
`

export const Input = styled.input`
background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
border: 0 none;
border-radius: 0;
box-shadow: none;
float: none;
background-color: transparent;
background-position: center bottom, center calc(100% - 1px);
background-repeat: no-repeat;
background-size: 0 2px, 100% 1px;
padding: 0;
transition: background 0s ease-out 0s;
color: #bfbfbf;
min-height: 35px;
display: initial;
width: 100%;
outline: none;
font-size: 15px;
&:focus {
    background-size: 100% 2px, 100% 1px;
    outline: 0 none;
    transition-duration: 0.3s;
    color: #525252;
  }
`

export const IntroLabel = styled.div`
font-family: Poppins;
font-size: 2.5em;
font-weight: 700;
color: #f2f2f2;
margin-bottom: 0.3em;
`

export const CaptionLabel = styled.p`
font-family: Poppins;
font-size: 1em;
color: #f2f2f2;

`

export const BalanceLabel = styled.p`
font-family: Poppins;
font-size: 3rem;
line-height: 1.2;
color: #505152;
margin-top: 0.5rem;
`

export const ButtonWrapper = styled.div`
width: 100%;
margin-top: 2em;
display: flex;
`

export const DepositButton = styled.button`
padding: 1rem 2rem;
border-radius: 12px;
border: none;
margin-right: 1em;
background: linear-gradient(97deg,#0039ff 17.25%,#f0c0fa 66.83%,#0039ff 109.06%);
color: #fff;
font-size: 1em;
box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.4);
cursor: pointer;

&:hover{
    opacity: 0.9;
    box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.2);
}
`

export const WithdrawButton = styled.button`
padding: 1rem 2rem;
border-radius: 12px;
border: none;
margin-right: 2em;
background: linear-gradient(97deg,#0039ff 17.25%,#f0c0fa 66.83%,#0039ff 109.06%);
color: #227070;
box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.4);
cursor: pointer;
font-size: 1em;

&:hover{
    opacity: 0.9;
    box-shadow: 0px 3px 6px rgba(0, 0, 0 , 0.2);
}
`

export const CurrentAddress = styled.p`
font-family: Poppins;
font-size: 1rem;
color: #505152;
`
export const ConnectButton = styled.button`
  padding: 1rem 2rem;
  margin-right: 2rem;
  border-radius: 12px;
  align-self: center;
  border: none;
  background: linear-gradient(97deg,#0039ff 17.25%,#f0c0fa 66.83%,#0039ff 109.06%);
  font-weight: 700;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 40%);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;