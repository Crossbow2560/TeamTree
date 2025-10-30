import './HomePage.css'

function HomePage(){
    return(
        <>
            <div id='home-page-container'>
                <div id='navbar'>
                    <div id='logo'></div>
                    <div id='title'>TeamTree</div>
                    <div className='menu-option' id='workspace'>My Workspace</div>
                    <div className='menu-option' id='messages'>Messages</div>
                    <div className='menu-option' id='compose-idea'>Compose Idea</div>
                    <div id="profile"></div>
                </div>
                <div id='home-header'>Home</div>
            </div>
        </>
    )
}

export default HomePage;