import React, { useState } from "react"
import ViewForm from "./ViewForm"
import ViewShiftPanel from "./ViewShiftPanel"
import ViewHeader from "./ViewHeader"
import generateId from "../utils/utils"

const ContainerForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    car: "",
    service: "",
    id: generateId(),
  })

  const { name, lastName, car, phone, service } = dataForm

  const [error, setError] = useState(false)

  const [shifts, setShifts] = useState([])
  const [shift, setShift] = useState({})

  const handleDataForm = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, lastName, phone, car, service].includes("")) {
      setError(true)
    } else {
      setError(false)
      if (shift.id) {
        dataForm.id = shift.id
        const newShifts = shifts.map((shiftState) =>
          shiftState.id === shift.id ? dataForm : shiftState
        )
        setShifts(newShifts)
        setShift({})
      } else {
        const newId = generateId()
        setShifts([...shifts, { ...dataForm, id: newId }])
      }
    }
    setDataForm({
      name: "",
      lastName: "",
      phone: "",
      car: "",
      service: "",
    })
  }

  const deleteShift = (id) => {
    const shiftsNew = shifts.filter((element) => element.id !== id)
    setShifts(shiftsNew)
  }
  return (
    <div>
      <div className="text-center py-10">
        <ViewHeader />
      </div>
      <div className="flex justify-evenly ">
        <div className="text-center">
          <ViewForm
            handleSubmit={handleSubmit}
            error={error}
            dataForm={dataForm}
            handleDataForm={handleDataForm}
            shift={shift}
            setDataForm={setDataForm}
            setShift={setShift}
          />
        </div>
        <div className="text-center">
          <ViewShiftPanel
            shifts={shifts}
            setShift={setShift}
            deleteShift={deleteShift}
            shift={shift}
          />
        </div>
      </div>
    </div>
  )
}

export default ContainerForm
