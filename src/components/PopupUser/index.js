import Popup from 'reactjs-popup'
import {ImProfile} from 'react-icons/im'
import {IoMdAdd} from 'react-icons/io'
import './index.css'

const PopupUser = ({
  name,
  setName,
  email,
  setEmail,
  role,
  setRole,
  userInfo,
  setUserInfo,
  roleList,
}) => {
  const submitHandler = event => {
    event.preventDefault()

    const details = {
      id: new Date(),
      name,
      email,
      role,
    }
    if (name.length !== 0 && email.length !== 0) {
      setUserInfo([...userInfo, details])
    }
    setName('')
    setEmail('')
    setRole(roleList[0])
  }

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div className="add-user-btn-container">
            <IoMdAdd className="plus-icon" />
            <button type="button" className="add-user-btn">
              Add Employee
            </button>
          </div>
        }
      >
        {close => (
          <>
            <div className="user-input-container">
              <div className="user-profile-img">
                <ImProfile className="profile-img-pop" />
                <p className="description">
                  Please Enter the correct details. If you entered wrong Details your work status going to be opsented
                </p>
              </div>
              <div className="user-form-container">
                <p className="user-info-heading">Employee Information</p>
                <form className="form-container" onSubmit={submitHandler}>
                  <div className="input-container">
                    <label className="label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-box"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-container">
                    <label className="label" htmlFor="email">
                      Email Id of Employee
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-box"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-container">
                    <label className="label" htmlFor="email">
                      Role
                    </label>
                    <select
                      className="input-box"
                      value={role}
                      onChange={e => setRole(e.target.value)}
                    >
                      {roleList.map(each => (
                        <option value={each} key={each}>
                          {each}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="buttons-conatiner">
                    <button
                      type="button"
                      className="close-btn btn"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                    <button type="submit" className="add-btn btn">
                      ADD
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default PopupUser