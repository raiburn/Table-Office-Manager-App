import './Home.css';
import Table from "../../Components/Home/Table"

const Home = () => {

  return <div className="Home">
    <div className="container">

      {/* <div className="lane">

      </div> */}

      <div className="lane">

        <div className="container-left">
          <div className="subLane">
          <Table> </Table>
          <Table> </Table>
          </div>
          <div className="subLane">
          <Table> </Table>
          <Table> </Table>
          </div>

        </div>

        <div className="container-right">
          <Table> </Table>
          <Table> </Table>
          <Table> </Table>
        </div>

      </div>
    </div>
  </div>
}

export default Home;