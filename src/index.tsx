import * as React from 'react';
import {render} from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {List, Map} from 'immutable';

import TodoApp from './components/TodoApp';

injectTapEventPlugin();

const todos = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false}),
  Map({id: 2, text: 'Redux', status: 'active', editing: false}),
  Map({id: 3, text: 'Immutable', status: 'completed', editing: false}),
);

render(
  <TodoApp todos={todos} />,
  document.getElementById('app')
);
