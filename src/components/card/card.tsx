import { Component, splitProps } from 'solid-js';
import * as C from './styles';

export type CardProps = {
  title: string
  dark: boolean
  bordered: boolean
}

const Card: Component<CardProps> = (props) => {
  const [local, modifiers] = splitProps(props, ["title"]);

  return (
    <C.Wrapper {...modifiers}>
      <h1>{local.title || 'Default Title'}</h1>
    </C.Wrapper>
  );
};

export default Card;
