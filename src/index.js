import React from 'react';
import { render } from 'react-dom';
import ExercisesList from './components/list';
import exercises from './config/exercises';
import { init } from './worker';

init();

const App = ({ exercises }) => (

  <div>
    <aside className="side-bar">
      <img src='public/images/recur-exercises-logo.svg' />
      <h1>Recursion exercises</h1>
      <ul className='list'>
        <li className='list-item'><a href='#sum'>Sum</a></li>
        <li className='list-item'><a href='#exponent'>Exponentiation</a></li>
        <li className='list-item'><a href='#factorial'>Factorial</a></li>
        <li className='list-item'><a href='#fibonacci'>Fibonacci sequence</a></li>
        <li className='list-item'><a href='#range'>Range sequence</a></li>
        <li className='list-item'><a href='#gcd'>Greatest common divisor</a></li>
        <li className='list-item'><a href='#binarySearch'>Binary search</a></li>
        <li className='list-item'><a href='#quickSort'>Quick sort</a></li>
      </ul>
      <p><small>ES2015 is supported in the editor via Babel. All of the changes are stored into localStorage, submited code is stored on Firebase.</small></p>
      <p><small>There's also Node version of the exercises for local testing. Clone the repo from <a href='https://github.com/roman01la/recursion-exercises'>GitHub</a>.</small></p>
      <p><small>Found a bug? Report an <a href='https://github.com/roman01la/recursion-exercises/issues'>issue</a>.</small></p>
    </aside>
    <ExercisesList exercises={exercises} />
  </div>
);

render(<App exercises={exercises} />, document.getElementById('exercises'));