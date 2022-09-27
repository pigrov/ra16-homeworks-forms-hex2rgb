import React from "react";

export default function ColorHex(props) {
  const [color, setColor] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    evt.preventDefault();

    const { value } = evt.target;
    setColor(value);
    console.log(value.length);
    if (value.length > 0) {
      //const hexRegex = /^[#]*([A-Fa-f0-9]{6})$/i;

      //   if (value.length === 7) {
      //     const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;

      //     if (hexRegex.test(value)) {
      //       return console.log("good HEX");
      //     } else {
      //       return console.log("error HEX");
      //     }
      //   }

      const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
      console.log(hexRegex);
      const rgbResult =
        hexRegex &&
        "rgb(" +
          parseInt(hexRegex[1], 16) +
          ", " +
          parseInt(hexRegex[2], 16) +
          ", " +
          parseInt(hexRegex[3], 16) +
          ")";
      console.log(rgbResult);

      //   if (hexRegex.test(hexRegex)) {
      //     const rgbResult =
      //       "rgb(" +
      //       parseInt(hexRegex[1], 16) +
      //       ", " +
      //       parseInt(hexRegex[2], 16) +
      //       ", " +
      //       parseInt(hexRegex[3], 16) +
      //       ")";
      //     console.log(rgbResult);
      //   }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="color" value={color} onChange={handleChange} />
    </form>
  );
}
