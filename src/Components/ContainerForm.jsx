import React, { useState } from "react"
import ViewForm from "./ViewForm"

const ContainerForm = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    car: "",
    service: "",
  })

  const { name, lastName, car, phone, service } = dataForm

  const [error, setError] = useState(false)

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
    }
  }
  return (
    <div>
      <ViewForm
        handleSubmit={handleSubmit}
        error={error}
        dataForm={dataForm}
        handleDataForm={handleDataForm}
      />
    </div>
  )
}

export default ContainerForm
