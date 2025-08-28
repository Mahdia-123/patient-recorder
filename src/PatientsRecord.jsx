import React, { useEffect, useState } from "react";
import "./PatientsRecord.css";
import PatientsList from "./PatientsList";

export default function PatientsRecord() {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    age: "",
    gender: "",
    condition: "",
    appointmentDate: "",
  });

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age) return;
    setPatients([...patients, { ...form, id: Date.now() }]);
    setForm({
      name: "",
      lastName: "",
      age: "",
      gender: "",
      condition: "",
      appointmentDate: "",
    });
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="patients-record">
        <form onSubmit={handleSubmit}>
          <span>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Name..."
              onChange={handleChange}
            />
          </span>
          <span>
            <label>Last name: </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              placeholder="Last name..."
              onChange={handleChange}
            />
          </span>
          <span>
            <label>Age: </label>
            <input
              type="number"
              name="age"
              value={form.age}
              placeholder="Age..."
              onChange={handleChange}
            />
          </span>
          <span>
            <label>Gender: </label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select Gender: </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </span>
          <span>
            <label>Condition: </label>
            <input
              type="text"
              name="condition"
              value={form.condition}
              placeholder="Condition..."
              onChange={handleChange}
            />
          </span>
          <span>
            <label>Appointment Date: </label>
            <input
              type="date"
              name="appointmentDate"
              value={form.appointmentDate}
              onChange={handleChange}
            />
          </span>
          <div className="button">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <section style={{ display: patients.length > 0 ? "block" : "none" }}>
        <PatientsList patients={patients} deletePatient={deletePatient} />
      </section>
    </div>
  );
}
