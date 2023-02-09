import Aside from '../Aside'
import Header from '../Header'
import UserDetails from '../UserDetails'
import "./index.css"

const Home = () => (
  <div className="App-container">
  <Header />
  <div className="main-section-container">
    <Aside />
    <div className="container">
      <UserDetails/>
    </div>
  </div>
</div>
)

export default Home