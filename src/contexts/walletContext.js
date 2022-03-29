import { useState, createContext, useContext, useEffect } from "react";
const { ethereum } = window;
const WalletContext = createContext();

export const WalletsContexts = ({children})=>{
    const [account,setAccount] = useState();
    const connectWallet = async ()=>{
        try{
            if(!ethereum){
                return alert('Please Install MetaMask First...');
            }
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setAccount(accounts[0]);
        }catch(e){
            console.log(e);
        }
    }

    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length !== 0) {
                console.log('Getting Accounts');
                return true;
            } else {
                console.log("No accounts found");
                return false;
            }
            }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
            checkIfWalletIsConnect();
    }, [account]);

    return(
        <WalletContext.Provider value={{connectWallet,account,checkIfWalletIsConnect}}>
            { children }
        </WalletContext.Provider>
    );
}

export const useWalletContext = ()=> useContext(WalletContext);

