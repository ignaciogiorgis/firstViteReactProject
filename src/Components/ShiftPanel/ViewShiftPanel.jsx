import React from "react"

const ShiftPanel = () => {
  return (
    <div>
      <h3 className="uppercase mb-8 text-xl">Shift Panel</h3>
      <div className="h-screen overflow-y-auto">
        <div className="bg-amber-50 rounded-xl p-16 grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-left">
              Name: <span className="font-bold">Ignacio</span>
            </p>
            <hr />
          </div>
          <div>
            <p className="text-left">
              LastName : <span className="font-bold">Giorgis</span>
            </p>
            <hr />
          </div>
          <div>
            <p className="text-left">
              phone : <span className="font-bold">123456896</span>
            </p>
            <hr />
          </div>
          <div>
            <p className="text-left">
              car : <span className="font-bold">toyota prius</span>
            </p>
            <hr />
          </div>
          <div>
            <p className="text-left">
              service : <span className="font-bold">10.000 km</span>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShiftPanel
