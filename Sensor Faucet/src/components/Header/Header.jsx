import React from 'react';
import Logo from "../../Images/ETH_TURIN__logo111.png";
import {
    Nav,
    NavWrapper,
    LogoImg,
    ConnectButton
} from "./HeaderElements";

const Header = ({ onConnect }) => {
    return (
        <Nav>
            <NavWrapper>
                <LogoImg src={Logo} />

                <ConnectButton onClick={onConnect}>
                    Connect Wallet
                </ConnectButton>
            </NavWrapper>
        </Nav>
    );
};

export default Header;
