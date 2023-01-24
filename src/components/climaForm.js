import { useState } from "react";

export default function ClimaForm({onChangeCity}) {
    const [ciudad, setCiudad] = useState("");

    function onChange(e) {
        const value = e.target.value;
        if (value !== ""){
            setCiudad(value);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(ciudad);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange}/>
    </form>
  );
}