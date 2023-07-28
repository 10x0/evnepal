import 'preact/debug';
import { render } from 'preact';
import { App } from './app.tsx';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

render(<App />, document.getElementById('app')!);
