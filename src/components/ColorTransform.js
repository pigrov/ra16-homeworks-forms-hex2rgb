import ColorRgb from "./ColorRgb";
import React, { useState } from "react";
import ColorHex from "./ColorHex";
import css from "styled-components";

const Container = css.div`
  background: ${(props) => props.inputColor || "palevioletred"};
`;

export default function ColorTransform(props) {
  const [colorHex, setColorHex] = useState("");
  const [colorRgb, setColorRgb] = useState("");

  const handleColorHex = (value) => {
    setColorHex(value);
  };
  const handleColorRgb = (value) => {
    console.log(value);
    setColorRgb(value);
  };

  return (
    <Container defaultValue="@geelen" inputColor={colorRgb}>
      <ColorHex
        onColorHex={handleColorHex}
        onColorRgb={handleColorRgb}
        colorHex={colorHex}
        colorRgb={colorRgb}
      />
      <ColorRgb colorRgb={colorRgb} />
    </Container>
  );
}
