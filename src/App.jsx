import Header from "./Components/ViewHeader"
import Form from "./Components/ViewForm"
import ShiftPanel from "./Components/ViewShiftPanel"

function App() {
  return (
    <>
      <div className="text-center py-10">
        <Header />
      </div>
      <div className="flex justify-evenly ">
        <div className="text-center">
          <Form />
        </div>
        <div className="text-center">
          <ShiftPanel />
        </div>
      </div>
    </>
  )
}

export default App
