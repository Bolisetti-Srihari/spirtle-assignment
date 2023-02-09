import './index.css'

const Header = () => (
  <div className="header">
    <div>
      <h1 className='logo1'>Company Logo</h1>
    </div>
    <div className="sub-header">
      <div className="nav">
        <h1 className="logo">Employee Attendance</h1>
        
      </div>
      <div className="nav">
        <img
          alt="img"
          className="profile-img"
          src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
        />
        <p className="application-name">Bolisetti Srihari</p>
      </div>
    </div>
    <hr className="horizontal-line" />
  </div>
)

export default Header