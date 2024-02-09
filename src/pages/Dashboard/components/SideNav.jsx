import './SideNav.scss';
import Logo from '../../../assets/images/ShelterStridesideLogo.svg'
import BackArrow from '../../../assets/icon/Rightarrow.svg'
import Home from '../../../assets/icon/Home.svg'
import Booking from '../../../assets/icon/Rightarrow.svg'
import Wallet from '../../../assets/icon/Wallet.svg'

const SideNav = () => {
    return (
        <div className='sidebar-wrapper'>
            <div className="logo-wrapper">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <span className="acct-type">For Beneficiary</span>
                </div>

                <div className="nav-toggler">
                    <img src={BackArrow} alt="toggle-icon" />
                </div>
            </div>

            <div className="nav-items">
                <h2>Menu</h2>
                <div className="menu">
                    <div className="nav-item">
                        <img src={Home} alt="Home" />
                        <p>Dashboard</p>
                    </div>
                    <div className="nav-item">
                        <img src={Booking} alt="Book" />
                        <p>Rent a home</p>
                    </div>
                    <div className="nav-item">
                        <img src={Booking} alt="Buy" />
                        <p>Buy a home</p>
                    </div>
                    <div className="nav-item">
                        <img src={Booking} alt="Maintenance" />
                        <p>Maintenance</p>
                    </div>
                    <div className="nav-item">
                        <img src={Wallet} alt="" />
                        <p>Payments</p>
                    </div>

                </div>

                <div className="account">
                    <h2>Account management</h2>
                    <div className="nav-item">
                        <img src="" alt="" />
                        <p>Account Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SideNav