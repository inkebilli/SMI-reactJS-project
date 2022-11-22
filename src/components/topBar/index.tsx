
function Language(){
  return(
    <nav className='topbar'>
        <input type='text' placeholder='search' />
        {/*<Language />*/}
        <img className='profile-image' src='#img' alt="user profile picture"/>
    <div className="Language-dropdown m-0 p-2">
  <button className="Language-dropbtn">En</button>
  <div className="Language-dropdown-content">
    <a href="#Arabic">Ar</a>
    <a href="#English">En</a>
    <a href="#Japanese">Jp</a>
  </div>
</div> </nav>
  )
}
function TopBar(){

    return(
        <nav className="navbar navbar-expand-lg  topbar">
          <div className="container-fluid">  
            <div className="collapse navbar-collapse row" id="navbarSupportedContent">
              <form className="d-flex col-sm-6" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-sm"> 
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    En
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#Frensh">Fr</a></li>
                    <li><a className="dropdown-item" href="#Arabic">Ar</a></li> 
                    <li><a className="dropdown-item" href="#Japanese">Jp</a></li>
                  </ul>
                </li> 
              </ul>
               <img className='profile-image rounded-circle col-sm-4' src='https://www.kiabi.com/images/robe-longue-fleurie-rouge-femme-du-34-au-48-yi369_1_frb1.jpg' alt="user profile picture"/>
            </div>
          </div>
        </nav>
   )
}
export default TopBar