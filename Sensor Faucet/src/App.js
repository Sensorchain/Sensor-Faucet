import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header/Header';
import {
  FaucetWrapper,
  Faucet,
  BalanceView,
  IntroLabel,
  ButtonWrapper,
  DepositButton,
  Input,
} from './APP_CSS';
import './GeneralCss.css';
import { ethers } from "ethers";

function App() {
  const walletRef = useRef(null);
  const [transactionData, setTransactionData] = useState("");
  const [lastClaimTimes, setLastClaimTimes] = useState({});
  const [walletConnected, setWalletConnected] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const storedLastClaimTimes = localStorage.getItem("lastClaimTimes");
    if (storedLastClaimTimes) {
      setLastClaimTimes(JSON.parse(storedLastClaimTimes));
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft && timeLeft > 0) {
        setTimeLeft(timeLeft - 1000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTimeLeft = () => {
    if (!timeLeft) return "";
    const hours = Math.floor(timeLeft / (60 * 60 * 1000));
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    return `Next claim available in ${hours}h ${minutes}m ${seconds}s`;
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const walletAddress = await signer.getAddress();
        walletRef.current.value = walletAddress;
        setWalletConnected(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const sendTransaction = async () => {
    setTransactionData("");
    const walletAddress = walletRef.current.value;

    if (!ethers.utils.isAddress(walletAddress)) {
      setTransactionData("Enter correct wallet address");
      return;
    }

    const currentTime = new Date().getTime();
    if (lastClaimTimes[walletAddress] && currentTime - lastClaimTimes[walletAddress] < 24 * 60 * 60 * 1000) {
      setTimeLeft(24 * 60 * 60 * 1000 - (currentTime - lastClaimTimes[walletAddress]));
      setTransactionData(formatTimeLeft());
      return;
    }

    try {
      const customHttpProvider = new ethers.providers.JsonRpcProvider({url: "https://testnetrpc.sensorchain.io", skipFetchSetup: true}); 
      const senderWallet = ethers.Wallet.fromMnemonic("Your Seed Phrase Here");
      const signer = senderWallet.connect(customHttpProvider);

      const trx = {
        from: senderWallet.address,
        to: walletAddress,
        value: ethers.utils.parseEther("0.1"),
        chainId: 376,
        gasPrice: customHttpProvider.getGasPrice(),
        gasLimit: ethers.utils.hexlify(100000),
        nonce: customHttpProvider.getTransactionCount(senderWallet.address, 'latest'),
      };

      const transaction = await signer.sendTransaction(trx);
      setTransactionData("Transfer is successful. Hash: " + transaction.hash);
      const updatedLastClaimTimes = { ...lastClaimTimes, [walletAddress]: currentTime };
      setLastClaimTimes(updatedLastClaimTimes);
      localStorage.setItem("lastClaimTimes", JSON.stringify(updatedLastClaimTimes));
      setTimeLeft(null); // Reset time left after successful claim
    } catch (err) {
      setTransactionData(err.message);
      console.error(err.message);
    }
  };

  return (
    <>
      <Header onConnect={connectWallet} />
      <FaucetWrapper>
        <IntroLabel>Sensor Faucet</IntroLabel>
        <Faucet>
          <BalanceView>
            <Input
              ref={walletRef}
              className="input is-medium"
              type="text"
              placeholder="Enter wallet address"
              readOnly={walletConnected}
            />                  
          </BalanceView>
          <ButtonWrapper>
            <DepositButton onClick={sendTransaction}>
              Get 0.1 Sensor
            </DepositButton>
          </ButtonWrapper>
          <div>
            <article>
              <div>
                <p className="rpy_msg">
                  {transactionData || formatTimeLeft()}
                </p>
              </div>
            </article>
          </div>
        </Faucet>
      </FaucetWrapper>
    </>
  );
}

export default App;
