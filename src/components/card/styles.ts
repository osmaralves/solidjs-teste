import { styled } from "solid-styled-components";

const theme = {
  fontColor: '#ffffff'
}

type WrapperProps = {
  dark: boolean
  bordered: boolean
}

const modifiers = {
  dark: (theme: any) => `
    background: #444444;
    color: ${theme.fontColor};
    border-color: #000000;
  `,
  bordered: `
    border: 1px solid grey;
    border-radius: 4px;
  `,
};

export const Wrapper = styled.div<WrapperProps>(props => `
  padding: 10px;

  ${props.bordered && modifiers.bordered};
  ${props.dark && modifiers.dark(theme)};
`);
