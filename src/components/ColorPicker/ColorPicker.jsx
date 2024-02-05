import {
  StyledBackgroundTheme,
  StyledColorPalette,
  StyledColor,
  StyledColorsList,
} from "./ColorPicker.styled";
import React from "react";
import colorsData from "../../assets/colors.json";
export class ColorPicker extends React.Component {
  state = {
    colors: colorsData,
    currentColor: "white",
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.currentColor);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentColor !== this.state.currentColor; // функція запобігає ререндеру компонента при натисканні на ту саму кнопку кілька разів
  }

  handleChangeColor = (color) => {
    this.setState({ currentColor: color });
  };
  render() {
    const { colors, currentColor } = this.state;
    return (
      <StyledBackgroundTheme $bg={currentColor}>
        <StyledColorPalette>
          <h1>Background color: {currentColor}</h1>
          <StyledColorsList>
            {colors.map((item) => (
              <StyledColor
                key={item.id}
                onClick={() => this.handleChangeColor(item.color)}
              >
                {item.color}
              </StyledColor>
            ))}
          </StyledColorsList>
        </StyledColorPalette>
      </StyledBackgroundTheme>
    );
  }
}
