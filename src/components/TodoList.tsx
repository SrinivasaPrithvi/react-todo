import * as React from 'react';
import {List, Map} from 'immutable';
import {Checkbox, List as MuiList, ListItem, RaisedButton} from 'material-ui';

import TodoItem from './TodoItem';

interface Props {
  todos: List<Map<string, any>>;
}

class TodoList extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  getItems() {
    return this.props.todos || null;
  }

  render() {
    return (
      <MuiList>
        {this.getItems().map((item) =>
          <TodoItem text={item.get('text')} key={item.get('text')} />
        )}
      </MuiList>
    );
  }
}

export default TodoList;
