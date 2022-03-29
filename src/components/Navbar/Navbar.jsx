import { useWalletContext } from '../../contexts/walletContext';
const Navbar = () => {
    const { connectWallet,account } = useWalletContext();
    const NavComponent = ({name})=>(
        <div className="nav-component">{name}</div>
    );

    return (
        <div className="navbar custom-font-family">
            <div className="company-logo-container">
                <div className="logo-container">
                    <img className="logo-container" src="https://johnny-buck.s3.us-west-2.amazonaws.com/hap.jpg" alt="Images"/>
                </div>
                <h3 className="company-name">Company Name</h3>
            </div>
            <div className="nav-content">
                <h1>NFT'$ Saga Land</h1>
            </div>
            <div className="services">
                <NavComponent name="Home"/>
                <NavComponent name="Portfolio"/>
                <NavComponent name="Services"/>
                {!account && (<button type="button" className="wallet-button" onClick={()=>connectWallet()} >Connect Wallet</button>)}
                {account && (account.slice(0,5) )}
            </div>
        </div>
    )
}

export default Navbar
