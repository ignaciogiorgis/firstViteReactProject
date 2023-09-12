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
      setShifts([...shifts, dataForm])
      setDataForm({
        name: "",
        lastName: "",
        phone: "",
        car: "",
        service: "",
      })
    }
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
          />
        </div>
        <div className="text-center">
          <ViewShiftPanel shifts={shifts} />
        </div>
      </div>
    </div>
  )
}

export default ContainerForm
