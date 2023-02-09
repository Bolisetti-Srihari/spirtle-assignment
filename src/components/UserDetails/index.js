import {useState, useEffect} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {MdDelete} from 'react-icons/md'
import PopupUser from '../PopupUser'
import './index.css'

const UserDetails = () => {
  const roleList = ["Manager","Team Leader","Employee"]

  const getDetails = JSON.parse(localStorage.getItem('userInfoDetails'))

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState(roleList[0])
  const [userInfo, setUserInfo] = useState(
    getDetails !== null ? getDetails : [],
  )

  const [perPage, setPerPage] = useState(5)
  const [activePage, setActivePage] = useState(1)
    console.log(setPerPage)
  useEffect(() => {
    localStorage.setItem('userInfoDetails', JSON.stringify(userInfo))
  }, [userInfo])

  const setDateHandler = date => {
    const setDate = formatDistanceToNow(new Date(date))

    const dateSet = setDate.split(' ')
    if (dateSet.length <= 3) {
      const convt = dateSet.join(' ')
      return `${convt} ago`
    }
    return setDate
  }

  const onDelete = id => {
    const filteredResults = userInfo.filter(each => each.id !== id)
    setUserInfo(filteredResults)
  }

  const onHandlerNextPage = () => {
    if (activePage >= 1 && userInfo.length > activePage * perPage) {
      setActivePage(activePage + 1)
    }
  }

  const onHandlerPrevPage = () => {
    if (activePage <= userInfo.length && activePage > 1) {
      setActivePage(activePage - 1)
    }
  }

  const indexOfLastPost = activePage * perPage
  const indexOfFirstPost = indexOfLastPost - perPage
  const currentPosts = userInfo.slice(indexOfFirstPost, indexOfLastPost)


  return (
    <div className="main-container">
      <PopupUser
        roleList={roleList}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        role={role}
        setRole={setRole}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <table className="table-conatiner">
        <thead className="header-rows">
          <tr className="header-rows">
          <td className="data-sNo">#</td>
            <td className="data">User</td>
            <td className="data">Last Signed in</td>
            <td className="data">Role</td>
            <td className="data-delete"></td>
          </tr>
        </thead>

        {currentPosts.map((item,index) => (
          <tbody className="rows-row" key={item.id}>
            <tr className="rows" key={item.id}>
            <td className="data-row-sNo">{index+1}</td>
              <td className="data-row">{item.name}</td>
              <td className="data-row">{setDateHandler(item.id)}</td>
              <td className="data-row">{item.role}</td>
              <td className="data-row-delete" onClick={() => onDelete(item.id)}>
                <MdDelete className="delete-icon" />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {userInfo.length > perPage && (
        <div className="pagination-container">
          <p className="prev-page" onClick={onHandlerPrevPage}>
            PREV
          </p>
          <p className="page-no">{activePage}</p>
          <p className="next-page" onClick={onHandlerNextPage}>
            NEXT
          </p>
        </div>
      )}
    </div>
  )
}

export default UserDetails