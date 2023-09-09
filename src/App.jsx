import ContainerHeader from "./Components/ContainerHeader"
import ContainerForm from "./Components/ContainerForm"
import ContainerShiftPanel from "./Components/ContainerShiftPanel"

function App() {
  return (
    <>
      <div className="text-center py-10">
        <ContainerHeader />
      </div>
      <div className="flex justify-evenly ">
        <div className="text-center">
          <ContainerForm />
        </div>
        <div className="text-center">
          <ContainerShiftPanel />
        </div>
      </div>
    </>
  )
}

export default App
