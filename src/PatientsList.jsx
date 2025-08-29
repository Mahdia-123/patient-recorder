import React from "react";

export default function PatientsList({ patients, deletePatient }) {
  return (
    <div className="patients-list">
      <div className="heading">
        <strong>Name</strong>
        <strong>Last name</strong>
        <strong>Age</strong>
        <strong>Gender</strong>
        <strong>Condition</strong>
        <strong>Appointment Date</strong>
        <strong>Actions</strong>
      </div>

      {patients.map((p) => (
        <div className="patients-detrails" key={p.id}>
          <div>{p.name}</div>
          <div>{p.lastName}</div>
          <div>{p.age} Y</div>
          <div>{p.gender} </div>
          <div>{p.condition}</div>
          <div>{p.appointmentDate}</div>
          <div>
            <button onClick={() => deletePatient(p.id)}>Delete</button>
          </div>
        </div>
      ))}
      <h3 className="total-count">Total Patients: {patients.length}</h3>
    </div>
  );
}
