import React from "react";

export default function ColorHex(props) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    props.onColorHex(value);

    if (value.length === 7) {
      const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

      props.onColorRgb(
        /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value)
          ? "rgb(" +
              parseInt(hexRegex[1], 16) +
              ", " +
              parseInt(hexRegex[2], 16) +
              ", " +
              parseInt(hexRegex[3], 16) +
              ")"
          : "Ошибка ввода HEX"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        maxLength="7"
        name="color"
        value={props.colorHex || "#"}
        onChange={handleChange}
      />
    </form>
  );
}
