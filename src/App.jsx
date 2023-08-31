import Header from "./Components/Header" 
import Form from "./Components/Form"
import ShiftPanel from "./Components/ShiftPanel"

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
