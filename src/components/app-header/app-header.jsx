import './app-header.css'

function AppHeader(){

    return(
        <header className="header">
            <div className="container header-container">
                <div className="left-header-info">
                    <div className="header-logo">
                        <p>a</p>
                    </div>
                    <p>Discover</p>
                    <p>Make your burger</p>
                </div>
                <div className="right-header-info">
                    <div className="call-back">
                        <img src={'/phone.png'} width='20px'></img>
                        <p>Call Me Back</p>
                    </div>
                    <p>8 800 437-87-22</p>
                    <div className="header-account">
                        <h2>👨</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;