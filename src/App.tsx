import { Component, createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Card from './components/card/card';

const App: Component = () => {
  const [title, setTitle] = createSignal<string>('');

  return (
    <div style="padding: 30px;">
      <input type="text" onInput={(e) => setTitle(e.currentTarget.value)} />

      <Card title={title()} bordered dark />
      <Card title={title()} bordered={false} dark={false} />
    </div>
  );
};

export default App;
