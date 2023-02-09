import Header from '../Header'
import Aside from '../Aside'

const Customers = () => (
  <div className="App-container">
    <Header />
    <div className="main-section-container">
      <Aside />
      <div className="container">
        <h1 className="heading">Display Customers</h1>
      </div>
    </div>
  </div>
)

export default Customers