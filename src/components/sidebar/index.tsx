

function SideBar(){


    return(<div className='sidebar'>
      <img className="smi-logo" width='88px' alt="logo shop my influence" src="https://uploads-ssl.webflow.com/6213d5592c456c13eabf8e04/6213dec03f7b479cfcaf6e3e_logo%20shopmyinfluence%2001-01-p-500.png" />
        <a href="/" className='active' ><i className='bi-file-easel icon'></i> Dashboard</a>
        <a href="/influencers"><i className='bi-people-fill icon'></i> Influencers</a>
        <a href="/statistics"><i className='bi-graph-up icon'></i> Statistics</a>
        <a href="/logout" className='logout'><i className='bi-power icon'></i> logout</a>
      </div>)
}

export default SideBar