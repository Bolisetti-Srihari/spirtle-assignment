import Header from '../Header'
import Aside from '../Aside'
import './index.css'

const Demos = () => (
  <div className="App-container">
    <Header />
    <div className="main-section-container">
      <Aside />
      <div className="container">
        <h1 className="heading">Company Instructions</h1>
      </div>
    </div>
  </div>
)

export default Demos