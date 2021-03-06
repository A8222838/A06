import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import ElevatorController from '../components/elevatorController'

export default function Elevator() {
  return (
    <section>
      <center>
        <h2>電梯控制</h2>
      
      </center>
      
      <ElevatorController/>
    </section>
  )
}

Elevator.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
